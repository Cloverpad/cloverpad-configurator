import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace cloverpad. */
export namespace cloverpad {

    /** ResponseCode enum. */
    enum ResponseCode {
        SUCCESS = 0,
        UNKNOWN_ERROR = 1,
        DECODE_ERROR = 2,
        UNSUPPORTED_COMMAND = 3,
        INVALID_PARAMETERS = 4
    }

    /** Properties of a Command. */
    interface ICommand {

        /** Command firmwareVersion */
        firmwareVersion?: (cloverpad.IFirmwareVersion|null);

        /** Command getConfiguration */
        getConfiguration?: (cloverpad.IGetConfiguration|null);

        /** Command saveConfiguration */
        saveConfiguration?: (cloverpad.ISaveConfiguration|null);

        /** Command factoryReset */
        factoryReset?: (cloverpad.IFactoryReset|null);

        /** Command getHeKeyState */
        getHeKeyState?: (cloverpad.IGetHEKeyState|null);

        /** Command setMainConfiguration */
        setMainConfiguration?: (cloverpad.ISetMainConfiguration|null);

        /** Command revertMainConfiguration */
        revertMainConfiguration?: (cloverpad.IRevertMainConfiguration|null);

        /** Command setHeKeyConfiguration */
        setHeKeyConfiguration?: (cloverpad.ISetHEKeyConfiguration|null);

        /** Command revertHeKeyConfiguration */
        revertHeKeyConfiguration?: (cloverpad.IRevertHEKeyConfiguration|null);
    }

    /** Represents a Command. */
    class Command implements ICommand {

        /**
         * Constructs a new Command.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.ICommand);

        /** Command firmwareVersion. */
        public firmwareVersion?: (cloverpad.IFirmwareVersion|null);

        /** Command getConfiguration. */
        public getConfiguration?: (cloverpad.IGetConfiguration|null);

        /** Command saveConfiguration. */
        public saveConfiguration?: (cloverpad.ISaveConfiguration|null);

        /** Command factoryReset. */
        public factoryReset?: (cloverpad.IFactoryReset|null);

        /** Command getHeKeyState. */
        public getHeKeyState?: (cloverpad.IGetHEKeyState|null);

        /** Command setMainConfiguration. */
        public setMainConfiguration?: (cloverpad.ISetMainConfiguration|null);

        /** Command revertMainConfiguration. */
        public revertMainConfiguration?: (cloverpad.IRevertMainConfiguration|null);

        /** Command setHeKeyConfiguration. */
        public setHeKeyConfiguration?: (cloverpad.ISetHEKeyConfiguration|null);

        /** Command revertHeKeyConfiguration. */
        public revertHeKeyConfiguration?: (cloverpad.IRevertHEKeyConfiguration|null);

        /** Command type. */
        public type?: ("firmwareVersion"|"getConfiguration"|"saveConfiguration"|"factoryReset"|"getHeKeyState"|"setMainConfiguration"|"revertMainConfiguration"|"setHeKeyConfiguration"|"revertHeKeyConfiguration");

        /**
         * Creates a new Command instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Command instance
         */
        public static create(properties?: cloverpad.ICommand): cloverpad.Command;

        /**
         * Encodes the specified Command message. Does not implicitly {@link cloverpad.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Command message, length delimited. Does not implicitly {@link cloverpad.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.Command;

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.Command;

        /**
         * Verifies a Command message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Command
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.Command;

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @param message Command
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Command to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Command
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response code */
        code?: (cloverpad.ResponseCode|null);

        /** Response firmwareVersion */
        firmwareVersion?: (cloverpad.IFirmwareVersionResponse|null);

        /** Response getConfiguration */
        getConfiguration?: (cloverpad.IFullConfigurationResponse|null);

        /** Response saveConfiguration */
        saveConfiguration?: (cloverpad.IFullConfigurationResponse|null);

        /** Response factoryReset */
        factoryReset?: (cloverpad.IFullConfigurationResponse|null);

        /** Response getHeKeyState */
        getHeKeyState?: (cloverpad.IGetHEKeyStateResponse|null);

        /** Response setMainConfiguration */
        setMainConfiguration?: (cloverpad.IMainConfigurationResponse|null);

        /** Response revertMainConfiguration */
        revertMainConfiguration?: (cloverpad.IMainConfigurationResponse|null);

        /** Response setHeKeyConfiguration */
        setHeKeyConfiguration?: (cloverpad.ISetHEKeyConfigurationResponse|null);

        /** Response revertHeKeyConfiguration */
        revertHeKeyConfiguration?: (cloverpad.IRevertHEKeyConfigurationResponse|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.IResponse);

        /** Response code. */
        public code: cloverpad.ResponseCode;

        /** Response firmwareVersion. */
        public firmwareVersion?: (cloverpad.IFirmwareVersionResponse|null);

        /** Response getConfiguration. */
        public getConfiguration?: (cloverpad.IFullConfigurationResponse|null);

        /** Response saveConfiguration. */
        public saveConfiguration?: (cloverpad.IFullConfigurationResponse|null);

        /** Response factoryReset. */
        public factoryReset?: (cloverpad.IFullConfigurationResponse|null);

        /** Response getHeKeyState. */
        public getHeKeyState?: (cloverpad.IGetHEKeyStateResponse|null);

        /** Response setMainConfiguration. */
        public setMainConfiguration?: (cloverpad.IMainConfigurationResponse|null);

        /** Response revertMainConfiguration. */
        public revertMainConfiguration?: (cloverpad.IMainConfigurationResponse|null);

        /** Response setHeKeyConfiguration. */
        public setHeKeyConfiguration?: (cloverpad.ISetHEKeyConfigurationResponse|null);

        /** Response revertHeKeyConfiguration. */
        public revertHeKeyConfiguration?: (cloverpad.IRevertHEKeyConfigurationResponse|null);

        /** Response data. */
        public data?: ("firmwareVersion"|"getConfiguration"|"saveConfiguration"|"factoryReset"|"getHeKeyState"|"setMainConfiguration"|"revertMainConfiguration"|"setHeKeyConfiguration"|"revertHeKeyConfiguration");

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: cloverpad.IResponse): cloverpad.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link cloverpad.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link cloverpad.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Response
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetMainConfiguration. */
    interface ISetMainConfiguration {

        /** SetMainConfiguration configuration */
        configuration?: (cloverpad.IMainConfiguration|null);
    }

    /** Represents a SetMainConfiguration. */
    class SetMainConfiguration implements ISetMainConfiguration {

        /**
         * Constructs a new SetMainConfiguration.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.ISetMainConfiguration);

        /** SetMainConfiguration configuration. */
        public configuration?: (cloverpad.IMainConfiguration|null);

        /**
         * Creates a new SetMainConfiguration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetMainConfiguration instance
         */
        public static create(properties?: cloverpad.ISetMainConfiguration): cloverpad.SetMainConfiguration;

        /**
         * Encodes the specified SetMainConfiguration message. Does not implicitly {@link cloverpad.SetMainConfiguration.verify|verify} messages.
         * @param message SetMainConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.ISetMainConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetMainConfiguration message, length delimited. Does not implicitly {@link cloverpad.SetMainConfiguration.verify|verify} messages.
         * @param message SetMainConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.ISetMainConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetMainConfiguration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetMainConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.SetMainConfiguration;

        /**
         * Decodes a SetMainConfiguration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetMainConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.SetMainConfiguration;

        /**
         * Verifies a SetMainConfiguration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetMainConfiguration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetMainConfiguration
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.SetMainConfiguration;

        /**
         * Creates a plain object from a SetMainConfiguration message. Also converts values to other types if specified.
         * @param message SetMainConfiguration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.SetMainConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetMainConfiguration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetMainConfiguration
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RevertMainConfiguration. */
    interface IRevertMainConfiguration {
    }

    /** Represents a RevertMainConfiguration. */
    class RevertMainConfiguration implements IRevertMainConfiguration {

        /**
         * Constructs a new RevertMainConfiguration.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.IRevertMainConfiguration);

        /**
         * Creates a new RevertMainConfiguration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RevertMainConfiguration instance
         */
        public static create(properties?: cloverpad.IRevertMainConfiguration): cloverpad.RevertMainConfiguration;

        /**
         * Encodes the specified RevertMainConfiguration message. Does not implicitly {@link cloverpad.RevertMainConfiguration.verify|verify} messages.
         * @param message RevertMainConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.IRevertMainConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RevertMainConfiguration message, length delimited. Does not implicitly {@link cloverpad.RevertMainConfiguration.verify|verify} messages.
         * @param message RevertMainConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.IRevertMainConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RevertMainConfiguration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RevertMainConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.RevertMainConfiguration;

        /**
         * Decodes a RevertMainConfiguration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RevertMainConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.RevertMainConfiguration;

        /**
         * Verifies a RevertMainConfiguration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RevertMainConfiguration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RevertMainConfiguration
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.RevertMainConfiguration;

        /**
         * Creates a plain object from a RevertMainConfiguration message. Also converts values to other types if specified.
         * @param message RevertMainConfiguration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.RevertMainConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RevertMainConfiguration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RevertMainConfiguration
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MainConfigurationResponse. */
    interface IMainConfigurationResponse {

        /** MainConfigurationResponse mainConfiguration */
        mainConfiguration?: (cloverpad.IMainConfiguration|null);
    }

    /** Represents a MainConfigurationResponse. */
    class MainConfigurationResponse implements IMainConfigurationResponse {

        /**
         * Constructs a new MainConfigurationResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.IMainConfigurationResponse);

        /** MainConfigurationResponse mainConfiguration. */
        public mainConfiguration?: (cloverpad.IMainConfiguration|null);

        /**
         * Creates a new MainConfigurationResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MainConfigurationResponse instance
         */
        public static create(properties?: cloverpad.IMainConfigurationResponse): cloverpad.MainConfigurationResponse;

        /**
         * Encodes the specified MainConfigurationResponse message. Does not implicitly {@link cloverpad.MainConfigurationResponse.verify|verify} messages.
         * @param message MainConfigurationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.IMainConfigurationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MainConfigurationResponse message, length delimited. Does not implicitly {@link cloverpad.MainConfigurationResponse.verify|verify} messages.
         * @param message MainConfigurationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.IMainConfigurationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MainConfigurationResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MainConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.MainConfigurationResponse;

        /**
         * Decodes a MainConfigurationResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MainConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.MainConfigurationResponse;

        /**
         * Verifies a MainConfigurationResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MainConfigurationResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MainConfigurationResponse
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.MainConfigurationResponse;

        /**
         * Creates a plain object from a MainConfigurationResponse message. Also converts values to other types if specified.
         * @param message MainConfigurationResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.MainConfigurationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MainConfigurationResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MainConfigurationResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetHEKeyConfiguration. */
    interface ISetHEKeyConfiguration {

        /** SetHEKeyConfiguration index */
        index?: (number|null);

        /** SetHEKeyConfiguration configuration */
        configuration?: (cloverpad.IHEKeyConfiguration|null);
    }

    /** Represents a SetHEKeyConfiguration. */
    class SetHEKeyConfiguration implements ISetHEKeyConfiguration {

        /**
         * Constructs a new SetHEKeyConfiguration.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.ISetHEKeyConfiguration);

        /** SetHEKeyConfiguration index. */
        public index?: (number|null);

        /** SetHEKeyConfiguration configuration. */
        public configuration?: (cloverpad.IHEKeyConfiguration|null);

        /** SetHEKeyConfiguration _index. */
        public _index?: "index";

        /**
         * Creates a new SetHEKeyConfiguration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetHEKeyConfiguration instance
         */
        public static create(properties?: cloverpad.ISetHEKeyConfiguration): cloverpad.SetHEKeyConfiguration;

        /**
         * Encodes the specified SetHEKeyConfiguration message. Does not implicitly {@link cloverpad.SetHEKeyConfiguration.verify|verify} messages.
         * @param message SetHEKeyConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.ISetHEKeyConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetHEKeyConfiguration message, length delimited. Does not implicitly {@link cloverpad.SetHEKeyConfiguration.verify|verify} messages.
         * @param message SetHEKeyConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.ISetHEKeyConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetHEKeyConfiguration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetHEKeyConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.SetHEKeyConfiguration;

        /**
         * Decodes a SetHEKeyConfiguration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetHEKeyConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.SetHEKeyConfiguration;

        /**
         * Verifies a SetHEKeyConfiguration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetHEKeyConfiguration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetHEKeyConfiguration
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.SetHEKeyConfiguration;

        /**
         * Creates a plain object from a SetHEKeyConfiguration message. Also converts values to other types if specified.
         * @param message SetHEKeyConfiguration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.SetHEKeyConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetHEKeyConfiguration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetHEKeyConfiguration
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetHEKeyConfigurationResponse. */
    interface ISetHEKeyConfigurationResponse {

        /** SetHEKeyConfigurationResponse index */
        index?: (number|null);

        /** SetHEKeyConfigurationResponse configuration */
        configuration?: (cloverpad.IHEKeyConfiguration|null);
    }

    /** Represents a SetHEKeyConfigurationResponse. */
    class SetHEKeyConfigurationResponse implements ISetHEKeyConfigurationResponse {

        /**
         * Constructs a new SetHEKeyConfigurationResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.ISetHEKeyConfigurationResponse);

        /** SetHEKeyConfigurationResponse index. */
        public index?: (number|null);

        /** SetHEKeyConfigurationResponse configuration. */
        public configuration?: (cloverpad.IHEKeyConfiguration|null);

        /** SetHEKeyConfigurationResponse _index. */
        public _index?: "index";

        /**
         * Creates a new SetHEKeyConfigurationResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetHEKeyConfigurationResponse instance
         */
        public static create(properties?: cloverpad.ISetHEKeyConfigurationResponse): cloverpad.SetHEKeyConfigurationResponse;

        /**
         * Encodes the specified SetHEKeyConfigurationResponse message. Does not implicitly {@link cloverpad.SetHEKeyConfigurationResponse.verify|verify} messages.
         * @param message SetHEKeyConfigurationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.ISetHEKeyConfigurationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetHEKeyConfigurationResponse message, length delimited. Does not implicitly {@link cloverpad.SetHEKeyConfigurationResponse.verify|verify} messages.
         * @param message SetHEKeyConfigurationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.ISetHEKeyConfigurationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetHEKeyConfigurationResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetHEKeyConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.SetHEKeyConfigurationResponse;

        /**
         * Decodes a SetHEKeyConfigurationResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetHEKeyConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.SetHEKeyConfigurationResponse;

        /**
         * Verifies a SetHEKeyConfigurationResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetHEKeyConfigurationResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetHEKeyConfigurationResponse
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.SetHEKeyConfigurationResponse;

        /**
         * Creates a plain object from a SetHEKeyConfigurationResponse message. Also converts values to other types if specified.
         * @param message SetHEKeyConfigurationResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.SetHEKeyConfigurationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetHEKeyConfigurationResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetHEKeyConfigurationResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RevertHEKeyConfiguration. */
    interface IRevertHEKeyConfiguration {
    }

    /** Represents a RevertHEKeyConfiguration. */
    class RevertHEKeyConfiguration implements IRevertHEKeyConfiguration {

        /**
         * Constructs a new RevertHEKeyConfiguration.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.IRevertHEKeyConfiguration);

        /**
         * Creates a new RevertHEKeyConfiguration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RevertHEKeyConfiguration instance
         */
        public static create(properties?: cloverpad.IRevertHEKeyConfiguration): cloverpad.RevertHEKeyConfiguration;

        /**
         * Encodes the specified RevertHEKeyConfiguration message. Does not implicitly {@link cloverpad.RevertHEKeyConfiguration.verify|verify} messages.
         * @param message RevertHEKeyConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.IRevertHEKeyConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RevertHEKeyConfiguration message, length delimited. Does not implicitly {@link cloverpad.RevertHEKeyConfiguration.verify|verify} messages.
         * @param message RevertHEKeyConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.IRevertHEKeyConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RevertHEKeyConfiguration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RevertHEKeyConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.RevertHEKeyConfiguration;

        /**
         * Decodes a RevertHEKeyConfiguration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RevertHEKeyConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.RevertHEKeyConfiguration;

        /**
         * Verifies a RevertHEKeyConfiguration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RevertHEKeyConfiguration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RevertHEKeyConfiguration
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.RevertHEKeyConfiguration;

        /**
         * Creates a plain object from a RevertHEKeyConfiguration message. Also converts values to other types if specified.
         * @param message RevertHEKeyConfiguration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.RevertHEKeyConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RevertHEKeyConfiguration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RevertHEKeyConfiguration
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RevertHEKeyConfigurationResponse. */
    interface IRevertHEKeyConfigurationResponse {

        /** RevertHEKeyConfigurationResponse configurations */
        configurations?: (cloverpad.IHEKeyConfiguration[]|null);
    }

    /** Represents a RevertHEKeyConfigurationResponse. */
    class RevertHEKeyConfigurationResponse implements IRevertHEKeyConfigurationResponse {

        /**
         * Constructs a new RevertHEKeyConfigurationResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.IRevertHEKeyConfigurationResponse);

        /** RevertHEKeyConfigurationResponse configurations. */
        public configurations: cloverpad.IHEKeyConfiguration[];

        /**
         * Creates a new RevertHEKeyConfigurationResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RevertHEKeyConfigurationResponse instance
         */
        public static create(properties?: cloverpad.IRevertHEKeyConfigurationResponse): cloverpad.RevertHEKeyConfigurationResponse;

        /**
         * Encodes the specified RevertHEKeyConfigurationResponse message. Does not implicitly {@link cloverpad.RevertHEKeyConfigurationResponse.verify|verify} messages.
         * @param message RevertHEKeyConfigurationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.IRevertHEKeyConfigurationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RevertHEKeyConfigurationResponse message, length delimited. Does not implicitly {@link cloverpad.RevertHEKeyConfigurationResponse.verify|verify} messages.
         * @param message RevertHEKeyConfigurationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.IRevertHEKeyConfigurationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RevertHEKeyConfigurationResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RevertHEKeyConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.RevertHEKeyConfigurationResponse;

        /**
         * Decodes a RevertHEKeyConfigurationResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RevertHEKeyConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.RevertHEKeyConfigurationResponse;

        /**
         * Verifies a RevertHEKeyConfigurationResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RevertHEKeyConfigurationResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RevertHEKeyConfigurationResponse
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.RevertHEKeyConfigurationResponse;

        /**
         * Creates a plain object from a RevertHEKeyConfigurationResponse message. Also converts values to other types if specified.
         * @param message RevertHEKeyConfigurationResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.RevertHEKeyConfigurationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RevertHEKeyConfigurationResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RevertHEKeyConfigurationResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MainConfiguration. */
    interface IMainConfiguration {

        /** MainConfiguration configurationVersion */
        configurationVersion?: (number|null);

        /** MainConfiguration name */
        name?: (string|null);
    }

    /** Represents a MainConfiguration. */
    class MainConfiguration implements IMainConfiguration {

        /**
         * Constructs a new MainConfiguration.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.IMainConfiguration);

        /** MainConfiguration configurationVersion. */
        public configurationVersion: number;

        /** MainConfiguration name. */
        public name: string;

        /**
         * Creates a new MainConfiguration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MainConfiguration instance
         */
        public static create(properties?: cloverpad.IMainConfiguration): cloverpad.MainConfiguration;

        /**
         * Encodes the specified MainConfiguration message. Does not implicitly {@link cloverpad.MainConfiguration.verify|verify} messages.
         * @param message MainConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.IMainConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MainConfiguration message, length delimited. Does not implicitly {@link cloverpad.MainConfiguration.verify|verify} messages.
         * @param message MainConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.IMainConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MainConfiguration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MainConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.MainConfiguration;

        /**
         * Decodes a MainConfiguration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MainConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.MainConfiguration;

        /**
         * Verifies a MainConfiguration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MainConfiguration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MainConfiguration
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.MainConfiguration;

        /**
         * Creates a plain object from a MainConfiguration message. Also converts values to other types if specified.
         * @param message MainConfiguration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.MainConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MainConfiguration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MainConfiguration
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HEKeyConfiguration. */
    interface IHEKeyConfiguration {

        /** HEKeyConfiguration configurationVersion */
        configurationVersion?: (number|null);

        /** HEKeyConfiguration enabled */
        enabled?: (boolean|null);

        /** HEKeyConfiguration keycode */
        keycode?: (number|null);

        /** HEKeyConfiguration rapidTrigger */
        rapidTrigger?: (boolean|null);

        /** HEKeyConfiguration actuationPointMm */
        actuationPointMm?: (number|null);

        /** HEKeyConfiguration upSensitivityMm */
        upSensitivityMm?: (number|null);

        /** HEKeyConfiguration downSensitivityMm */
        downSensitivityMm?: (number|null);

        /** HEKeyConfiguration upperDeadzoneMm */
        upperDeadzoneMm?: (number|null);

        /** HEKeyConfiguration lowerDeadzoneMm */
        lowerDeadzoneMm?: (number|null);
    }

    /** Represents a HEKeyConfiguration. */
    class HEKeyConfiguration implements IHEKeyConfiguration {

        /**
         * Constructs a new HEKeyConfiguration.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.IHEKeyConfiguration);

        /** HEKeyConfiguration configurationVersion. */
        public configurationVersion: number;

        /** HEKeyConfiguration enabled. */
        public enabled: boolean;

        /** HEKeyConfiguration keycode. */
        public keycode: number;

        /** HEKeyConfiguration rapidTrigger. */
        public rapidTrigger: boolean;

        /** HEKeyConfiguration actuationPointMm. */
        public actuationPointMm: number;

        /** HEKeyConfiguration upSensitivityMm. */
        public upSensitivityMm: number;

        /** HEKeyConfiguration downSensitivityMm. */
        public downSensitivityMm: number;

        /** HEKeyConfiguration upperDeadzoneMm. */
        public upperDeadzoneMm: number;

        /** HEKeyConfiguration lowerDeadzoneMm. */
        public lowerDeadzoneMm: number;

        /**
         * Creates a new HEKeyConfiguration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HEKeyConfiguration instance
         */
        public static create(properties?: cloverpad.IHEKeyConfiguration): cloverpad.HEKeyConfiguration;

        /**
         * Encodes the specified HEKeyConfiguration message. Does not implicitly {@link cloverpad.HEKeyConfiguration.verify|verify} messages.
         * @param message HEKeyConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.IHEKeyConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HEKeyConfiguration message, length delimited. Does not implicitly {@link cloverpad.HEKeyConfiguration.verify|verify} messages.
         * @param message HEKeyConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.IHEKeyConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HEKeyConfiguration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HEKeyConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.HEKeyConfiguration;

        /**
         * Decodes a HEKeyConfiguration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HEKeyConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.HEKeyConfiguration;

        /**
         * Verifies a HEKeyConfiguration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HEKeyConfiguration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HEKeyConfiguration
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.HEKeyConfiguration;

        /**
         * Creates a plain object from a HEKeyConfiguration message. Also converts values to other types if specified.
         * @param message HEKeyConfiguration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.HEKeyConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HEKeyConfiguration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HEKeyConfiguration
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FirmwareVersion. */
    interface IFirmwareVersion {
    }

    /** Represents a FirmwareVersion. */
    class FirmwareVersion implements IFirmwareVersion {

        /**
         * Constructs a new FirmwareVersion.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.IFirmwareVersion);

        /**
         * Creates a new FirmwareVersion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FirmwareVersion instance
         */
        public static create(properties?: cloverpad.IFirmwareVersion): cloverpad.FirmwareVersion;

        /**
         * Encodes the specified FirmwareVersion message. Does not implicitly {@link cloverpad.FirmwareVersion.verify|verify} messages.
         * @param message FirmwareVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.IFirmwareVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FirmwareVersion message, length delimited. Does not implicitly {@link cloverpad.FirmwareVersion.verify|verify} messages.
         * @param message FirmwareVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.IFirmwareVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FirmwareVersion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FirmwareVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.FirmwareVersion;

        /**
         * Decodes a FirmwareVersion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FirmwareVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.FirmwareVersion;

        /**
         * Verifies a FirmwareVersion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FirmwareVersion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FirmwareVersion
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.FirmwareVersion;

        /**
         * Creates a plain object from a FirmwareVersion message. Also converts values to other types if specified.
         * @param message FirmwareVersion
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.FirmwareVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FirmwareVersion to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FirmwareVersion
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FirmwareVersionResponse. */
    interface IFirmwareVersionResponse {

        /** FirmwareVersionResponse version */
        version?: (number|null);
    }

    /** Represents a FirmwareVersionResponse. */
    class FirmwareVersionResponse implements IFirmwareVersionResponse {

        /**
         * Constructs a new FirmwareVersionResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.IFirmwareVersionResponse);

        /** FirmwareVersionResponse version. */
        public version: number;

        /**
         * Creates a new FirmwareVersionResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FirmwareVersionResponse instance
         */
        public static create(properties?: cloverpad.IFirmwareVersionResponse): cloverpad.FirmwareVersionResponse;

        /**
         * Encodes the specified FirmwareVersionResponse message. Does not implicitly {@link cloverpad.FirmwareVersionResponse.verify|verify} messages.
         * @param message FirmwareVersionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.IFirmwareVersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FirmwareVersionResponse message, length delimited. Does not implicitly {@link cloverpad.FirmwareVersionResponse.verify|verify} messages.
         * @param message FirmwareVersionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.IFirmwareVersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FirmwareVersionResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FirmwareVersionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.FirmwareVersionResponse;

        /**
         * Decodes a FirmwareVersionResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FirmwareVersionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.FirmwareVersionResponse;

        /**
         * Verifies a FirmwareVersionResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FirmwareVersionResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FirmwareVersionResponse
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.FirmwareVersionResponse;

        /**
         * Creates a plain object from a FirmwareVersionResponse message. Also converts values to other types if specified.
         * @param message FirmwareVersionResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.FirmwareVersionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FirmwareVersionResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FirmwareVersionResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetConfiguration. */
    interface IGetConfiguration {
    }

    /** Represents a GetConfiguration. */
    class GetConfiguration implements IGetConfiguration {

        /**
         * Constructs a new GetConfiguration.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.IGetConfiguration);

        /**
         * Creates a new GetConfiguration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetConfiguration instance
         */
        public static create(properties?: cloverpad.IGetConfiguration): cloverpad.GetConfiguration;

        /**
         * Encodes the specified GetConfiguration message. Does not implicitly {@link cloverpad.GetConfiguration.verify|verify} messages.
         * @param message GetConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.IGetConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetConfiguration message, length delimited. Does not implicitly {@link cloverpad.GetConfiguration.verify|verify} messages.
         * @param message GetConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.IGetConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetConfiguration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.GetConfiguration;

        /**
         * Decodes a GetConfiguration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.GetConfiguration;

        /**
         * Verifies a GetConfiguration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetConfiguration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetConfiguration
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.GetConfiguration;

        /**
         * Creates a plain object from a GetConfiguration message. Also converts values to other types if specified.
         * @param message GetConfiguration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.GetConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetConfiguration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetConfiguration
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SaveConfiguration. */
    interface ISaveConfiguration {
    }

    /** Represents a SaveConfiguration. */
    class SaveConfiguration implements ISaveConfiguration {

        /**
         * Constructs a new SaveConfiguration.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.ISaveConfiguration);

        /**
         * Creates a new SaveConfiguration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SaveConfiguration instance
         */
        public static create(properties?: cloverpad.ISaveConfiguration): cloverpad.SaveConfiguration;

        /**
         * Encodes the specified SaveConfiguration message. Does not implicitly {@link cloverpad.SaveConfiguration.verify|verify} messages.
         * @param message SaveConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.ISaveConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SaveConfiguration message, length delimited. Does not implicitly {@link cloverpad.SaveConfiguration.verify|verify} messages.
         * @param message SaveConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.ISaveConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SaveConfiguration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SaveConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.SaveConfiguration;

        /**
         * Decodes a SaveConfiguration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SaveConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.SaveConfiguration;

        /**
         * Verifies a SaveConfiguration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SaveConfiguration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SaveConfiguration
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.SaveConfiguration;

        /**
         * Creates a plain object from a SaveConfiguration message. Also converts values to other types if specified.
         * @param message SaveConfiguration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.SaveConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SaveConfiguration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SaveConfiguration
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FactoryReset. */
    interface IFactoryReset {
    }

    /** Represents a FactoryReset. */
    class FactoryReset implements IFactoryReset {

        /**
         * Constructs a new FactoryReset.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.IFactoryReset);

        /**
         * Creates a new FactoryReset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FactoryReset instance
         */
        public static create(properties?: cloverpad.IFactoryReset): cloverpad.FactoryReset;

        /**
         * Encodes the specified FactoryReset message. Does not implicitly {@link cloverpad.FactoryReset.verify|verify} messages.
         * @param message FactoryReset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.IFactoryReset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FactoryReset message, length delimited. Does not implicitly {@link cloverpad.FactoryReset.verify|verify} messages.
         * @param message FactoryReset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.IFactoryReset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FactoryReset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FactoryReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.FactoryReset;

        /**
         * Decodes a FactoryReset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FactoryReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.FactoryReset;

        /**
         * Verifies a FactoryReset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FactoryReset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FactoryReset
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.FactoryReset;

        /**
         * Creates a plain object from a FactoryReset message. Also converts values to other types if specified.
         * @param message FactoryReset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.FactoryReset, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FactoryReset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FactoryReset
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FullConfigurationResponse. */
    interface IFullConfigurationResponse {

        /** FullConfigurationResponse modified */
        modified?: (boolean|null);

        /** FullConfigurationResponse mainConfiguration */
        mainConfiguration?: (cloverpad.IMainConfiguration|null);

        /** FullConfigurationResponse heKeyConfigurations */
        heKeyConfigurations?: (cloverpad.IHEKeyConfiguration[]|null);
    }

    /** Represents a FullConfigurationResponse. */
    class FullConfigurationResponse implements IFullConfigurationResponse {

        /**
         * Constructs a new FullConfigurationResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.IFullConfigurationResponse);

        /** FullConfigurationResponse modified. */
        public modified: boolean;

        /** FullConfigurationResponse mainConfiguration. */
        public mainConfiguration?: (cloverpad.IMainConfiguration|null);

        /** FullConfigurationResponse heKeyConfigurations. */
        public heKeyConfigurations: cloverpad.IHEKeyConfiguration[];

        /**
         * Creates a new FullConfigurationResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FullConfigurationResponse instance
         */
        public static create(properties?: cloverpad.IFullConfigurationResponse): cloverpad.FullConfigurationResponse;

        /**
         * Encodes the specified FullConfigurationResponse message. Does not implicitly {@link cloverpad.FullConfigurationResponse.verify|verify} messages.
         * @param message FullConfigurationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.IFullConfigurationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FullConfigurationResponse message, length delimited. Does not implicitly {@link cloverpad.FullConfigurationResponse.verify|verify} messages.
         * @param message FullConfigurationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.IFullConfigurationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FullConfigurationResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FullConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.FullConfigurationResponse;

        /**
         * Decodes a FullConfigurationResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FullConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.FullConfigurationResponse;

        /**
         * Verifies a FullConfigurationResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FullConfigurationResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FullConfigurationResponse
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.FullConfigurationResponse;

        /**
         * Creates a plain object from a FullConfigurationResponse message. Also converts values to other types if specified.
         * @param message FullConfigurationResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.FullConfigurationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FullConfigurationResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FullConfigurationResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetHEKeyState. */
    interface IGetHEKeyState {
    }

    /** Represents a GetHEKeyState. */
    class GetHEKeyState implements IGetHEKeyState {

        /**
         * Constructs a new GetHEKeyState.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.IGetHEKeyState);

        /**
         * Creates a new GetHEKeyState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetHEKeyState instance
         */
        public static create(properties?: cloverpad.IGetHEKeyState): cloverpad.GetHEKeyState;

        /**
         * Encodes the specified GetHEKeyState message. Does not implicitly {@link cloverpad.GetHEKeyState.verify|verify} messages.
         * @param message GetHEKeyState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.IGetHEKeyState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetHEKeyState message, length delimited. Does not implicitly {@link cloverpad.GetHEKeyState.verify|verify} messages.
         * @param message GetHEKeyState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.IGetHEKeyState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetHEKeyState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetHEKeyState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.GetHEKeyState;

        /**
         * Decodes a GetHEKeyState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetHEKeyState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.GetHEKeyState;

        /**
         * Verifies a GetHEKeyState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetHEKeyState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetHEKeyState
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.GetHEKeyState;

        /**
         * Creates a plain object from a GetHEKeyState message. Also converts values to other types if specified.
         * @param message GetHEKeyState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.GetHEKeyState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetHEKeyState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetHEKeyState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetHEKeyStateResponse. */
    interface IGetHEKeyStateResponse {

        /** GetHEKeyStateResponse states */
        states?: (cloverpad.IHEKeyState[]|null);
    }

    /** Represents a GetHEKeyStateResponse. */
    class GetHEKeyStateResponse implements IGetHEKeyStateResponse {

        /**
         * Constructs a new GetHEKeyStateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.IGetHEKeyStateResponse);

        /** GetHEKeyStateResponse states. */
        public states: cloverpad.IHEKeyState[];

        /**
         * Creates a new GetHEKeyStateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetHEKeyStateResponse instance
         */
        public static create(properties?: cloverpad.IGetHEKeyStateResponse): cloverpad.GetHEKeyStateResponse;

        /**
         * Encodes the specified GetHEKeyStateResponse message. Does not implicitly {@link cloverpad.GetHEKeyStateResponse.verify|verify} messages.
         * @param message GetHEKeyStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.IGetHEKeyStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetHEKeyStateResponse message, length delimited. Does not implicitly {@link cloverpad.GetHEKeyStateResponse.verify|verify} messages.
         * @param message GetHEKeyStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.IGetHEKeyStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetHEKeyStateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetHEKeyStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.GetHEKeyStateResponse;

        /**
         * Decodes a GetHEKeyStateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetHEKeyStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.GetHEKeyStateResponse;

        /**
         * Verifies a GetHEKeyStateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetHEKeyStateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetHEKeyStateResponse
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.GetHEKeyStateResponse;

        /**
         * Creates a plain object from a GetHEKeyStateResponse message. Also converts values to other types if specified.
         * @param message GetHEKeyStateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.GetHEKeyStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetHEKeyStateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetHEKeyStateResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HEKeyState. */
    interface IHEKeyState {

        /** HEKeyState pressed */
        pressed?: (boolean|null);

        /** HEKeyState averageReading */
        averageReading?: (number|null);

        /** HEKeyState lastPosition */
        lastPosition?: (number|null);
    }

    /** Represents a HEKeyState. */
    class HEKeyState implements IHEKeyState {

        /**
         * Constructs a new HEKeyState.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloverpad.IHEKeyState);

        /** HEKeyState pressed. */
        public pressed: boolean;

        /** HEKeyState averageReading. */
        public averageReading: number;

        /** HEKeyState lastPosition. */
        public lastPosition: number;

        /**
         * Creates a new HEKeyState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HEKeyState instance
         */
        public static create(properties?: cloverpad.IHEKeyState): cloverpad.HEKeyState;

        /**
         * Encodes the specified HEKeyState message. Does not implicitly {@link cloverpad.HEKeyState.verify|verify} messages.
         * @param message HEKeyState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloverpad.IHEKeyState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HEKeyState message, length delimited. Does not implicitly {@link cloverpad.HEKeyState.verify|verify} messages.
         * @param message HEKeyState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloverpad.IHEKeyState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HEKeyState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HEKeyState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloverpad.HEKeyState;

        /**
         * Decodes a HEKeyState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HEKeyState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloverpad.HEKeyState;

        /**
         * Verifies a HEKeyState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HEKeyState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HEKeyState
         */
        public static fromObject(object: { [k: string]: any }): cloverpad.HEKeyState;

        /**
         * Creates a plain object from a HEKeyState message. Also converts values to other types if specified.
         * @param message HEKeyState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloverpad.HEKeyState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HEKeyState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HEKeyState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
