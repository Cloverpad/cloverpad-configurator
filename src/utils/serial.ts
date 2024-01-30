import { cloverpad } from "../protocol";
import { SerialNotSupportedError, SerialOpenError } from "./errors";

export enum KeypadVariant {
  CLOVERPAD_HE_R1 = "cloverpad-he-r1",
}

export const SUPPORTED_KEYPADS = [
  {
    usbVendorId: 0x1005,
    usbProductId: 0x9005,
    variant: KeypadVariant.CLOVERPAD_HE_R1,
    name: "Cloverpad HE (rev. 1)",
  },
];

export class Keypad {
  port: SerialPort;

  constructor(port: SerialPort) {
    this.port = port;
  }

  static async pairKeypad(): Promise<Keypad | null> {
    if (!navigator.serial) {
      throw new SerialNotSupportedError();
    }

    const selectedPort = await navigator.serial.requestPort({
      filters: SUPPORTED_KEYPADS,
    });

    if (!selectedPort) {
      // No port was selected
      return null;
    }

    return new Keypad(selectedPort);
  }

  static async getPairedKeypads(): Promise<Keypad[]> {
    if (!navigator.serial) {
      throw new SerialNotSupportedError();
    }

    // TODO: Sanity check that we haven't got extra ports
    const allPorts = await navigator.serial.getPorts();
    return allPorts.map((port) => new Keypad(port));
  }

  async sendCommand(
    command: cloverpad.Command
  ): Promise<cloverpad.Response | null> {
    let reader: ReadableStreamBYOBReader | null = null;
    let writer: WritableStreamDefaultWriter<Uint8Array> | null = null;

    try {
      // Open the serial port if necessary
      if (!this.port.readable || !this.port.writable) {
        await this.port.open({
          baudRate: 9600,
          dataBits: 8,
          stopBits: 1,
          parity: "none",
          bufferSize: 256,
        });
      }

      // Ensure that we can get the reader/writer
      if (!this.port.readable || !this.port.writable) {
        throw new SerialOpenError();
      }

      // Send the command length followed by command data
      const commandBytes = cloverpad.Command.encode(command).finish();
      const commandLengthBytes = convertUint32ToLeBytes(
        commandBytes.byteLength
      );

      writer = this.port.writable.getWriter();
      await writer.write(commandLengthBytes);
      await writer.write(commandBytes);

      // Read the response length, then the response data
      reader = this.port.readable.getReader({ mode: "byob" });
      const responseLengthBuffer = await readExact(reader, new ArrayBuffer(4));
      const responseLength = convertLeBytesToUint32(responseLengthBuffer);
      const responseDataBuffer = await readExact(
        reader,
        new ArrayBuffer(responseLength)
      );

      // Decode the response
      const responseDataByteView = new Uint8Array(responseDataBuffer);
      return cloverpad.Response.decode(responseDataByteView, responseLength);
    } finally {
      if (reader) {
        reader.releaseLock();
      }

      if (writer) {
        writer.releaseLock();
      }

      if (reader || writer) {
        this.port.close();
      }
    }
  }
}

/**
 * Converts an unsigned 32-bit integer to little endian bytes.
 * @param value The unsigned 32-bit integer to convert.
 * @returns The unsigned 32-bit integer as little endian bytes.
 */
function convertUint32ToLeBytes(value: number): Uint8Array {
  return new Uint8Array([
    value & 0xff,
    (value >> 8) & 0xff,
    (value >> 16) & 0xff,
    (value >> 24) & 0xff,
  ]);
}

/**
 * Converts little endian bytes to an unsigned 32-bit integer.
 * @param buffer The little endian bytes of the unsigned 32-bit integer.
 * @returns The unsigned 32-bit integer, or 0 if it could not be parsed.
 */
function convertLeBytesToUint32(buffer: ArrayBuffer): number {
  return new Uint32Array(buffer).at(0) ?? 0;
}

/**
 * Reads an exact number of bytes into the provided {@link ArrayBuffer}.
 * @param reader The {@link ReadableStreamBYOBReader} reader to use.
 * @param buffer The {@link ArrayBuffer} to fill.
 * @returns The filled {@link ArrayBuffer} (assuming that the reader did not end early).
 */
async function readExact(
  reader: ReadableStreamBYOBReader,
  buffer: ArrayBuffer
): Promise<ArrayBuffer> {
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
