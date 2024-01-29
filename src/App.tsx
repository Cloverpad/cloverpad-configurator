import { cloverpad } from "./protocol";

function App() {
  const firwmareVersionParams = cloverpad.FirmwareVersion.create();
  const command = cloverpad.Command.create({
    firmwareVersion: firwmareVersionParams,
  });
  const commandBytes = cloverpad.Command.encode(command).finish();

  // TODO: For now, hard code the byte length, since it needs to be an unsigned 32-bit integer in little endian
  // Eventually, it should be varint
  const commandLengthBytes = new Uint8Array([3, 0, 0, 0]);

  console.log(command);
  console.log(commandBytes);

  const combineArrays = (...buffers: Uint8Array[]): Uint8Array => {
    const size = buffers.reduce((acc, arr) => acc + arr.byteLength, 0);
    const combined = new Uint8Array(size);

    let byteOffset = 0;
    for (const buffer of buffers) {
      combined.set(buffer, byteOffset);
      byteOffset += buffer.byteLength;
    }

    return combined;
  };

  const readInto = async (reader: ReadableStreamBYOBReader, buffer: ArrayBuffer): Promise<ArrayBuffer> => {
    let offset = 0;

    while (offset < buffer.byteLength) {
      const { value, done } = await reader.read(new Uint8Array(buffer, offset));
      if (done) {
        break;
      }

      buffer = value.buffer;
      offset += value.byteLength;
    }

    return buffer;
  }

  const requestFirmwareVersion = async () => {
    if (!navigator.serial) {
      alert("Web Serial is not supported");
      return;
    }

    // Like WebUSB, the user has to explicitly grant permission to a serial port
    // This requires requesting it first
    const selectedSerialPort = await navigator.serial.requestPort({
      filters: [{ usbVendorId: 0x1005, usbProductId: 0x9005 }],
    });

    if (!selectedSerialPort) {
      alert("No serial port selected");
      return;
    }

    // After requesting, it will appear when retrieving the full list
    const allSerialPorts = await navigator.serial.getPorts();
    console.log(allSerialPorts);

    try {
      // We first have to open it
      if (!selectedSerialPort.readable || !selectedSerialPort.writable) {
        await selectedSerialPort.open({
          baudRate: 9600,
          dataBits: 8,
          stopBits: 1,
          parity: "none",
          flowControl: "hardware",
          bufferSize: 256,
        });
      }

      // Retrieve the writer for the serial port
      const writer = selectedSerialPort.writable?.getWriter();
      if (!writer) {
        console.log("Unable to retrieve writer");
        return;
      }

      // Send the command length followed by the command data
      await writer.write(commandLengthBytes);
      await writer.write(commandBytes);

      // We have to release the lock afterwards
      writer.releaseLock();

      // Read the response length (unsigned 32-bit LE integer)
      if (!selectedSerialPort.readable) {
        return;
      }

      let responseLengthBuffer = new ArrayBuffer(4);
      const reader = selectedSerialPort.readable.getReader({ mode: "byob" });
      responseLengthBuffer = await readInto(reader, responseLengthBuffer);

      // Convert this into an unsigned 32-bit integer
      const responseLengthView = new Uint32Array(responseLengthBuffer);
      const responseLength = responseLengthView.at(0) ?? 0;
      console.log(responseLength);

      // Read the response
      let responseDataBuffer = new ArrayBuffer(responseLength);
      responseDataBuffer = await readInto(reader, responseDataBuffer);
      reader.releaseLock();

      // Create a byte array view and parse the response
      const responseDataView = new Uint8Array(responseDataBuffer);
      const response = cloverpad.Response.decode(responseDataView, responseLength);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      await selectedSerialPort.close();
    }
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        onclick={() => requestFirmwareVersion()}
      >
        Get Firmware Version
      </button>
    </>
  );
}

export default App;
