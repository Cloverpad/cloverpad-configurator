/**
 * Custom {@link Error} type that is thrown when Web Serial is not supported.
 */
export class SerialNotSupportedError extends Error {
  constructor() {
    super("Web Serial is not supported on this browser");
    this.name = "SerialNotSupportedError";
  }
}

export class SerialOpenError extends Error {
  constructor() {
    super("Unable to open serial port");
    this.name = "SerialOpenError"
  }
}

/**
 * Custom {@link Error} type that is thrown when a serial read fails.
 */
export class SerialReadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SerialReadError";
  }
}

/**
 * Custom {@link Error} type that is thrown when a serial write fails.
 */
export class SerialWriteError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SerialWriteError";
  }
}
