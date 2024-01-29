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

      // Retrieve the reader for the serial port
      const reader = selectedSerialPort.readable?.getReader();
      if (!reader) {
        console.log("Unable to retrieve reader");
        return;
      }

      // TODO: I can't read the values once, since it may be incomplete
      // But I also can't read indefinitely, since 'done' is only set on a break condition
      // From the Web Serial spec, it looks like I'm meant to have a pre-determined way to signal end of transmission
      //
      // One idea is to send the data as hexadecimal strings:
      // - Print data
      // - Print terminator character - e.g. end of line, end of transmission
      //
      // Then on the reader side:
      // - Read the values until the terminator character appears
      // - Parse the hexadecimal string into a byte array
      // - Decode the string

      // Read the next chunk of data
      let complete = false;
      let partialBuffers: Uint8Array[] = [];

      while (true) {
        const { value, done } = await reader.read();
        console.log(value);
        console.log(done);

        if (value) {
          partialBuffers.push(value);

          if (value.includes(0x03, value.byteLength - 2) && value.includes(0x04, value.byteLength - 1)) {
            reader.releaseLock();
            break;
          }
        }

        if (done) {
          // Need to release the lock when we're finished
          reader.releaseLock();
          break;
        }
      }

      let value = combineArrays(...partialBuffers);

      if (value) {
        // The data is after the unsigned 32-bit LE byte length
        const dataBuffer = value.slice(4);
        console.log(dataBuffer);

        // Attempt to decode it
        const response = cloverpad.Response.decode(dataBuffer);
        console.log(response);
        console.log(response.code);

        if (response.firmwareVersion?.version) {
          alert(response.firmwareVersion.version);
        } else {
          alert("Unable to retrieve firmware version");
        }
      }
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
