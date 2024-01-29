/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const cloverpad = $root.cloverpad = (() => {

    /**
     * Namespace cloverpad.
     * @exports cloverpad
     * @namespace
     */
    const cloverpad = {};

    /**
     * ResponseCode enum.
     * @name cloverpad.ResponseCode
     * @enum {number}
     * @property {number} SUCCESS=0 SUCCESS value
     * @property {number} UNKNOWN_ERROR=1 UNKNOWN_ERROR value
     * @property {number} DECODE_ERROR=2 DECODE_ERROR value
     * @property {number} UNSUPPORTED_COMMAND=3 UNSUPPORTED_COMMAND value
     * @property {number} INVALID_PARAMETERS=4 INVALID_PARAMETERS value
     */
    cloverpad.ResponseCode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SUCCESS"] = 0;
        values[valuesById[1] = "UNKNOWN_ERROR"] = 1;
        values[valuesById[2] = "DECODE_ERROR"] = 2;
        values[valuesById[3] = "UNSUPPORTED_COMMAND"] = 3;
        values[valuesById[4] = "INVALID_PARAMETERS"] = 4;
        return values;
    })();

    cloverpad.Command = (function() {

        /**
         * Properties of a Command.
         * @memberof cloverpad
         * @interface ICommand
         * @property {cloverpad.IFirmwareVersion|null} [firmwareVersion] Command firmwareVersion
         * @property {cloverpad.IGetConfiguration|null} [getConfiguration] Command getConfiguration
         * @property {cloverpad.ISaveConfiguration|null} [saveConfiguration] Command saveConfiguration
         * @property {cloverpad.IFactoryReset|null} [factoryReset] Command factoryReset
         * @property {cloverpad.IGetHEKeyState|null} [getHeKeyState] Command getHeKeyState
         * @property {cloverpad.ISetMainConfiguration|null} [setMainConfiguration] Command setMainConfiguration
         * @property {cloverpad.IRevertMainConfiguration|null} [revertMainConfiguration] Command revertMainConfiguration
         * @property {cloverpad.ISetHEKeyConfiguration|null} [setHeKeyConfiguration] Command setHeKeyConfiguration
         * @property {cloverpad.IRevertHEKeyConfiguration|null} [revertHeKeyConfiguration] Command revertHeKeyConfiguration
         */

        /**
         * Constructs a new Command.
         * @memberof cloverpad
         * @classdesc Represents a Command.
         * @implements ICommand
         * @constructor
         * @param {cloverpad.ICommand=} [properties] Properties to set
         */
        function Command(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Command firmwareVersion.
         * @member {cloverpad.IFirmwareVersion|null|undefined} firmwareVersion
         * @memberof cloverpad.Command
         * @instance
         */
        Command.prototype.firmwareVersion = null;

        /**
         * Command getConfiguration.
         * @member {cloverpad.IGetConfiguration|null|undefined} getConfiguration
         * @memberof cloverpad.Command
         * @instance
         */
        Command.prototype.getConfiguration = null;

        /**
         * Command saveConfiguration.
         * @member {cloverpad.ISaveConfiguration|null|undefined} saveConfiguration
         * @memberof cloverpad.Command
         * @instance
         */
        Command.prototype.saveConfiguration = null;

        /**
         * Command factoryReset.
         * @member {cloverpad.IFactoryReset|null|undefined} factoryReset
         * @memberof cloverpad.Command
         * @instance
         */
        Command.prototype.factoryReset = null;

        /**
         * Command getHeKeyState.
         * @member {cloverpad.IGetHEKeyState|null|undefined} getHeKeyState
         * @memberof cloverpad.Command
         * @instance
         */
        Command.prototype.getHeKeyState = null;

        /**
         * Command setMainConfiguration.
         * @member {cloverpad.ISetMainConfiguration|null|undefined} setMainConfiguration
         * @memberof cloverpad.Command
         * @instance
         */
        Command.prototype.setMainConfiguration = null;

        /**
         * Command revertMainConfiguration.
         * @member {cloverpad.IRevertMainConfiguration|null|undefined} revertMainConfiguration
         * @memberof cloverpad.Command
         * @instance
         */
        Command.prototype.revertMainConfiguration = null;

        /**
         * Command setHeKeyConfiguration.
         * @member {cloverpad.ISetHEKeyConfiguration|null|undefined} setHeKeyConfiguration
         * @memberof cloverpad.Command
         * @instance
         */
        Command.prototype.setHeKeyConfiguration = null;

        /**
         * Command revertHeKeyConfiguration.
         * @member {cloverpad.IRevertHEKeyConfiguration|null|undefined} revertHeKeyConfiguration
         * @memberof cloverpad.Command
         * @instance
         */
        Command.prototype.revertHeKeyConfiguration = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Command type.
         * @member {"firmwareVersion"|"getConfiguration"|"saveConfiguration"|"factoryReset"|"getHeKeyState"|"setMainConfiguration"|"revertMainConfiguration"|"setHeKeyConfiguration"|"revertHeKeyConfiguration"|undefined} type
         * @memberof cloverpad.Command
         * @instance
         */
        Object.defineProperty(Command.prototype, "type", {
            get: $util.oneOfGetter($oneOfFields = ["firmwareVersion", "getConfiguration", "saveConfiguration", "factoryReset", "getHeKeyState", "setMainConfiguration", "revertMainConfiguration", "setHeKeyConfiguration", "revertHeKeyConfiguration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Command instance using the specified properties.
         * @function create
         * @memberof cloverpad.Command
         * @static
         * @param {cloverpad.ICommand=} [properties] Properties to set
         * @returns {cloverpad.Command} Command instance
         */
        Command.create = function create(properties) {
            return new Command(properties);
        };

        /**
         * Encodes the specified Command message. Does not implicitly {@link cloverpad.Command.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.Command
         * @static
         * @param {cloverpad.ICommand} message Command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Command.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.firmwareVersion != null && Object.hasOwnProperty.call(message, "firmwareVersion"))
                $root.cloverpad.FirmwareVersion.encode(message.firmwareVersion, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            if (message.getConfiguration != null && Object.hasOwnProperty.call(message, "getConfiguration"))
                $root.cloverpad.GetConfiguration.encode(message.getConfiguration, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.saveConfiguration != null && Object.hasOwnProperty.call(message, "saveConfiguration"))
                $root.cloverpad.SaveConfiguration.encode(message.saveConfiguration, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
            if (message.factoryReset != null && Object.hasOwnProperty.call(message, "factoryReset"))
                $root.cloverpad.FactoryReset.encode(message.factoryReset, writer.uint32(/* id 103, wireType 2 =*/826).fork()).ldelim();
            if (message.getHeKeyState != null && Object.hasOwnProperty.call(message, "getHeKeyState"))
                $root.cloverpad.GetHEKeyState.encode(message.getHeKeyState, writer.uint32(/* id 200, wireType 2 =*/1602).fork()).ldelim();
            if (message.setMainConfiguration != null && Object.hasOwnProperty.call(message, "setMainConfiguration"))
                $root.cloverpad.SetMainConfiguration.encode(message.setMainConfiguration, writer.uint32(/* id 1000, wireType 2 =*/8002).fork()).ldelim();
            if (message.revertMainConfiguration != null && Object.hasOwnProperty.call(message, "revertMainConfiguration"))
                $root.cloverpad.RevertMainConfiguration.encode(message.revertMainConfiguration, writer.uint32(/* id 1001, wireType 2 =*/8010).fork()).ldelim();
            if (message.setHeKeyConfiguration != null && Object.hasOwnProperty.call(message, "setHeKeyConfiguration"))
                $root.cloverpad.SetHEKeyConfiguration.encode(message.setHeKeyConfiguration, writer.uint32(/* id 1100, wireType 2 =*/8802).fork()).ldelim();
            if (message.revertHeKeyConfiguration != null && Object.hasOwnProperty.call(message, "revertHeKeyConfiguration"))
                $root.cloverpad.RevertHEKeyConfiguration.encode(message.revertHeKeyConfiguration, writer.uint32(/* id 1101, wireType 2 =*/8810).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Command message, length delimited. Does not implicitly {@link cloverpad.Command.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.Command
         * @static
         * @param {cloverpad.ICommand} message Command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Command.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.Command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.Command} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Command.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.Command();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 100: {
                        message.firmwareVersion = $root.cloverpad.FirmwareVersion.decode(reader, reader.uint32());
                        break;
                    }
                case 101: {
                        message.getConfiguration = $root.cloverpad.GetConfiguration.decode(reader, reader.uint32());
                        break;
                    }
                case 102: {
                        message.saveConfiguration = $root.cloverpad.SaveConfiguration.decode(reader, reader.uint32());
                        break;
                    }
                case 103: {
                        message.factoryReset = $root.cloverpad.FactoryReset.decode(reader, reader.uint32());
                        break;
                    }
                case 200: {
                        message.getHeKeyState = $root.cloverpad.GetHEKeyState.decode(reader, reader.uint32());
                        break;
                    }
                case 1000: {
                        message.setMainConfiguration = $root.cloverpad.SetMainConfiguration.decode(reader, reader.uint32());
                        break;
                    }
                case 1001: {
                        message.revertMainConfiguration = $root.cloverpad.RevertMainConfiguration.decode(reader, reader.uint32());
                        break;
                    }
                case 1100: {
                        message.setHeKeyConfiguration = $root.cloverpad.SetHEKeyConfiguration.decode(reader, reader.uint32());
                        break;
                    }
                case 1101: {
                        message.revertHeKeyConfiguration = $root.cloverpad.RevertHEKeyConfiguration.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.Command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.Command} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Command.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Command message.
         * @function verify
         * @memberof cloverpad.Command
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Command.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.firmwareVersion != null && message.hasOwnProperty("firmwareVersion")) {
                properties.type = 1;
                {
                    let error = $root.cloverpad.FirmwareVersion.verify(message.firmwareVersion);
                    if (error)
                        return "firmwareVersion." + error;
                }
            }
            if (message.getConfiguration != null && message.hasOwnProperty("getConfiguration")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    let error = $root.cloverpad.GetConfiguration.verify(message.getConfiguration);
                    if (error)
                        return "getConfiguration." + error;
                }
            }
            if (message.saveConfiguration != null && message.hasOwnProperty("saveConfiguration")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    let error = $root.cloverpad.SaveConfiguration.verify(message.saveConfiguration);
                    if (error)
                        return "saveConfiguration." + error;
                }
            }
            if (message.factoryReset != null && message.hasOwnProperty("factoryReset")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    let error = $root.cloverpad.FactoryReset.verify(message.factoryReset);
                    if (error)
                        return "factoryReset." + error;
                }
            }
            if (message.getHeKeyState != null && message.hasOwnProperty("getHeKeyState")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    let error = $root.cloverpad.GetHEKeyState.verify(message.getHeKeyState);
                    if (error)
                        return "getHeKeyState." + error;
                }
            }
            if (message.setMainConfiguration != null && message.hasOwnProperty("setMainConfiguration")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    let error = $root.cloverpad.SetMainConfiguration.verify(message.setMainConfiguration);
                    if (error)
                        return "setMainConfiguration." + error;
                }
            }
            if (message.revertMainConfiguration != null && message.hasOwnProperty("revertMainConfiguration")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    let error = $root.cloverpad.RevertMainConfiguration.verify(message.revertMainConfiguration);
                    if (error)
                        return "revertMainConfiguration." + error;
                }
            }
            if (message.setHeKeyConfiguration != null && message.hasOwnProperty("setHeKeyConfiguration")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    let error = $root.cloverpad.SetHEKeyConfiguration.verify(message.setHeKeyConfiguration);
                    if (error)
                        return "setHeKeyConfiguration." + error;
                }
            }
            if (message.revertHeKeyConfiguration != null && message.hasOwnProperty("revertHeKeyConfiguration")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    let error = $root.cloverpad.RevertHEKeyConfiguration.verify(message.revertHeKeyConfiguration);
                    if (error)
                        return "revertHeKeyConfiguration." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.Command
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.Command} Command
         */
        Command.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.Command)
                return object;
            let message = new $root.cloverpad.Command();
            if (object.firmwareVersion != null) {
                if (typeof object.firmwareVersion !== "object")
                    throw TypeError(".cloverpad.Command.firmwareVersion: object expected");
                message.firmwareVersion = $root.cloverpad.FirmwareVersion.fromObject(object.firmwareVersion);
            }
            if (object.getConfiguration != null) {
                if (typeof object.getConfiguration !== "object")
                    throw TypeError(".cloverpad.Command.getConfiguration: object expected");
                message.getConfiguration = $root.cloverpad.GetConfiguration.fromObject(object.getConfiguration);
            }
            if (object.saveConfiguration != null) {
                if (typeof object.saveConfiguration !== "object")
                    throw TypeError(".cloverpad.Command.saveConfiguration: object expected");
                message.saveConfiguration = $root.cloverpad.SaveConfiguration.fromObject(object.saveConfiguration);
            }
            if (object.factoryReset != null) {
                if (typeof object.factoryReset !== "object")
                    throw TypeError(".cloverpad.Command.factoryReset: object expected");
                message.factoryReset = $root.cloverpad.FactoryReset.fromObject(object.factoryReset);
            }
            if (object.getHeKeyState != null) {
                if (typeof object.getHeKeyState !== "object")
                    throw TypeError(".cloverpad.Command.getHeKeyState: object expected");
                message.getHeKeyState = $root.cloverpad.GetHEKeyState.fromObject(object.getHeKeyState);
            }
            if (object.setMainConfiguration != null) {
                if (typeof object.setMainConfiguration !== "object")
                    throw TypeError(".cloverpad.Command.setMainConfiguration: object expected");
                message.setMainConfiguration = $root.cloverpad.SetMainConfiguration.fromObject(object.setMainConfiguration);
            }
            if (object.revertMainConfiguration != null) {
                if (typeof object.revertMainConfiguration !== "object")
                    throw TypeError(".cloverpad.Command.revertMainConfiguration: object expected");
                message.revertMainConfiguration = $root.cloverpad.RevertMainConfiguration.fromObject(object.revertMainConfiguration);
            }
            if (object.setHeKeyConfiguration != null) {
                if (typeof object.setHeKeyConfiguration !== "object")
                    throw TypeError(".cloverpad.Command.setHeKeyConfiguration: object expected");
                message.setHeKeyConfiguration = $root.cloverpad.SetHEKeyConfiguration.fromObject(object.setHeKeyConfiguration);
            }
            if (object.revertHeKeyConfiguration != null) {
                if (typeof object.revertHeKeyConfiguration !== "object")
                    throw TypeError(".cloverpad.Command.revertHeKeyConfiguration: object expected");
                message.revertHeKeyConfiguration = $root.cloverpad.RevertHEKeyConfiguration.fromObject(object.revertHeKeyConfiguration);
            }
            return message;
        };

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.Command
         * @static
         * @param {cloverpad.Command} message Command
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Command.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.firmwareVersion != null && message.hasOwnProperty("firmwareVersion")) {
                object.firmwareVersion = $root.cloverpad.FirmwareVersion.toObject(message.firmwareVersion, options);
                if (options.oneofs)
                    object.type = "firmwareVersion";
            }
            if (message.getConfiguration != null && message.hasOwnProperty("getConfiguration")) {
                object.getConfiguration = $root.cloverpad.GetConfiguration.toObject(message.getConfiguration, options);
                if (options.oneofs)
                    object.type = "getConfiguration";
            }
            if (message.saveConfiguration != null && message.hasOwnProperty("saveConfiguration")) {
                object.saveConfiguration = $root.cloverpad.SaveConfiguration.toObject(message.saveConfiguration, options);
                if (options.oneofs)
                    object.type = "saveConfiguration";
            }
            if (message.factoryReset != null && message.hasOwnProperty("factoryReset")) {
                object.factoryReset = $root.cloverpad.FactoryReset.toObject(message.factoryReset, options);
                if (options.oneofs)
                    object.type = "factoryReset";
            }
            if (message.getHeKeyState != null && message.hasOwnProperty("getHeKeyState")) {
                object.getHeKeyState = $root.cloverpad.GetHEKeyState.toObject(message.getHeKeyState, options);
                if (options.oneofs)
                    object.type = "getHeKeyState";
            }
            if (message.setMainConfiguration != null && message.hasOwnProperty("setMainConfiguration")) {
                object.setMainConfiguration = $root.cloverpad.SetMainConfiguration.toObject(message.setMainConfiguration, options);
                if (options.oneofs)
                    object.type = "setMainConfiguration";
            }
            if (message.revertMainConfiguration != null && message.hasOwnProperty("revertMainConfiguration")) {
                object.revertMainConfiguration = $root.cloverpad.RevertMainConfiguration.toObject(message.revertMainConfiguration, options);
                if (options.oneofs)
                    object.type = "revertMainConfiguration";
            }
            if (message.setHeKeyConfiguration != null && message.hasOwnProperty("setHeKeyConfiguration")) {
                object.setHeKeyConfiguration = $root.cloverpad.SetHEKeyConfiguration.toObject(message.setHeKeyConfiguration, options);
                if (options.oneofs)
                    object.type = "setHeKeyConfiguration";
            }
            if (message.revertHeKeyConfiguration != null && message.hasOwnProperty("revertHeKeyConfiguration")) {
                object.revertHeKeyConfiguration = $root.cloverpad.RevertHEKeyConfiguration.toObject(message.revertHeKeyConfiguration, options);
                if (options.oneofs)
                    object.type = "revertHeKeyConfiguration";
            }
            return object;
        };

        /**
         * Converts this Command to JSON.
         * @function toJSON
         * @memberof cloverpad.Command
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Command.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Command
         * @function getTypeUrl
         * @memberof cloverpad.Command
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Command.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.Command";
        };

        return Command;
    })();

    cloverpad.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof cloverpad
         * @interface IResponse
         * @property {cloverpad.ResponseCode|null} [code] Response code
         * @property {cloverpad.IFirmwareVersionResponse|null} [firmwareVersion] Response firmwareVersion
         * @property {cloverpad.IFullConfigurationResponse|null} [getConfiguration] Response getConfiguration
         * @property {cloverpad.IFullConfigurationResponse|null} [saveConfiguration] Response saveConfiguration
         * @property {cloverpad.IFullConfigurationResponse|null} [factoryReset] Response factoryReset
         * @property {cloverpad.IGetHEKeyStateResponse|null} [getHeKeyState] Response getHeKeyState
         * @property {cloverpad.IMainConfigurationResponse|null} [setMainConfiguration] Response setMainConfiguration
         * @property {cloverpad.IMainConfigurationResponse|null} [revertMainConfiguration] Response revertMainConfiguration
         * @property {cloverpad.ISetHEKeyConfigurationResponse|null} [setHeKeyConfiguration] Response setHeKeyConfiguration
         * @property {cloverpad.IRevertHEKeyConfigurationResponse|null} [revertHeKeyConfiguration] Response revertHeKeyConfiguration
         */

        /**
         * Constructs a new Response.
         * @memberof cloverpad
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {cloverpad.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response code.
         * @member {cloverpad.ResponseCode} code
         * @memberof cloverpad.Response
         * @instance
         */
        Response.prototype.code = 0;

        /**
         * Response firmwareVersion.
         * @member {cloverpad.IFirmwareVersionResponse|null|undefined} firmwareVersion
         * @memberof cloverpad.Response
         * @instance
         */
        Response.prototype.firmwareVersion = null;

        /**
         * Response getConfiguration.
         * @member {cloverpad.IFullConfigurationResponse|null|undefined} getConfiguration
         * @memberof cloverpad.Response
         * @instance
         */
        Response.prototype.getConfiguration = null;

        /**
         * Response saveConfiguration.
         * @member {cloverpad.IFullConfigurationResponse|null|undefined} saveConfiguration
         * @memberof cloverpad.Response
         * @instance
         */
        Response.prototype.saveConfiguration = null;

        /**
         * Response factoryReset.
         * @member {cloverpad.IFullConfigurationResponse|null|undefined} factoryReset
         * @memberof cloverpad.Response
         * @instance
         */
        Response.prototype.factoryReset = null;

        /**
         * Response getHeKeyState.
         * @member {cloverpad.IGetHEKeyStateResponse|null|undefined} getHeKeyState
         * @memberof cloverpad.Response
         * @instance
         */
        Response.prototype.getHeKeyState = null;

        /**
         * Response setMainConfiguration.
         * @member {cloverpad.IMainConfigurationResponse|null|undefined} setMainConfiguration
         * @memberof cloverpad.Response
         * @instance
         */
        Response.prototype.setMainConfiguration = null;

        /**
         * Response revertMainConfiguration.
         * @member {cloverpad.IMainConfigurationResponse|null|undefined} revertMainConfiguration
         * @memberof cloverpad.Response
         * @instance
         */
        Response.prototype.revertMainConfiguration = null;

        /**
         * Response setHeKeyConfiguration.
         * @member {cloverpad.ISetHEKeyConfigurationResponse|null|undefined} setHeKeyConfiguration
         * @memberof cloverpad.Response
         * @instance
         */
        Response.prototype.setHeKeyConfiguration = null;

        /**
         * Response revertHeKeyConfiguration.
         * @member {cloverpad.IRevertHEKeyConfigurationResponse|null|undefined} revertHeKeyConfiguration
         * @memberof cloverpad.Response
         * @instance
         */
        Response.prototype.revertHeKeyConfiguration = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Response data.
         * @member {"firmwareVersion"|"getConfiguration"|"saveConfiguration"|"factoryReset"|"getHeKeyState"|"setMainConfiguration"|"revertMainConfiguration"|"setHeKeyConfiguration"|"revertHeKeyConfiguration"|undefined} data
         * @memberof cloverpad.Response
         * @instance
         */
        Object.defineProperty(Response.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["firmwareVersion", "getConfiguration", "saveConfiguration", "factoryReset", "getHeKeyState", "setMainConfiguration", "revertMainConfiguration", "setHeKeyConfiguration", "revertHeKeyConfiguration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof cloverpad.Response
         * @static
         * @param {cloverpad.IResponse=} [properties] Properties to set
         * @returns {cloverpad.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link cloverpad.Response.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.Response
         * @static
         * @param {cloverpad.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.firmwareVersion != null && Object.hasOwnProperty.call(message, "firmwareVersion"))
                $root.cloverpad.FirmwareVersionResponse.encode(message.firmwareVersion, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            if (message.getConfiguration != null && Object.hasOwnProperty.call(message, "getConfiguration"))
                $root.cloverpad.FullConfigurationResponse.encode(message.getConfiguration, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.saveConfiguration != null && Object.hasOwnProperty.call(message, "saveConfiguration"))
                $root.cloverpad.FullConfigurationResponse.encode(message.saveConfiguration, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
            if (message.factoryReset != null && Object.hasOwnProperty.call(message, "factoryReset"))
                $root.cloverpad.FullConfigurationResponse.encode(message.factoryReset, writer.uint32(/* id 103, wireType 2 =*/826).fork()).ldelim();
            if (message.getHeKeyState != null && Object.hasOwnProperty.call(message, "getHeKeyState"))
                $root.cloverpad.GetHEKeyStateResponse.encode(message.getHeKeyState, writer.uint32(/* id 200, wireType 2 =*/1602).fork()).ldelim();
            if (message.setMainConfiguration != null && Object.hasOwnProperty.call(message, "setMainConfiguration"))
                $root.cloverpad.MainConfigurationResponse.encode(message.setMainConfiguration, writer.uint32(/* id 1000, wireType 2 =*/8002).fork()).ldelim();
            if (message.revertMainConfiguration != null && Object.hasOwnProperty.call(message, "revertMainConfiguration"))
                $root.cloverpad.MainConfigurationResponse.encode(message.revertMainConfiguration, writer.uint32(/* id 1001, wireType 2 =*/8010).fork()).ldelim();
            if (message.setHeKeyConfiguration != null && Object.hasOwnProperty.call(message, "setHeKeyConfiguration"))
                $root.cloverpad.SetHEKeyConfigurationResponse.encode(message.setHeKeyConfiguration, writer.uint32(/* id 1100, wireType 2 =*/8802).fork()).ldelim();
            if (message.revertHeKeyConfiguration != null && Object.hasOwnProperty.call(message, "revertHeKeyConfiguration"))
                $root.cloverpad.RevertHEKeyConfigurationResponse.encode(message.revertHeKeyConfiguration, writer.uint32(/* id 1101, wireType 2 =*/8810).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link cloverpad.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.Response
         * @static
         * @param {cloverpad.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.Response();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 100: {
                        message.firmwareVersion = $root.cloverpad.FirmwareVersionResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 101: {
                        message.getConfiguration = $root.cloverpad.FullConfigurationResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 102: {
                        message.saveConfiguration = $root.cloverpad.FullConfigurationResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 103: {
                        message.factoryReset = $root.cloverpad.FullConfigurationResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 200: {
                        message.getHeKeyState = $root.cloverpad.GetHEKeyStateResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 1000: {
                        message.setMainConfiguration = $root.cloverpad.MainConfigurationResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 1001: {
                        message.revertMainConfiguration = $root.cloverpad.MainConfigurationResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 1100: {
                        message.setHeKeyConfiguration = $root.cloverpad.SetHEKeyConfigurationResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 1101: {
                        message.revertHeKeyConfiguration = $root.cloverpad.RevertHEKeyConfigurationResponse.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof cloverpad.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.firmwareVersion != null && message.hasOwnProperty("firmwareVersion")) {
                properties.data = 1;
                {
                    let error = $root.cloverpad.FirmwareVersionResponse.verify(message.firmwareVersion);
                    if (error)
                        return "firmwareVersion." + error;
                }
            }
            if (message.getConfiguration != null && message.hasOwnProperty("getConfiguration")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.cloverpad.FullConfigurationResponse.verify(message.getConfiguration);
                    if (error)
                        return "getConfiguration." + error;
                }
            }
            if (message.saveConfiguration != null && message.hasOwnProperty("saveConfiguration")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.cloverpad.FullConfigurationResponse.verify(message.saveConfiguration);
                    if (error)
                        return "saveConfiguration." + error;
                }
            }
            if (message.factoryReset != null && message.hasOwnProperty("factoryReset")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.cloverpad.FullConfigurationResponse.verify(message.factoryReset);
                    if (error)
                        return "factoryReset." + error;
                }
            }
            if (message.getHeKeyState != null && message.hasOwnProperty("getHeKeyState")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.cloverpad.GetHEKeyStateResponse.verify(message.getHeKeyState);
                    if (error)
                        return "getHeKeyState." + error;
                }
            }
            if (message.setMainConfiguration != null && message.hasOwnProperty("setMainConfiguration")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.cloverpad.MainConfigurationResponse.verify(message.setMainConfiguration);
                    if (error)
                        return "setMainConfiguration." + error;
                }
            }
            if (message.revertMainConfiguration != null && message.hasOwnProperty("revertMainConfiguration")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.cloverpad.MainConfigurationResponse.verify(message.revertMainConfiguration);
                    if (error)
                        return "revertMainConfiguration." + error;
                }
            }
            if (message.setHeKeyConfiguration != null && message.hasOwnProperty("setHeKeyConfiguration")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.cloverpad.SetHEKeyConfigurationResponse.verify(message.setHeKeyConfiguration);
                    if (error)
                        return "setHeKeyConfiguration." + error;
                }
            }
            if (message.revertHeKeyConfiguration != null && message.hasOwnProperty("revertHeKeyConfiguration")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.cloverpad.RevertHEKeyConfigurationResponse.verify(message.revertHeKeyConfiguration);
                    if (error)
                        return "revertHeKeyConfiguration." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.Response)
                return object;
            let message = new $root.cloverpad.Response();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "UNKNOWN_ERROR":
            case 1:
                message.code = 1;
                break;
            case "DECODE_ERROR":
            case 2:
                message.code = 2;
                break;
            case "UNSUPPORTED_COMMAND":
            case 3:
                message.code = 3;
                break;
            case "INVALID_PARAMETERS":
            case 4:
                message.code = 4;
                break;
            }
            if (object.firmwareVersion != null) {
                if (typeof object.firmwareVersion !== "object")
                    throw TypeError(".cloverpad.Response.firmwareVersion: object expected");
                message.firmwareVersion = $root.cloverpad.FirmwareVersionResponse.fromObject(object.firmwareVersion);
            }
            if (object.getConfiguration != null) {
                if (typeof object.getConfiguration !== "object")
                    throw TypeError(".cloverpad.Response.getConfiguration: object expected");
                message.getConfiguration = $root.cloverpad.FullConfigurationResponse.fromObject(object.getConfiguration);
            }
            if (object.saveConfiguration != null) {
                if (typeof object.saveConfiguration !== "object")
                    throw TypeError(".cloverpad.Response.saveConfiguration: object expected");
                message.saveConfiguration = $root.cloverpad.FullConfigurationResponse.fromObject(object.saveConfiguration);
            }
            if (object.factoryReset != null) {
                if (typeof object.factoryReset !== "object")
                    throw TypeError(".cloverpad.Response.factoryReset: object expected");
                message.factoryReset = $root.cloverpad.FullConfigurationResponse.fromObject(object.factoryReset);
            }
            if (object.getHeKeyState != null) {
                if (typeof object.getHeKeyState !== "object")
                    throw TypeError(".cloverpad.Response.getHeKeyState: object expected");
                message.getHeKeyState = $root.cloverpad.GetHEKeyStateResponse.fromObject(object.getHeKeyState);
            }
            if (object.setMainConfiguration != null) {
                if (typeof object.setMainConfiguration !== "object")
                    throw TypeError(".cloverpad.Response.setMainConfiguration: object expected");
                message.setMainConfiguration = $root.cloverpad.MainConfigurationResponse.fromObject(object.setMainConfiguration);
            }
            if (object.revertMainConfiguration != null) {
                if (typeof object.revertMainConfiguration !== "object")
                    throw TypeError(".cloverpad.Response.revertMainConfiguration: object expected");
                message.revertMainConfiguration = $root.cloverpad.MainConfigurationResponse.fromObject(object.revertMainConfiguration);
            }
            if (object.setHeKeyConfiguration != null) {
                if (typeof object.setHeKeyConfiguration !== "object")
                    throw TypeError(".cloverpad.Response.setHeKeyConfiguration: object expected");
                message.setHeKeyConfiguration = $root.cloverpad.SetHEKeyConfigurationResponse.fromObject(object.setHeKeyConfiguration);
            }
            if (object.revertHeKeyConfiguration != null) {
                if (typeof object.revertHeKeyConfiguration !== "object")
                    throw TypeError(".cloverpad.Response.revertHeKeyConfiguration: object expected");
                message.revertHeKeyConfiguration = $root.cloverpad.RevertHEKeyConfigurationResponse.fromObject(object.revertHeKeyConfiguration);
            }
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.Response
         * @static
         * @param {cloverpad.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.code = options.enums === String ? "SUCCESS" : 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.cloverpad.ResponseCode[message.code] === undefined ? message.code : $root.cloverpad.ResponseCode[message.code] : message.code;
            if (message.firmwareVersion != null && message.hasOwnProperty("firmwareVersion")) {
                object.firmwareVersion = $root.cloverpad.FirmwareVersionResponse.toObject(message.firmwareVersion, options);
                if (options.oneofs)
                    object.data = "firmwareVersion";
            }
            if (message.getConfiguration != null && message.hasOwnProperty("getConfiguration")) {
                object.getConfiguration = $root.cloverpad.FullConfigurationResponse.toObject(message.getConfiguration, options);
                if (options.oneofs)
                    object.data = "getConfiguration";
            }
            if (message.saveConfiguration != null && message.hasOwnProperty("saveConfiguration")) {
                object.saveConfiguration = $root.cloverpad.FullConfigurationResponse.toObject(message.saveConfiguration, options);
                if (options.oneofs)
                    object.data = "saveConfiguration";
            }
            if (message.factoryReset != null && message.hasOwnProperty("factoryReset")) {
                object.factoryReset = $root.cloverpad.FullConfigurationResponse.toObject(message.factoryReset, options);
                if (options.oneofs)
                    object.data = "factoryReset";
            }
            if (message.getHeKeyState != null && message.hasOwnProperty("getHeKeyState")) {
                object.getHeKeyState = $root.cloverpad.GetHEKeyStateResponse.toObject(message.getHeKeyState, options);
                if (options.oneofs)
                    object.data = "getHeKeyState";
            }
            if (message.setMainConfiguration != null && message.hasOwnProperty("setMainConfiguration")) {
                object.setMainConfiguration = $root.cloverpad.MainConfigurationResponse.toObject(message.setMainConfiguration, options);
                if (options.oneofs)
                    object.data = "setMainConfiguration";
            }
            if (message.revertMainConfiguration != null && message.hasOwnProperty("revertMainConfiguration")) {
                object.revertMainConfiguration = $root.cloverpad.MainConfigurationResponse.toObject(message.revertMainConfiguration, options);
                if (options.oneofs)
                    object.data = "revertMainConfiguration";
            }
            if (message.setHeKeyConfiguration != null && message.hasOwnProperty("setHeKeyConfiguration")) {
                object.setHeKeyConfiguration = $root.cloverpad.SetHEKeyConfigurationResponse.toObject(message.setHeKeyConfiguration, options);
                if (options.oneofs)
                    object.data = "setHeKeyConfiguration";
            }
            if (message.revertHeKeyConfiguration != null && message.hasOwnProperty("revertHeKeyConfiguration")) {
                object.revertHeKeyConfiguration = $root.cloverpad.RevertHEKeyConfigurationResponse.toObject(message.revertHeKeyConfiguration, options);
                if (options.oneofs)
                    object.data = "revertHeKeyConfiguration";
            }
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof cloverpad.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Response
         * @function getTypeUrl
         * @memberof cloverpad.Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.Response";
        };

        return Response;
    })();

    cloverpad.SetMainConfiguration = (function() {

        /**
         * Properties of a SetMainConfiguration.
         * @memberof cloverpad
         * @interface ISetMainConfiguration
         * @property {cloverpad.IMainConfiguration|null} [configuration] SetMainConfiguration configuration
         */

        /**
         * Constructs a new SetMainConfiguration.
         * @memberof cloverpad
         * @classdesc Represents a SetMainConfiguration.
         * @implements ISetMainConfiguration
         * @constructor
         * @param {cloverpad.ISetMainConfiguration=} [properties] Properties to set
         */
        function SetMainConfiguration(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetMainConfiguration configuration.
         * @member {cloverpad.IMainConfiguration|null|undefined} configuration
         * @memberof cloverpad.SetMainConfiguration
         * @instance
         */
        SetMainConfiguration.prototype.configuration = null;

        /**
         * Creates a new SetMainConfiguration instance using the specified properties.
         * @function create
         * @memberof cloverpad.SetMainConfiguration
         * @static
         * @param {cloverpad.ISetMainConfiguration=} [properties] Properties to set
         * @returns {cloverpad.SetMainConfiguration} SetMainConfiguration instance
         */
        SetMainConfiguration.create = function create(properties) {
            return new SetMainConfiguration(properties);
        };

        /**
         * Encodes the specified SetMainConfiguration message. Does not implicitly {@link cloverpad.SetMainConfiguration.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.SetMainConfiguration
         * @static
         * @param {cloverpad.ISetMainConfiguration} message SetMainConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetMainConfiguration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.configuration != null && Object.hasOwnProperty.call(message, "configuration"))
                $root.cloverpad.MainConfiguration.encode(message.configuration, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SetMainConfiguration message, length delimited. Does not implicitly {@link cloverpad.SetMainConfiguration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.SetMainConfiguration
         * @static
         * @param {cloverpad.ISetMainConfiguration} message SetMainConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetMainConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetMainConfiguration message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.SetMainConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.SetMainConfiguration} SetMainConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetMainConfiguration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.SetMainConfiguration();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.configuration = $root.cloverpad.MainConfiguration.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetMainConfiguration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.SetMainConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.SetMainConfiguration} SetMainConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetMainConfiguration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetMainConfiguration message.
         * @function verify
         * @memberof cloverpad.SetMainConfiguration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetMainConfiguration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.configuration != null && message.hasOwnProperty("configuration")) {
                let error = $root.cloverpad.MainConfiguration.verify(message.configuration);
                if (error)
                    return "configuration." + error;
            }
            return null;
        };

        /**
         * Creates a SetMainConfiguration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.SetMainConfiguration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.SetMainConfiguration} SetMainConfiguration
         */
        SetMainConfiguration.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.SetMainConfiguration)
                return object;
            let message = new $root.cloverpad.SetMainConfiguration();
            if (object.configuration != null) {
                if (typeof object.configuration !== "object")
                    throw TypeError(".cloverpad.SetMainConfiguration.configuration: object expected");
                message.configuration = $root.cloverpad.MainConfiguration.fromObject(object.configuration);
            }
            return message;
        };

        /**
         * Creates a plain object from a SetMainConfiguration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.SetMainConfiguration
         * @static
         * @param {cloverpad.SetMainConfiguration} message SetMainConfiguration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetMainConfiguration.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.configuration = null;
            if (message.configuration != null && message.hasOwnProperty("configuration"))
                object.configuration = $root.cloverpad.MainConfiguration.toObject(message.configuration, options);
            return object;
        };

        /**
         * Converts this SetMainConfiguration to JSON.
         * @function toJSON
         * @memberof cloverpad.SetMainConfiguration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetMainConfiguration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetMainConfiguration
         * @function getTypeUrl
         * @memberof cloverpad.SetMainConfiguration
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetMainConfiguration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.SetMainConfiguration";
        };

        return SetMainConfiguration;
    })();

    cloverpad.RevertMainConfiguration = (function() {

        /**
         * Properties of a RevertMainConfiguration.
         * @memberof cloverpad
         * @interface IRevertMainConfiguration
         */

        /**
         * Constructs a new RevertMainConfiguration.
         * @memberof cloverpad
         * @classdesc Represents a RevertMainConfiguration.
         * @implements IRevertMainConfiguration
         * @constructor
         * @param {cloverpad.IRevertMainConfiguration=} [properties] Properties to set
         */
        function RevertMainConfiguration(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new RevertMainConfiguration instance using the specified properties.
         * @function create
         * @memberof cloverpad.RevertMainConfiguration
         * @static
         * @param {cloverpad.IRevertMainConfiguration=} [properties] Properties to set
         * @returns {cloverpad.RevertMainConfiguration} RevertMainConfiguration instance
         */
        RevertMainConfiguration.create = function create(properties) {
            return new RevertMainConfiguration(properties);
        };

        /**
         * Encodes the specified RevertMainConfiguration message. Does not implicitly {@link cloverpad.RevertMainConfiguration.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.RevertMainConfiguration
         * @static
         * @param {cloverpad.IRevertMainConfiguration} message RevertMainConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RevertMainConfiguration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified RevertMainConfiguration message, length delimited. Does not implicitly {@link cloverpad.RevertMainConfiguration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.RevertMainConfiguration
         * @static
         * @param {cloverpad.IRevertMainConfiguration} message RevertMainConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RevertMainConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RevertMainConfiguration message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.RevertMainConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.RevertMainConfiguration} RevertMainConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RevertMainConfiguration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.RevertMainConfiguration();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RevertMainConfiguration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.RevertMainConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.RevertMainConfiguration} RevertMainConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RevertMainConfiguration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RevertMainConfiguration message.
         * @function verify
         * @memberof cloverpad.RevertMainConfiguration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RevertMainConfiguration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a RevertMainConfiguration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.RevertMainConfiguration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.RevertMainConfiguration} RevertMainConfiguration
         */
        RevertMainConfiguration.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.RevertMainConfiguration)
                return object;
            return new $root.cloverpad.RevertMainConfiguration();
        };

        /**
         * Creates a plain object from a RevertMainConfiguration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.RevertMainConfiguration
         * @static
         * @param {cloverpad.RevertMainConfiguration} message RevertMainConfiguration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RevertMainConfiguration.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this RevertMainConfiguration to JSON.
         * @function toJSON
         * @memberof cloverpad.RevertMainConfiguration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RevertMainConfiguration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RevertMainConfiguration
         * @function getTypeUrl
         * @memberof cloverpad.RevertMainConfiguration
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RevertMainConfiguration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.RevertMainConfiguration";
        };

        return RevertMainConfiguration;
    })();

    cloverpad.MainConfigurationResponse = (function() {

        /**
         * Properties of a MainConfigurationResponse.
         * @memberof cloverpad
         * @interface IMainConfigurationResponse
         * @property {cloverpad.IMainConfiguration|null} [mainConfiguration] MainConfigurationResponse mainConfiguration
         */

        /**
         * Constructs a new MainConfigurationResponse.
         * @memberof cloverpad
         * @classdesc Represents a MainConfigurationResponse.
         * @implements IMainConfigurationResponse
         * @constructor
         * @param {cloverpad.IMainConfigurationResponse=} [properties] Properties to set
         */
        function MainConfigurationResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MainConfigurationResponse mainConfiguration.
         * @member {cloverpad.IMainConfiguration|null|undefined} mainConfiguration
         * @memberof cloverpad.MainConfigurationResponse
         * @instance
         */
        MainConfigurationResponse.prototype.mainConfiguration = null;

        /**
         * Creates a new MainConfigurationResponse instance using the specified properties.
         * @function create
         * @memberof cloverpad.MainConfigurationResponse
         * @static
         * @param {cloverpad.IMainConfigurationResponse=} [properties] Properties to set
         * @returns {cloverpad.MainConfigurationResponse} MainConfigurationResponse instance
         */
        MainConfigurationResponse.create = function create(properties) {
            return new MainConfigurationResponse(properties);
        };

        /**
         * Encodes the specified MainConfigurationResponse message. Does not implicitly {@link cloverpad.MainConfigurationResponse.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.MainConfigurationResponse
         * @static
         * @param {cloverpad.IMainConfigurationResponse} message MainConfigurationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MainConfigurationResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mainConfiguration != null && Object.hasOwnProperty.call(message, "mainConfiguration"))
                $root.cloverpad.MainConfiguration.encode(message.mainConfiguration, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MainConfigurationResponse message, length delimited. Does not implicitly {@link cloverpad.MainConfigurationResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.MainConfigurationResponse
         * @static
         * @param {cloverpad.IMainConfigurationResponse} message MainConfigurationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MainConfigurationResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MainConfigurationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.MainConfigurationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.MainConfigurationResponse} MainConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MainConfigurationResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.MainConfigurationResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.mainConfiguration = $root.cloverpad.MainConfiguration.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MainConfigurationResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.MainConfigurationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.MainConfigurationResponse} MainConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MainConfigurationResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MainConfigurationResponse message.
         * @function verify
         * @memberof cloverpad.MainConfigurationResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MainConfigurationResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mainConfiguration != null && message.hasOwnProperty("mainConfiguration")) {
                let error = $root.cloverpad.MainConfiguration.verify(message.mainConfiguration);
                if (error)
                    return "mainConfiguration." + error;
            }
            return null;
        };

        /**
         * Creates a MainConfigurationResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.MainConfigurationResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.MainConfigurationResponse} MainConfigurationResponse
         */
        MainConfigurationResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.MainConfigurationResponse)
                return object;
            let message = new $root.cloverpad.MainConfigurationResponse();
            if (object.mainConfiguration != null) {
                if (typeof object.mainConfiguration !== "object")
                    throw TypeError(".cloverpad.MainConfigurationResponse.mainConfiguration: object expected");
                message.mainConfiguration = $root.cloverpad.MainConfiguration.fromObject(object.mainConfiguration);
            }
            return message;
        };

        /**
         * Creates a plain object from a MainConfigurationResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.MainConfigurationResponse
         * @static
         * @param {cloverpad.MainConfigurationResponse} message MainConfigurationResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MainConfigurationResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.mainConfiguration = null;
            if (message.mainConfiguration != null && message.hasOwnProperty("mainConfiguration"))
                object.mainConfiguration = $root.cloverpad.MainConfiguration.toObject(message.mainConfiguration, options);
            return object;
        };

        /**
         * Converts this MainConfigurationResponse to JSON.
         * @function toJSON
         * @memberof cloverpad.MainConfigurationResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MainConfigurationResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MainConfigurationResponse
         * @function getTypeUrl
         * @memberof cloverpad.MainConfigurationResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MainConfigurationResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.MainConfigurationResponse";
        };

        return MainConfigurationResponse;
    })();

    cloverpad.SetHEKeyConfiguration = (function() {

        /**
         * Properties of a SetHEKeyConfiguration.
         * @memberof cloverpad
         * @interface ISetHEKeyConfiguration
         * @property {number|null} [index] SetHEKeyConfiguration index
         * @property {cloverpad.IHEKeyConfiguration|null} [configuration] SetHEKeyConfiguration configuration
         */

        /**
         * Constructs a new SetHEKeyConfiguration.
         * @memberof cloverpad
         * @classdesc Represents a SetHEKeyConfiguration.
         * @implements ISetHEKeyConfiguration
         * @constructor
         * @param {cloverpad.ISetHEKeyConfiguration=} [properties] Properties to set
         */
        function SetHEKeyConfiguration(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetHEKeyConfiguration index.
         * @member {number|null|undefined} index
         * @memberof cloverpad.SetHEKeyConfiguration
         * @instance
         */
        SetHEKeyConfiguration.prototype.index = null;

        /**
         * SetHEKeyConfiguration configuration.
         * @member {cloverpad.IHEKeyConfiguration|null|undefined} configuration
         * @memberof cloverpad.SetHEKeyConfiguration
         * @instance
         */
        SetHEKeyConfiguration.prototype.configuration = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * SetHEKeyConfiguration _index.
         * @member {"index"|undefined} _index
         * @memberof cloverpad.SetHEKeyConfiguration
         * @instance
         */
        Object.defineProperty(SetHEKeyConfiguration.prototype, "_index", {
            get: $util.oneOfGetter($oneOfFields = ["index"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SetHEKeyConfiguration instance using the specified properties.
         * @function create
         * @memberof cloverpad.SetHEKeyConfiguration
         * @static
         * @param {cloverpad.ISetHEKeyConfiguration=} [properties] Properties to set
         * @returns {cloverpad.SetHEKeyConfiguration} SetHEKeyConfiguration instance
         */
        SetHEKeyConfiguration.create = function create(properties) {
            return new SetHEKeyConfiguration(properties);
        };

        /**
         * Encodes the specified SetHEKeyConfiguration message. Does not implicitly {@link cloverpad.SetHEKeyConfiguration.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.SetHEKeyConfiguration
         * @static
         * @param {cloverpad.ISetHEKeyConfiguration} message SetHEKeyConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetHEKeyConfiguration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
            if (message.configuration != null && Object.hasOwnProperty.call(message, "configuration"))
                $root.cloverpad.HEKeyConfiguration.encode(message.configuration, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SetHEKeyConfiguration message, length delimited. Does not implicitly {@link cloverpad.SetHEKeyConfiguration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.SetHEKeyConfiguration
         * @static
         * @param {cloverpad.ISetHEKeyConfiguration} message SetHEKeyConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetHEKeyConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetHEKeyConfiguration message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.SetHEKeyConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.SetHEKeyConfiguration} SetHEKeyConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetHEKeyConfiguration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.SetHEKeyConfiguration();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.index = reader.uint32();
                        break;
                    }
                case 2: {
                        message.configuration = $root.cloverpad.HEKeyConfiguration.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetHEKeyConfiguration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.SetHEKeyConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.SetHEKeyConfiguration} SetHEKeyConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetHEKeyConfiguration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetHEKeyConfiguration message.
         * @function verify
         * @memberof cloverpad.SetHEKeyConfiguration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetHEKeyConfiguration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.index != null && message.hasOwnProperty("index")) {
                properties._index = 1;
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            }
            if (message.configuration != null && message.hasOwnProperty("configuration")) {
                let error = $root.cloverpad.HEKeyConfiguration.verify(message.configuration);
                if (error)
                    return "configuration." + error;
            }
            return null;
        };

        /**
         * Creates a SetHEKeyConfiguration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.SetHEKeyConfiguration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.SetHEKeyConfiguration} SetHEKeyConfiguration
         */
        SetHEKeyConfiguration.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.SetHEKeyConfiguration)
                return object;
            let message = new $root.cloverpad.SetHEKeyConfiguration();
            if (object.index != null)
                message.index = object.index >>> 0;
            if (object.configuration != null) {
                if (typeof object.configuration !== "object")
                    throw TypeError(".cloverpad.SetHEKeyConfiguration.configuration: object expected");
                message.configuration = $root.cloverpad.HEKeyConfiguration.fromObject(object.configuration);
            }
            return message;
        };

        /**
         * Creates a plain object from a SetHEKeyConfiguration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.SetHEKeyConfiguration
         * @static
         * @param {cloverpad.SetHEKeyConfiguration} message SetHEKeyConfiguration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetHEKeyConfiguration.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.configuration = null;
            if (message.index != null && message.hasOwnProperty("index")) {
                object.index = message.index;
                if (options.oneofs)
                    object._index = "index";
            }
            if (message.configuration != null && message.hasOwnProperty("configuration"))
                object.configuration = $root.cloverpad.HEKeyConfiguration.toObject(message.configuration, options);
            return object;
        };

        /**
         * Converts this SetHEKeyConfiguration to JSON.
         * @function toJSON
         * @memberof cloverpad.SetHEKeyConfiguration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetHEKeyConfiguration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetHEKeyConfiguration
         * @function getTypeUrl
         * @memberof cloverpad.SetHEKeyConfiguration
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetHEKeyConfiguration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.SetHEKeyConfiguration";
        };

        return SetHEKeyConfiguration;
    })();

    cloverpad.SetHEKeyConfigurationResponse = (function() {

        /**
         * Properties of a SetHEKeyConfigurationResponse.
         * @memberof cloverpad
         * @interface ISetHEKeyConfigurationResponse
         * @property {number|null} [index] SetHEKeyConfigurationResponse index
         * @property {cloverpad.IHEKeyConfiguration|null} [configuration] SetHEKeyConfigurationResponse configuration
         */

        /**
         * Constructs a new SetHEKeyConfigurationResponse.
         * @memberof cloverpad
         * @classdesc Represents a SetHEKeyConfigurationResponse.
         * @implements ISetHEKeyConfigurationResponse
         * @constructor
         * @param {cloverpad.ISetHEKeyConfigurationResponse=} [properties] Properties to set
         */
        function SetHEKeyConfigurationResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetHEKeyConfigurationResponse index.
         * @member {number|null|undefined} index
         * @memberof cloverpad.SetHEKeyConfigurationResponse
         * @instance
         */
        SetHEKeyConfigurationResponse.prototype.index = null;

        /**
         * SetHEKeyConfigurationResponse configuration.
         * @member {cloverpad.IHEKeyConfiguration|null|undefined} configuration
         * @memberof cloverpad.SetHEKeyConfigurationResponse
         * @instance
         */
        SetHEKeyConfigurationResponse.prototype.configuration = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * SetHEKeyConfigurationResponse _index.
         * @member {"index"|undefined} _index
         * @memberof cloverpad.SetHEKeyConfigurationResponse
         * @instance
         */
        Object.defineProperty(SetHEKeyConfigurationResponse.prototype, "_index", {
            get: $util.oneOfGetter($oneOfFields = ["index"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SetHEKeyConfigurationResponse instance using the specified properties.
         * @function create
         * @memberof cloverpad.SetHEKeyConfigurationResponse
         * @static
         * @param {cloverpad.ISetHEKeyConfigurationResponse=} [properties] Properties to set
         * @returns {cloverpad.SetHEKeyConfigurationResponse} SetHEKeyConfigurationResponse instance
         */
        SetHEKeyConfigurationResponse.create = function create(properties) {
            return new SetHEKeyConfigurationResponse(properties);
        };

        /**
         * Encodes the specified SetHEKeyConfigurationResponse message. Does not implicitly {@link cloverpad.SetHEKeyConfigurationResponse.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.SetHEKeyConfigurationResponse
         * @static
         * @param {cloverpad.ISetHEKeyConfigurationResponse} message SetHEKeyConfigurationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetHEKeyConfigurationResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
            if (message.configuration != null && Object.hasOwnProperty.call(message, "configuration"))
                $root.cloverpad.HEKeyConfiguration.encode(message.configuration, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SetHEKeyConfigurationResponse message, length delimited. Does not implicitly {@link cloverpad.SetHEKeyConfigurationResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.SetHEKeyConfigurationResponse
         * @static
         * @param {cloverpad.ISetHEKeyConfigurationResponse} message SetHEKeyConfigurationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetHEKeyConfigurationResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetHEKeyConfigurationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.SetHEKeyConfigurationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.SetHEKeyConfigurationResponse} SetHEKeyConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetHEKeyConfigurationResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.SetHEKeyConfigurationResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.index = reader.uint32();
                        break;
                    }
                case 2: {
                        message.configuration = $root.cloverpad.HEKeyConfiguration.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetHEKeyConfigurationResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.SetHEKeyConfigurationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.SetHEKeyConfigurationResponse} SetHEKeyConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetHEKeyConfigurationResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetHEKeyConfigurationResponse message.
         * @function verify
         * @memberof cloverpad.SetHEKeyConfigurationResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetHEKeyConfigurationResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.index != null && message.hasOwnProperty("index")) {
                properties._index = 1;
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            }
            if (message.configuration != null && message.hasOwnProperty("configuration")) {
                let error = $root.cloverpad.HEKeyConfiguration.verify(message.configuration);
                if (error)
                    return "configuration." + error;
            }
            return null;
        };

        /**
         * Creates a SetHEKeyConfigurationResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.SetHEKeyConfigurationResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.SetHEKeyConfigurationResponse} SetHEKeyConfigurationResponse
         */
        SetHEKeyConfigurationResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.SetHEKeyConfigurationResponse)
                return object;
            let message = new $root.cloverpad.SetHEKeyConfigurationResponse();
            if (object.index != null)
                message.index = object.index >>> 0;
            if (object.configuration != null) {
                if (typeof object.configuration !== "object")
                    throw TypeError(".cloverpad.SetHEKeyConfigurationResponse.configuration: object expected");
                message.configuration = $root.cloverpad.HEKeyConfiguration.fromObject(object.configuration);
            }
            return message;
        };

        /**
         * Creates a plain object from a SetHEKeyConfigurationResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.SetHEKeyConfigurationResponse
         * @static
         * @param {cloverpad.SetHEKeyConfigurationResponse} message SetHEKeyConfigurationResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetHEKeyConfigurationResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.configuration = null;
            if (message.index != null && message.hasOwnProperty("index")) {
                object.index = message.index;
                if (options.oneofs)
                    object._index = "index";
            }
            if (message.configuration != null && message.hasOwnProperty("configuration"))
                object.configuration = $root.cloverpad.HEKeyConfiguration.toObject(message.configuration, options);
            return object;
        };

        /**
         * Converts this SetHEKeyConfigurationResponse to JSON.
         * @function toJSON
         * @memberof cloverpad.SetHEKeyConfigurationResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetHEKeyConfigurationResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetHEKeyConfigurationResponse
         * @function getTypeUrl
         * @memberof cloverpad.SetHEKeyConfigurationResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetHEKeyConfigurationResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.SetHEKeyConfigurationResponse";
        };

        return SetHEKeyConfigurationResponse;
    })();

    cloverpad.RevertHEKeyConfiguration = (function() {

        /**
         * Properties of a RevertHEKeyConfiguration.
         * @memberof cloverpad
         * @interface IRevertHEKeyConfiguration
         */

        /**
         * Constructs a new RevertHEKeyConfiguration.
         * @memberof cloverpad
         * @classdesc Represents a RevertHEKeyConfiguration.
         * @implements IRevertHEKeyConfiguration
         * @constructor
         * @param {cloverpad.IRevertHEKeyConfiguration=} [properties] Properties to set
         */
        function RevertHEKeyConfiguration(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new RevertHEKeyConfiguration instance using the specified properties.
         * @function create
         * @memberof cloverpad.RevertHEKeyConfiguration
         * @static
         * @param {cloverpad.IRevertHEKeyConfiguration=} [properties] Properties to set
         * @returns {cloverpad.RevertHEKeyConfiguration} RevertHEKeyConfiguration instance
         */
        RevertHEKeyConfiguration.create = function create(properties) {
            return new RevertHEKeyConfiguration(properties);
        };

        /**
         * Encodes the specified RevertHEKeyConfiguration message. Does not implicitly {@link cloverpad.RevertHEKeyConfiguration.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.RevertHEKeyConfiguration
         * @static
         * @param {cloverpad.IRevertHEKeyConfiguration} message RevertHEKeyConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RevertHEKeyConfiguration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified RevertHEKeyConfiguration message, length delimited. Does not implicitly {@link cloverpad.RevertHEKeyConfiguration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.RevertHEKeyConfiguration
         * @static
         * @param {cloverpad.IRevertHEKeyConfiguration} message RevertHEKeyConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RevertHEKeyConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RevertHEKeyConfiguration message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.RevertHEKeyConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.RevertHEKeyConfiguration} RevertHEKeyConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RevertHEKeyConfiguration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.RevertHEKeyConfiguration();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RevertHEKeyConfiguration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.RevertHEKeyConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.RevertHEKeyConfiguration} RevertHEKeyConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RevertHEKeyConfiguration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RevertHEKeyConfiguration message.
         * @function verify
         * @memberof cloverpad.RevertHEKeyConfiguration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RevertHEKeyConfiguration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a RevertHEKeyConfiguration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.RevertHEKeyConfiguration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.RevertHEKeyConfiguration} RevertHEKeyConfiguration
         */
        RevertHEKeyConfiguration.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.RevertHEKeyConfiguration)
                return object;
            return new $root.cloverpad.RevertHEKeyConfiguration();
        };

        /**
         * Creates a plain object from a RevertHEKeyConfiguration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.RevertHEKeyConfiguration
         * @static
         * @param {cloverpad.RevertHEKeyConfiguration} message RevertHEKeyConfiguration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RevertHEKeyConfiguration.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this RevertHEKeyConfiguration to JSON.
         * @function toJSON
         * @memberof cloverpad.RevertHEKeyConfiguration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RevertHEKeyConfiguration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RevertHEKeyConfiguration
         * @function getTypeUrl
         * @memberof cloverpad.RevertHEKeyConfiguration
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RevertHEKeyConfiguration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.RevertHEKeyConfiguration";
        };

        return RevertHEKeyConfiguration;
    })();

    cloverpad.RevertHEKeyConfigurationResponse = (function() {

        /**
         * Properties of a RevertHEKeyConfigurationResponse.
         * @memberof cloverpad
         * @interface IRevertHEKeyConfigurationResponse
         * @property {Array.<cloverpad.IHEKeyConfiguration>|null} [configurations] RevertHEKeyConfigurationResponse configurations
         */

        /**
         * Constructs a new RevertHEKeyConfigurationResponse.
         * @memberof cloverpad
         * @classdesc Represents a RevertHEKeyConfigurationResponse.
         * @implements IRevertHEKeyConfigurationResponse
         * @constructor
         * @param {cloverpad.IRevertHEKeyConfigurationResponse=} [properties] Properties to set
         */
        function RevertHEKeyConfigurationResponse(properties) {
            this.configurations = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RevertHEKeyConfigurationResponse configurations.
         * @member {Array.<cloverpad.IHEKeyConfiguration>} configurations
         * @memberof cloverpad.RevertHEKeyConfigurationResponse
         * @instance
         */
        RevertHEKeyConfigurationResponse.prototype.configurations = $util.emptyArray;

        /**
         * Creates a new RevertHEKeyConfigurationResponse instance using the specified properties.
         * @function create
         * @memberof cloverpad.RevertHEKeyConfigurationResponse
         * @static
         * @param {cloverpad.IRevertHEKeyConfigurationResponse=} [properties] Properties to set
         * @returns {cloverpad.RevertHEKeyConfigurationResponse} RevertHEKeyConfigurationResponse instance
         */
        RevertHEKeyConfigurationResponse.create = function create(properties) {
            return new RevertHEKeyConfigurationResponse(properties);
        };

        /**
         * Encodes the specified RevertHEKeyConfigurationResponse message. Does not implicitly {@link cloverpad.RevertHEKeyConfigurationResponse.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.RevertHEKeyConfigurationResponse
         * @static
         * @param {cloverpad.IRevertHEKeyConfigurationResponse} message RevertHEKeyConfigurationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RevertHEKeyConfigurationResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.configurations != null && message.configurations.length)
                for (let i = 0; i < message.configurations.length; ++i)
                    $root.cloverpad.HEKeyConfiguration.encode(message.configurations[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RevertHEKeyConfigurationResponse message, length delimited. Does not implicitly {@link cloverpad.RevertHEKeyConfigurationResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.RevertHEKeyConfigurationResponse
         * @static
         * @param {cloverpad.IRevertHEKeyConfigurationResponse} message RevertHEKeyConfigurationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RevertHEKeyConfigurationResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RevertHEKeyConfigurationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.RevertHEKeyConfigurationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.RevertHEKeyConfigurationResponse} RevertHEKeyConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RevertHEKeyConfigurationResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.RevertHEKeyConfigurationResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        if (!(message.configurations && message.configurations.length))
                            message.configurations = [];
                        message.configurations.push($root.cloverpad.HEKeyConfiguration.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RevertHEKeyConfigurationResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.RevertHEKeyConfigurationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.RevertHEKeyConfigurationResponse} RevertHEKeyConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RevertHEKeyConfigurationResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RevertHEKeyConfigurationResponse message.
         * @function verify
         * @memberof cloverpad.RevertHEKeyConfigurationResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RevertHEKeyConfigurationResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.configurations != null && message.hasOwnProperty("configurations")) {
                if (!Array.isArray(message.configurations))
                    return "configurations: array expected";
                for (let i = 0; i < message.configurations.length; ++i) {
                    let error = $root.cloverpad.HEKeyConfiguration.verify(message.configurations[i]);
                    if (error)
                        return "configurations." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RevertHEKeyConfigurationResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.RevertHEKeyConfigurationResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.RevertHEKeyConfigurationResponse} RevertHEKeyConfigurationResponse
         */
        RevertHEKeyConfigurationResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.RevertHEKeyConfigurationResponse)
                return object;
            let message = new $root.cloverpad.RevertHEKeyConfigurationResponse();
            if (object.configurations) {
                if (!Array.isArray(object.configurations))
                    throw TypeError(".cloverpad.RevertHEKeyConfigurationResponse.configurations: array expected");
                message.configurations = [];
                for (let i = 0; i < object.configurations.length; ++i) {
                    if (typeof object.configurations[i] !== "object")
                        throw TypeError(".cloverpad.RevertHEKeyConfigurationResponse.configurations: object expected");
                    message.configurations[i] = $root.cloverpad.HEKeyConfiguration.fromObject(object.configurations[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RevertHEKeyConfigurationResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.RevertHEKeyConfigurationResponse
         * @static
         * @param {cloverpad.RevertHEKeyConfigurationResponse} message RevertHEKeyConfigurationResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RevertHEKeyConfigurationResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.configurations = [];
            if (message.configurations && message.configurations.length) {
                object.configurations = [];
                for (let j = 0; j < message.configurations.length; ++j)
                    object.configurations[j] = $root.cloverpad.HEKeyConfiguration.toObject(message.configurations[j], options);
            }
            return object;
        };

        /**
         * Converts this RevertHEKeyConfigurationResponse to JSON.
         * @function toJSON
         * @memberof cloverpad.RevertHEKeyConfigurationResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RevertHEKeyConfigurationResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RevertHEKeyConfigurationResponse
         * @function getTypeUrl
         * @memberof cloverpad.RevertHEKeyConfigurationResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RevertHEKeyConfigurationResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.RevertHEKeyConfigurationResponse";
        };

        return RevertHEKeyConfigurationResponse;
    })();

    cloverpad.MainConfiguration = (function() {

        /**
         * Properties of a MainConfiguration.
         * @memberof cloverpad
         * @interface IMainConfiguration
         * @property {number|null} [configurationVersion] MainConfiguration configurationVersion
         * @property {string|null} [name] MainConfiguration name
         */

        /**
         * Constructs a new MainConfiguration.
         * @memberof cloverpad
         * @classdesc Represents a MainConfiguration.
         * @implements IMainConfiguration
         * @constructor
         * @param {cloverpad.IMainConfiguration=} [properties] Properties to set
         */
        function MainConfiguration(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MainConfiguration configurationVersion.
         * @member {number} configurationVersion
         * @memberof cloverpad.MainConfiguration
         * @instance
         */
        MainConfiguration.prototype.configurationVersion = 0;

        /**
         * MainConfiguration name.
         * @member {string} name
         * @memberof cloverpad.MainConfiguration
         * @instance
         */
        MainConfiguration.prototype.name = "";

        /**
         * Creates a new MainConfiguration instance using the specified properties.
         * @function create
         * @memberof cloverpad.MainConfiguration
         * @static
         * @param {cloverpad.IMainConfiguration=} [properties] Properties to set
         * @returns {cloverpad.MainConfiguration} MainConfiguration instance
         */
        MainConfiguration.create = function create(properties) {
            return new MainConfiguration(properties);
        };

        /**
         * Encodes the specified MainConfiguration message. Does not implicitly {@link cloverpad.MainConfiguration.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.MainConfiguration
         * @static
         * @param {cloverpad.IMainConfiguration} message MainConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MainConfiguration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.configurationVersion != null && Object.hasOwnProperty.call(message, "configurationVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.configurationVersion);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified MainConfiguration message, length delimited. Does not implicitly {@link cloverpad.MainConfiguration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.MainConfiguration
         * @static
         * @param {cloverpad.IMainConfiguration} message MainConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MainConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MainConfiguration message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.MainConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.MainConfiguration} MainConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MainConfiguration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.MainConfiguration();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.configurationVersion = reader.uint32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MainConfiguration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.MainConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.MainConfiguration} MainConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MainConfiguration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MainConfiguration message.
         * @function verify
         * @memberof cloverpad.MainConfiguration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MainConfiguration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.configurationVersion != null && message.hasOwnProperty("configurationVersion"))
                if (!$util.isInteger(message.configurationVersion))
                    return "configurationVersion: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a MainConfiguration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.MainConfiguration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.MainConfiguration} MainConfiguration
         */
        MainConfiguration.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.MainConfiguration)
                return object;
            let message = new $root.cloverpad.MainConfiguration();
            if (object.configurationVersion != null)
                message.configurationVersion = object.configurationVersion >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a MainConfiguration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.MainConfiguration
         * @static
         * @param {cloverpad.MainConfiguration} message MainConfiguration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MainConfiguration.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.configurationVersion = 0;
                object.name = "";
            }
            if (message.configurationVersion != null && message.hasOwnProperty("configurationVersion"))
                object.configurationVersion = message.configurationVersion;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this MainConfiguration to JSON.
         * @function toJSON
         * @memberof cloverpad.MainConfiguration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MainConfiguration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MainConfiguration
         * @function getTypeUrl
         * @memberof cloverpad.MainConfiguration
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MainConfiguration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.MainConfiguration";
        };

        return MainConfiguration;
    })();

    cloverpad.HEKeyConfiguration = (function() {

        /**
         * Properties of a HEKeyConfiguration.
         * @memberof cloverpad
         * @interface IHEKeyConfiguration
         * @property {number|null} [configurationVersion] HEKeyConfiguration configurationVersion
         * @property {boolean|null} [enabled] HEKeyConfiguration enabled
         * @property {number|null} [keycode] HEKeyConfiguration keycode
         * @property {boolean|null} [rapidTrigger] HEKeyConfiguration rapidTrigger
         * @property {number|null} [actuationPointMm] HEKeyConfiguration actuationPointMm
         * @property {number|null} [upSensitivityMm] HEKeyConfiguration upSensitivityMm
         * @property {number|null} [downSensitivityMm] HEKeyConfiguration downSensitivityMm
         * @property {number|null} [upperDeadzoneMm] HEKeyConfiguration upperDeadzoneMm
         * @property {number|null} [lowerDeadzoneMm] HEKeyConfiguration lowerDeadzoneMm
         */

        /**
         * Constructs a new HEKeyConfiguration.
         * @memberof cloverpad
         * @classdesc Represents a HEKeyConfiguration.
         * @implements IHEKeyConfiguration
         * @constructor
         * @param {cloverpad.IHEKeyConfiguration=} [properties] Properties to set
         */
        function HEKeyConfiguration(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HEKeyConfiguration configurationVersion.
         * @member {number} configurationVersion
         * @memberof cloverpad.HEKeyConfiguration
         * @instance
         */
        HEKeyConfiguration.prototype.configurationVersion = 0;

        /**
         * HEKeyConfiguration enabled.
         * @member {boolean} enabled
         * @memberof cloverpad.HEKeyConfiguration
         * @instance
         */
        HEKeyConfiguration.prototype.enabled = false;

        /**
         * HEKeyConfiguration keycode.
         * @member {number} keycode
         * @memberof cloverpad.HEKeyConfiguration
         * @instance
         */
        HEKeyConfiguration.prototype.keycode = 0;

        /**
         * HEKeyConfiguration rapidTrigger.
         * @member {boolean} rapidTrigger
         * @memberof cloverpad.HEKeyConfiguration
         * @instance
         */
        HEKeyConfiguration.prototype.rapidTrigger = false;

        /**
         * HEKeyConfiguration actuationPointMm.
         * @member {number} actuationPointMm
         * @memberof cloverpad.HEKeyConfiguration
         * @instance
         */
        HEKeyConfiguration.prototype.actuationPointMm = 0;

        /**
         * HEKeyConfiguration upSensitivityMm.
         * @member {number} upSensitivityMm
         * @memberof cloverpad.HEKeyConfiguration
         * @instance
         */
        HEKeyConfiguration.prototype.upSensitivityMm = 0;

        /**
         * HEKeyConfiguration downSensitivityMm.
         * @member {number} downSensitivityMm
         * @memberof cloverpad.HEKeyConfiguration
         * @instance
         */
        HEKeyConfiguration.prototype.downSensitivityMm = 0;

        /**
         * HEKeyConfiguration upperDeadzoneMm.
         * @member {number} upperDeadzoneMm
         * @memberof cloverpad.HEKeyConfiguration
         * @instance
         */
        HEKeyConfiguration.prototype.upperDeadzoneMm = 0;

        /**
         * HEKeyConfiguration lowerDeadzoneMm.
         * @member {number} lowerDeadzoneMm
         * @memberof cloverpad.HEKeyConfiguration
         * @instance
         */
        HEKeyConfiguration.prototype.lowerDeadzoneMm = 0;

        /**
         * Creates a new HEKeyConfiguration instance using the specified properties.
         * @function create
         * @memberof cloverpad.HEKeyConfiguration
         * @static
         * @param {cloverpad.IHEKeyConfiguration=} [properties] Properties to set
         * @returns {cloverpad.HEKeyConfiguration} HEKeyConfiguration instance
         */
        HEKeyConfiguration.create = function create(properties) {
            return new HEKeyConfiguration(properties);
        };

        /**
         * Encodes the specified HEKeyConfiguration message. Does not implicitly {@link cloverpad.HEKeyConfiguration.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.HEKeyConfiguration
         * @static
         * @param {cloverpad.IHEKeyConfiguration} message HEKeyConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HEKeyConfiguration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.configurationVersion != null && Object.hasOwnProperty.call(message, "configurationVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.configurationVersion);
            if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                writer.uint32(/* id 100, wireType 0 =*/800).bool(message.enabled);
            if (message.keycode != null && Object.hasOwnProperty.call(message, "keycode"))
                writer.uint32(/* id 101, wireType 0 =*/808).int32(message.keycode);
            if (message.rapidTrigger != null && Object.hasOwnProperty.call(message, "rapidTrigger"))
                writer.uint32(/* id 102, wireType 0 =*/816).bool(message.rapidTrigger);
            if (message.actuationPointMm != null && Object.hasOwnProperty.call(message, "actuationPointMm"))
                writer.uint32(/* id 200, wireType 1 =*/1601).double(message.actuationPointMm);
            if (message.upSensitivityMm != null && Object.hasOwnProperty.call(message, "upSensitivityMm"))
                writer.uint32(/* id 300, wireType 1 =*/2401).double(message.upSensitivityMm);
            if (message.downSensitivityMm != null && Object.hasOwnProperty.call(message, "downSensitivityMm"))
                writer.uint32(/* id 301, wireType 1 =*/2409).double(message.downSensitivityMm);
            if (message.upperDeadzoneMm != null && Object.hasOwnProperty.call(message, "upperDeadzoneMm"))
                writer.uint32(/* id 302, wireType 1 =*/2417).double(message.upperDeadzoneMm);
            if (message.lowerDeadzoneMm != null && Object.hasOwnProperty.call(message, "lowerDeadzoneMm"))
                writer.uint32(/* id 303, wireType 1 =*/2425).double(message.lowerDeadzoneMm);
            return writer;
        };

        /**
         * Encodes the specified HEKeyConfiguration message, length delimited. Does not implicitly {@link cloverpad.HEKeyConfiguration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.HEKeyConfiguration
         * @static
         * @param {cloverpad.IHEKeyConfiguration} message HEKeyConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HEKeyConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HEKeyConfiguration message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.HEKeyConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.HEKeyConfiguration} HEKeyConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HEKeyConfiguration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.HEKeyConfiguration();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.configurationVersion = reader.uint32();
                        break;
                    }
                case 100: {
                        message.enabled = reader.bool();
                        break;
                    }
                case 101: {
                        message.keycode = reader.int32();
                        break;
                    }
                case 102: {
                        message.rapidTrigger = reader.bool();
                        break;
                    }
                case 200: {
                        message.actuationPointMm = reader.double();
                        break;
                    }
                case 300: {
                        message.upSensitivityMm = reader.double();
                        break;
                    }
                case 301: {
                        message.downSensitivityMm = reader.double();
                        break;
                    }
                case 302: {
                        message.upperDeadzoneMm = reader.double();
                        break;
                    }
                case 303: {
                        message.lowerDeadzoneMm = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HEKeyConfiguration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.HEKeyConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.HEKeyConfiguration} HEKeyConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HEKeyConfiguration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HEKeyConfiguration message.
         * @function verify
         * @memberof cloverpad.HEKeyConfiguration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HEKeyConfiguration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.configurationVersion != null && message.hasOwnProperty("configurationVersion"))
                if (!$util.isInteger(message.configurationVersion))
                    return "configurationVersion: integer expected";
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                if (typeof message.enabled !== "boolean")
                    return "enabled: boolean expected";
            if (message.keycode != null && message.hasOwnProperty("keycode"))
                if (!$util.isInteger(message.keycode))
                    return "keycode: integer expected";
            if (message.rapidTrigger != null && message.hasOwnProperty("rapidTrigger"))
                if (typeof message.rapidTrigger !== "boolean")
                    return "rapidTrigger: boolean expected";
            if (message.actuationPointMm != null && message.hasOwnProperty("actuationPointMm"))
                if (typeof message.actuationPointMm !== "number")
                    return "actuationPointMm: number expected";
            if (message.upSensitivityMm != null && message.hasOwnProperty("upSensitivityMm"))
                if (typeof message.upSensitivityMm !== "number")
                    return "upSensitivityMm: number expected";
            if (message.downSensitivityMm != null && message.hasOwnProperty("downSensitivityMm"))
                if (typeof message.downSensitivityMm !== "number")
                    return "downSensitivityMm: number expected";
            if (message.upperDeadzoneMm != null && message.hasOwnProperty("upperDeadzoneMm"))
                if (typeof message.upperDeadzoneMm !== "number")
                    return "upperDeadzoneMm: number expected";
            if (message.lowerDeadzoneMm != null && message.hasOwnProperty("lowerDeadzoneMm"))
                if (typeof message.lowerDeadzoneMm !== "number")
                    return "lowerDeadzoneMm: number expected";
            return null;
        };

        /**
         * Creates a HEKeyConfiguration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.HEKeyConfiguration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.HEKeyConfiguration} HEKeyConfiguration
         */
        HEKeyConfiguration.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.HEKeyConfiguration)
                return object;
            let message = new $root.cloverpad.HEKeyConfiguration();
            if (object.configurationVersion != null)
                message.configurationVersion = object.configurationVersion >>> 0;
            if (object.enabled != null)
                message.enabled = Boolean(object.enabled);
            if (object.keycode != null)
                message.keycode = object.keycode | 0;
            if (object.rapidTrigger != null)
                message.rapidTrigger = Boolean(object.rapidTrigger);
            if (object.actuationPointMm != null)
                message.actuationPointMm = Number(object.actuationPointMm);
            if (object.upSensitivityMm != null)
                message.upSensitivityMm = Number(object.upSensitivityMm);
            if (object.downSensitivityMm != null)
                message.downSensitivityMm = Number(object.downSensitivityMm);
            if (object.upperDeadzoneMm != null)
                message.upperDeadzoneMm = Number(object.upperDeadzoneMm);
            if (object.lowerDeadzoneMm != null)
                message.lowerDeadzoneMm = Number(object.lowerDeadzoneMm);
            return message;
        };

        /**
         * Creates a plain object from a HEKeyConfiguration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.HEKeyConfiguration
         * @static
         * @param {cloverpad.HEKeyConfiguration} message HEKeyConfiguration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HEKeyConfiguration.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.configurationVersion = 0;
                object.enabled = false;
                object.keycode = 0;
                object.rapidTrigger = false;
                object.actuationPointMm = 0;
                object.upSensitivityMm = 0;
                object.downSensitivityMm = 0;
                object.upperDeadzoneMm = 0;
                object.lowerDeadzoneMm = 0;
            }
            if (message.configurationVersion != null && message.hasOwnProperty("configurationVersion"))
                object.configurationVersion = message.configurationVersion;
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                object.enabled = message.enabled;
            if (message.keycode != null && message.hasOwnProperty("keycode"))
                object.keycode = message.keycode;
            if (message.rapidTrigger != null && message.hasOwnProperty("rapidTrigger"))
                object.rapidTrigger = message.rapidTrigger;
            if (message.actuationPointMm != null && message.hasOwnProperty("actuationPointMm"))
                object.actuationPointMm = options.json && !isFinite(message.actuationPointMm) ? String(message.actuationPointMm) : message.actuationPointMm;
            if (message.upSensitivityMm != null && message.hasOwnProperty("upSensitivityMm"))
                object.upSensitivityMm = options.json && !isFinite(message.upSensitivityMm) ? String(message.upSensitivityMm) : message.upSensitivityMm;
            if (message.downSensitivityMm != null && message.hasOwnProperty("downSensitivityMm"))
                object.downSensitivityMm = options.json && !isFinite(message.downSensitivityMm) ? String(message.downSensitivityMm) : message.downSensitivityMm;
            if (message.upperDeadzoneMm != null && message.hasOwnProperty("upperDeadzoneMm"))
                object.upperDeadzoneMm = options.json && !isFinite(message.upperDeadzoneMm) ? String(message.upperDeadzoneMm) : message.upperDeadzoneMm;
            if (message.lowerDeadzoneMm != null && message.hasOwnProperty("lowerDeadzoneMm"))
                object.lowerDeadzoneMm = options.json && !isFinite(message.lowerDeadzoneMm) ? String(message.lowerDeadzoneMm) : message.lowerDeadzoneMm;
            return object;
        };

        /**
         * Converts this HEKeyConfiguration to JSON.
         * @function toJSON
         * @memberof cloverpad.HEKeyConfiguration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HEKeyConfiguration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HEKeyConfiguration
         * @function getTypeUrl
         * @memberof cloverpad.HEKeyConfiguration
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HEKeyConfiguration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.HEKeyConfiguration";
        };

        return HEKeyConfiguration;
    })();

    cloverpad.FirmwareVersion = (function() {

        /**
         * Properties of a FirmwareVersion.
         * @memberof cloverpad
         * @interface IFirmwareVersion
         */

        /**
         * Constructs a new FirmwareVersion.
         * @memberof cloverpad
         * @classdesc Represents a FirmwareVersion.
         * @implements IFirmwareVersion
         * @constructor
         * @param {cloverpad.IFirmwareVersion=} [properties] Properties to set
         */
        function FirmwareVersion(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new FirmwareVersion instance using the specified properties.
         * @function create
         * @memberof cloverpad.FirmwareVersion
         * @static
         * @param {cloverpad.IFirmwareVersion=} [properties] Properties to set
         * @returns {cloverpad.FirmwareVersion} FirmwareVersion instance
         */
        FirmwareVersion.create = function create(properties) {
            return new FirmwareVersion(properties);
        };

        /**
         * Encodes the specified FirmwareVersion message. Does not implicitly {@link cloverpad.FirmwareVersion.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.FirmwareVersion
         * @static
         * @param {cloverpad.IFirmwareVersion} message FirmwareVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FirmwareVersion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified FirmwareVersion message, length delimited. Does not implicitly {@link cloverpad.FirmwareVersion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.FirmwareVersion
         * @static
         * @param {cloverpad.IFirmwareVersion} message FirmwareVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FirmwareVersion.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FirmwareVersion message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.FirmwareVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.FirmwareVersion} FirmwareVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FirmwareVersion.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.FirmwareVersion();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FirmwareVersion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.FirmwareVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.FirmwareVersion} FirmwareVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FirmwareVersion.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FirmwareVersion message.
         * @function verify
         * @memberof cloverpad.FirmwareVersion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FirmwareVersion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a FirmwareVersion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.FirmwareVersion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.FirmwareVersion} FirmwareVersion
         */
        FirmwareVersion.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.FirmwareVersion)
                return object;
            return new $root.cloverpad.FirmwareVersion();
        };

        /**
         * Creates a plain object from a FirmwareVersion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.FirmwareVersion
         * @static
         * @param {cloverpad.FirmwareVersion} message FirmwareVersion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FirmwareVersion.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this FirmwareVersion to JSON.
         * @function toJSON
         * @memberof cloverpad.FirmwareVersion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FirmwareVersion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FirmwareVersion
         * @function getTypeUrl
         * @memberof cloverpad.FirmwareVersion
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FirmwareVersion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.FirmwareVersion";
        };

        return FirmwareVersion;
    })();

    cloverpad.FirmwareVersionResponse = (function() {

        /**
         * Properties of a FirmwareVersionResponse.
         * @memberof cloverpad
         * @interface IFirmwareVersionResponse
         * @property {number|null} [version] FirmwareVersionResponse version
         */

        /**
         * Constructs a new FirmwareVersionResponse.
         * @memberof cloverpad
         * @classdesc Represents a FirmwareVersionResponse.
         * @implements IFirmwareVersionResponse
         * @constructor
         * @param {cloverpad.IFirmwareVersionResponse=} [properties] Properties to set
         */
        function FirmwareVersionResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FirmwareVersionResponse version.
         * @member {number} version
         * @memberof cloverpad.FirmwareVersionResponse
         * @instance
         */
        FirmwareVersionResponse.prototype.version = 0;

        /**
         * Creates a new FirmwareVersionResponse instance using the specified properties.
         * @function create
         * @memberof cloverpad.FirmwareVersionResponse
         * @static
         * @param {cloverpad.IFirmwareVersionResponse=} [properties] Properties to set
         * @returns {cloverpad.FirmwareVersionResponse} FirmwareVersionResponse instance
         */
        FirmwareVersionResponse.create = function create(properties) {
            return new FirmwareVersionResponse(properties);
        };

        /**
         * Encodes the specified FirmwareVersionResponse message. Does not implicitly {@link cloverpad.FirmwareVersionResponse.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.FirmwareVersionResponse
         * @static
         * @param {cloverpad.IFirmwareVersionResponse} message FirmwareVersionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FirmwareVersionResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
            return writer;
        };

        /**
         * Encodes the specified FirmwareVersionResponse message, length delimited. Does not implicitly {@link cloverpad.FirmwareVersionResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.FirmwareVersionResponse
         * @static
         * @param {cloverpad.IFirmwareVersionResponse} message FirmwareVersionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FirmwareVersionResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FirmwareVersionResponse message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.FirmwareVersionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.FirmwareVersionResponse} FirmwareVersionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FirmwareVersionResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.FirmwareVersionResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FirmwareVersionResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.FirmwareVersionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.FirmwareVersionResponse} FirmwareVersionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FirmwareVersionResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FirmwareVersionResponse message.
         * @function verify
         * @memberof cloverpad.FirmwareVersionResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FirmwareVersionResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            return null;
        };

        /**
         * Creates a FirmwareVersionResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.FirmwareVersionResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.FirmwareVersionResponse} FirmwareVersionResponse
         */
        FirmwareVersionResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.FirmwareVersionResponse)
                return object;
            let message = new $root.cloverpad.FirmwareVersionResponse();
            if (object.version != null)
                message.version = object.version | 0;
            return message;
        };

        /**
         * Creates a plain object from a FirmwareVersionResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.FirmwareVersionResponse
         * @static
         * @param {cloverpad.FirmwareVersionResponse} message FirmwareVersionResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FirmwareVersionResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.version = 0;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            return object;
        };

        /**
         * Converts this FirmwareVersionResponse to JSON.
         * @function toJSON
         * @memberof cloverpad.FirmwareVersionResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FirmwareVersionResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FirmwareVersionResponse
         * @function getTypeUrl
         * @memberof cloverpad.FirmwareVersionResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FirmwareVersionResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.FirmwareVersionResponse";
        };

        return FirmwareVersionResponse;
    })();

    cloverpad.GetConfiguration = (function() {

        /**
         * Properties of a GetConfiguration.
         * @memberof cloverpad
         * @interface IGetConfiguration
         */

        /**
         * Constructs a new GetConfiguration.
         * @memberof cloverpad
         * @classdesc Represents a GetConfiguration.
         * @implements IGetConfiguration
         * @constructor
         * @param {cloverpad.IGetConfiguration=} [properties] Properties to set
         */
        function GetConfiguration(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetConfiguration instance using the specified properties.
         * @function create
         * @memberof cloverpad.GetConfiguration
         * @static
         * @param {cloverpad.IGetConfiguration=} [properties] Properties to set
         * @returns {cloverpad.GetConfiguration} GetConfiguration instance
         */
        GetConfiguration.create = function create(properties) {
            return new GetConfiguration(properties);
        };

        /**
         * Encodes the specified GetConfiguration message. Does not implicitly {@link cloverpad.GetConfiguration.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.GetConfiguration
         * @static
         * @param {cloverpad.IGetConfiguration} message GetConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConfiguration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetConfiguration message, length delimited. Does not implicitly {@link cloverpad.GetConfiguration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.GetConfiguration
         * @static
         * @param {cloverpad.IGetConfiguration} message GetConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetConfiguration message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.GetConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.GetConfiguration} GetConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConfiguration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.GetConfiguration();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetConfiguration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.GetConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.GetConfiguration} GetConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConfiguration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetConfiguration message.
         * @function verify
         * @memberof cloverpad.GetConfiguration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetConfiguration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetConfiguration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.GetConfiguration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.GetConfiguration} GetConfiguration
         */
        GetConfiguration.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.GetConfiguration)
                return object;
            return new $root.cloverpad.GetConfiguration();
        };

        /**
         * Creates a plain object from a GetConfiguration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.GetConfiguration
         * @static
         * @param {cloverpad.GetConfiguration} message GetConfiguration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetConfiguration.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetConfiguration to JSON.
         * @function toJSON
         * @memberof cloverpad.GetConfiguration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetConfiguration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetConfiguration
         * @function getTypeUrl
         * @memberof cloverpad.GetConfiguration
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetConfiguration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.GetConfiguration";
        };

        return GetConfiguration;
    })();

    cloverpad.SaveConfiguration = (function() {

        /**
         * Properties of a SaveConfiguration.
         * @memberof cloverpad
         * @interface ISaveConfiguration
         */

        /**
         * Constructs a new SaveConfiguration.
         * @memberof cloverpad
         * @classdesc Represents a SaveConfiguration.
         * @implements ISaveConfiguration
         * @constructor
         * @param {cloverpad.ISaveConfiguration=} [properties] Properties to set
         */
        function SaveConfiguration(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SaveConfiguration instance using the specified properties.
         * @function create
         * @memberof cloverpad.SaveConfiguration
         * @static
         * @param {cloverpad.ISaveConfiguration=} [properties] Properties to set
         * @returns {cloverpad.SaveConfiguration} SaveConfiguration instance
         */
        SaveConfiguration.create = function create(properties) {
            return new SaveConfiguration(properties);
        };

        /**
         * Encodes the specified SaveConfiguration message. Does not implicitly {@link cloverpad.SaveConfiguration.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.SaveConfiguration
         * @static
         * @param {cloverpad.ISaveConfiguration} message SaveConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SaveConfiguration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SaveConfiguration message, length delimited. Does not implicitly {@link cloverpad.SaveConfiguration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.SaveConfiguration
         * @static
         * @param {cloverpad.ISaveConfiguration} message SaveConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SaveConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SaveConfiguration message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.SaveConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.SaveConfiguration} SaveConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SaveConfiguration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.SaveConfiguration();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SaveConfiguration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.SaveConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.SaveConfiguration} SaveConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SaveConfiguration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SaveConfiguration message.
         * @function verify
         * @memberof cloverpad.SaveConfiguration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SaveConfiguration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SaveConfiguration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.SaveConfiguration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.SaveConfiguration} SaveConfiguration
         */
        SaveConfiguration.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.SaveConfiguration)
                return object;
            return new $root.cloverpad.SaveConfiguration();
        };

        /**
         * Creates a plain object from a SaveConfiguration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.SaveConfiguration
         * @static
         * @param {cloverpad.SaveConfiguration} message SaveConfiguration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SaveConfiguration.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SaveConfiguration to JSON.
         * @function toJSON
         * @memberof cloverpad.SaveConfiguration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SaveConfiguration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SaveConfiguration
         * @function getTypeUrl
         * @memberof cloverpad.SaveConfiguration
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SaveConfiguration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.SaveConfiguration";
        };

        return SaveConfiguration;
    })();

    cloverpad.FactoryReset = (function() {

        /**
         * Properties of a FactoryReset.
         * @memberof cloverpad
         * @interface IFactoryReset
         */

        /**
         * Constructs a new FactoryReset.
         * @memberof cloverpad
         * @classdesc Represents a FactoryReset.
         * @implements IFactoryReset
         * @constructor
         * @param {cloverpad.IFactoryReset=} [properties] Properties to set
         */
        function FactoryReset(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new FactoryReset instance using the specified properties.
         * @function create
         * @memberof cloverpad.FactoryReset
         * @static
         * @param {cloverpad.IFactoryReset=} [properties] Properties to set
         * @returns {cloverpad.FactoryReset} FactoryReset instance
         */
        FactoryReset.create = function create(properties) {
            return new FactoryReset(properties);
        };

        /**
         * Encodes the specified FactoryReset message. Does not implicitly {@link cloverpad.FactoryReset.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.FactoryReset
         * @static
         * @param {cloverpad.IFactoryReset} message FactoryReset message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FactoryReset.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified FactoryReset message, length delimited. Does not implicitly {@link cloverpad.FactoryReset.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.FactoryReset
         * @static
         * @param {cloverpad.IFactoryReset} message FactoryReset message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FactoryReset.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FactoryReset message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.FactoryReset
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.FactoryReset} FactoryReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FactoryReset.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.FactoryReset();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FactoryReset message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.FactoryReset
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.FactoryReset} FactoryReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FactoryReset.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FactoryReset message.
         * @function verify
         * @memberof cloverpad.FactoryReset
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FactoryReset.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a FactoryReset message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.FactoryReset
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.FactoryReset} FactoryReset
         */
        FactoryReset.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.FactoryReset)
                return object;
            return new $root.cloverpad.FactoryReset();
        };

        /**
         * Creates a plain object from a FactoryReset message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.FactoryReset
         * @static
         * @param {cloverpad.FactoryReset} message FactoryReset
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FactoryReset.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this FactoryReset to JSON.
         * @function toJSON
         * @memberof cloverpad.FactoryReset
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FactoryReset.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FactoryReset
         * @function getTypeUrl
         * @memberof cloverpad.FactoryReset
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FactoryReset.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.FactoryReset";
        };

        return FactoryReset;
    })();

    cloverpad.FullConfigurationResponse = (function() {

        /**
         * Properties of a FullConfigurationResponse.
         * @memberof cloverpad
         * @interface IFullConfigurationResponse
         * @property {boolean|null} [modified] FullConfigurationResponse modified
         * @property {cloverpad.IMainConfiguration|null} [mainConfiguration] FullConfigurationResponse mainConfiguration
         * @property {Array.<cloverpad.IHEKeyConfiguration>|null} [heKeyConfigurations] FullConfigurationResponse heKeyConfigurations
         */

        /**
         * Constructs a new FullConfigurationResponse.
         * @memberof cloverpad
         * @classdesc Represents a FullConfigurationResponse.
         * @implements IFullConfigurationResponse
         * @constructor
         * @param {cloverpad.IFullConfigurationResponse=} [properties] Properties to set
         */
        function FullConfigurationResponse(properties) {
            this.heKeyConfigurations = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FullConfigurationResponse modified.
         * @member {boolean} modified
         * @memberof cloverpad.FullConfigurationResponse
         * @instance
         */
        FullConfigurationResponse.prototype.modified = false;

        /**
         * FullConfigurationResponse mainConfiguration.
         * @member {cloverpad.IMainConfiguration|null|undefined} mainConfiguration
         * @memberof cloverpad.FullConfigurationResponse
         * @instance
         */
        FullConfigurationResponse.prototype.mainConfiguration = null;

        /**
         * FullConfigurationResponse heKeyConfigurations.
         * @member {Array.<cloverpad.IHEKeyConfiguration>} heKeyConfigurations
         * @memberof cloverpad.FullConfigurationResponse
         * @instance
         */
        FullConfigurationResponse.prototype.heKeyConfigurations = $util.emptyArray;

        /**
         * Creates a new FullConfigurationResponse instance using the specified properties.
         * @function create
         * @memberof cloverpad.FullConfigurationResponse
         * @static
         * @param {cloverpad.IFullConfigurationResponse=} [properties] Properties to set
         * @returns {cloverpad.FullConfigurationResponse} FullConfigurationResponse instance
         */
        FullConfigurationResponse.create = function create(properties) {
            return new FullConfigurationResponse(properties);
        };

        /**
         * Encodes the specified FullConfigurationResponse message. Does not implicitly {@link cloverpad.FullConfigurationResponse.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.FullConfigurationResponse
         * @static
         * @param {cloverpad.IFullConfigurationResponse} message FullConfigurationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FullConfigurationResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.modified != null && Object.hasOwnProperty.call(message, "modified"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.modified);
            if (message.mainConfiguration != null && Object.hasOwnProperty.call(message, "mainConfiguration"))
                $root.cloverpad.MainConfiguration.encode(message.mainConfiguration, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.heKeyConfigurations != null && message.heKeyConfigurations.length)
                for (let i = 0; i < message.heKeyConfigurations.length; ++i)
                    $root.cloverpad.HEKeyConfiguration.encode(message.heKeyConfigurations[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FullConfigurationResponse message, length delimited. Does not implicitly {@link cloverpad.FullConfigurationResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.FullConfigurationResponse
         * @static
         * @param {cloverpad.IFullConfigurationResponse} message FullConfigurationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FullConfigurationResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FullConfigurationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.FullConfigurationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.FullConfigurationResponse} FullConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FullConfigurationResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.FullConfigurationResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.modified = reader.bool();
                        break;
                    }
                case 10: {
                        message.mainConfiguration = $root.cloverpad.MainConfiguration.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        if (!(message.heKeyConfigurations && message.heKeyConfigurations.length))
                            message.heKeyConfigurations = [];
                        message.heKeyConfigurations.push($root.cloverpad.HEKeyConfiguration.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FullConfigurationResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.FullConfigurationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.FullConfigurationResponse} FullConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FullConfigurationResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FullConfigurationResponse message.
         * @function verify
         * @memberof cloverpad.FullConfigurationResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FullConfigurationResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.modified != null && message.hasOwnProperty("modified"))
                if (typeof message.modified !== "boolean")
                    return "modified: boolean expected";
            if (message.mainConfiguration != null && message.hasOwnProperty("mainConfiguration")) {
                let error = $root.cloverpad.MainConfiguration.verify(message.mainConfiguration);
                if (error)
                    return "mainConfiguration." + error;
            }
            if (message.heKeyConfigurations != null && message.hasOwnProperty("heKeyConfigurations")) {
                if (!Array.isArray(message.heKeyConfigurations))
                    return "heKeyConfigurations: array expected";
                for (let i = 0; i < message.heKeyConfigurations.length; ++i) {
                    let error = $root.cloverpad.HEKeyConfiguration.verify(message.heKeyConfigurations[i]);
                    if (error)
                        return "heKeyConfigurations." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FullConfigurationResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.FullConfigurationResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.FullConfigurationResponse} FullConfigurationResponse
         */
        FullConfigurationResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.FullConfigurationResponse)
                return object;
            let message = new $root.cloverpad.FullConfigurationResponse();
            if (object.modified != null)
                message.modified = Boolean(object.modified);
            if (object.mainConfiguration != null) {
                if (typeof object.mainConfiguration !== "object")
                    throw TypeError(".cloverpad.FullConfigurationResponse.mainConfiguration: object expected");
                message.mainConfiguration = $root.cloverpad.MainConfiguration.fromObject(object.mainConfiguration);
            }
            if (object.heKeyConfigurations) {
                if (!Array.isArray(object.heKeyConfigurations))
                    throw TypeError(".cloverpad.FullConfigurationResponse.heKeyConfigurations: array expected");
                message.heKeyConfigurations = [];
                for (let i = 0; i < object.heKeyConfigurations.length; ++i) {
                    if (typeof object.heKeyConfigurations[i] !== "object")
                        throw TypeError(".cloverpad.FullConfigurationResponse.heKeyConfigurations: object expected");
                    message.heKeyConfigurations[i] = $root.cloverpad.HEKeyConfiguration.fromObject(object.heKeyConfigurations[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FullConfigurationResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.FullConfigurationResponse
         * @static
         * @param {cloverpad.FullConfigurationResponse} message FullConfigurationResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FullConfigurationResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.heKeyConfigurations = [];
            if (options.defaults) {
                object.modified = false;
                object.mainConfiguration = null;
            }
            if (message.modified != null && message.hasOwnProperty("modified"))
                object.modified = message.modified;
            if (message.mainConfiguration != null && message.hasOwnProperty("mainConfiguration"))
                object.mainConfiguration = $root.cloverpad.MainConfiguration.toObject(message.mainConfiguration, options);
            if (message.heKeyConfigurations && message.heKeyConfigurations.length) {
                object.heKeyConfigurations = [];
                for (let j = 0; j < message.heKeyConfigurations.length; ++j)
                    object.heKeyConfigurations[j] = $root.cloverpad.HEKeyConfiguration.toObject(message.heKeyConfigurations[j], options);
            }
            return object;
        };

        /**
         * Converts this FullConfigurationResponse to JSON.
         * @function toJSON
         * @memberof cloverpad.FullConfigurationResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FullConfigurationResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FullConfigurationResponse
         * @function getTypeUrl
         * @memberof cloverpad.FullConfigurationResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FullConfigurationResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.FullConfigurationResponse";
        };

        return FullConfigurationResponse;
    })();

    cloverpad.GetHEKeyState = (function() {

        /**
         * Properties of a GetHEKeyState.
         * @memberof cloverpad
         * @interface IGetHEKeyState
         */

        /**
         * Constructs a new GetHEKeyState.
         * @memberof cloverpad
         * @classdesc Represents a GetHEKeyState.
         * @implements IGetHEKeyState
         * @constructor
         * @param {cloverpad.IGetHEKeyState=} [properties] Properties to set
         */
        function GetHEKeyState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetHEKeyState instance using the specified properties.
         * @function create
         * @memberof cloverpad.GetHEKeyState
         * @static
         * @param {cloverpad.IGetHEKeyState=} [properties] Properties to set
         * @returns {cloverpad.GetHEKeyState} GetHEKeyState instance
         */
        GetHEKeyState.create = function create(properties) {
            return new GetHEKeyState(properties);
        };

        /**
         * Encodes the specified GetHEKeyState message. Does not implicitly {@link cloverpad.GetHEKeyState.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.GetHEKeyState
         * @static
         * @param {cloverpad.IGetHEKeyState} message GetHEKeyState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetHEKeyState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetHEKeyState message, length delimited. Does not implicitly {@link cloverpad.GetHEKeyState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.GetHEKeyState
         * @static
         * @param {cloverpad.IGetHEKeyState} message GetHEKeyState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetHEKeyState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetHEKeyState message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.GetHEKeyState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.GetHEKeyState} GetHEKeyState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetHEKeyState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.GetHEKeyState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetHEKeyState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.GetHEKeyState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.GetHEKeyState} GetHEKeyState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetHEKeyState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetHEKeyState message.
         * @function verify
         * @memberof cloverpad.GetHEKeyState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetHEKeyState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetHEKeyState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.GetHEKeyState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.GetHEKeyState} GetHEKeyState
         */
        GetHEKeyState.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.GetHEKeyState)
                return object;
            return new $root.cloverpad.GetHEKeyState();
        };

        /**
         * Creates a plain object from a GetHEKeyState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.GetHEKeyState
         * @static
         * @param {cloverpad.GetHEKeyState} message GetHEKeyState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetHEKeyState.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetHEKeyState to JSON.
         * @function toJSON
         * @memberof cloverpad.GetHEKeyState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetHEKeyState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetHEKeyState
         * @function getTypeUrl
         * @memberof cloverpad.GetHEKeyState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetHEKeyState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.GetHEKeyState";
        };

        return GetHEKeyState;
    })();

    cloverpad.GetHEKeyStateResponse = (function() {

        /**
         * Properties of a GetHEKeyStateResponse.
         * @memberof cloverpad
         * @interface IGetHEKeyStateResponse
         * @property {Array.<cloverpad.IHEKeyState>|null} [states] GetHEKeyStateResponse states
         */

        /**
         * Constructs a new GetHEKeyStateResponse.
         * @memberof cloverpad
         * @classdesc Represents a GetHEKeyStateResponse.
         * @implements IGetHEKeyStateResponse
         * @constructor
         * @param {cloverpad.IGetHEKeyStateResponse=} [properties] Properties to set
         */
        function GetHEKeyStateResponse(properties) {
            this.states = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetHEKeyStateResponse states.
         * @member {Array.<cloverpad.IHEKeyState>} states
         * @memberof cloverpad.GetHEKeyStateResponse
         * @instance
         */
        GetHEKeyStateResponse.prototype.states = $util.emptyArray;

        /**
         * Creates a new GetHEKeyStateResponse instance using the specified properties.
         * @function create
         * @memberof cloverpad.GetHEKeyStateResponse
         * @static
         * @param {cloverpad.IGetHEKeyStateResponse=} [properties] Properties to set
         * @returns {cloverpad.GetHEKeyStateResponse} GetHEKeyStateResponse instance
         */
        GetHEKeyStateResponse.create = function create(properties) {
            return new GetHEKeyStateResponse(properties);
        };

        /**
         * Encodes the specified GetHEKeyStateResponse message. Does not implicitly {@link cloverpad.GetHEKeyStateResponse.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.GetHEKeyStateResponse
         * @static
         * @param {cloverpad.IGetHEKeyStateResponse} message GetHEKeyStateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetHEKeyStateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.states != null && message.states.length)
                for (let i = 0; i < message.states.length; ++i)
                    $root.cloverpad.HEKeyState.encode(message.states[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetHEKeyStateResponse message, length delimited. Does not implicitly {@link cloverpad.GetHEKeyStateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.GetHEKeyStateResponse
         * @static
         * @param {cloverpad.IGetHEKeyStateResponse} message GetHEKeyStateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetHEKeyStateResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetHEKeyStateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.GetHEKeyStateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.GetHEKeyStateResponse} GetHEKeyStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetHEKeyStateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.GetHEKeyStateResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.states && message.states.length))
                            message.states = [];
                        message.states.push($root.cloverpad.HEKeyState.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetHEKeyStateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.GetHEKeyStateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.GetHEKeyStateResponse} GetHEKeyStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetHEKeyStateResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetHEKeyStateResponse message.
         * @function verify
         * @memberof cloverpad.GetHEKeyStateResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetHEKeyStateResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.states != null && message.hasOwnProperty("states")) {
                if (!Array.isArray(message.states))
                    return "states: array expected";
                for (let i = 0; i < message.states.length; ++i) {
                    let error = $root.cloverpad.HEKeyState.verify(message.states[i]);
                    if (error)
                        return "states." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetHEKeyStateResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.GetHEKeyStateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.GetHEKeyStateResponse} GetHEKeyStateResponse
         */
        GetHEKeyStateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.GetHEKeyStateResponse)
                return object;
            let message = new $root.cloverpad.GetHEKeyStateResponse();
            if (object.states) {
                if (!Array.isArray(object.states))
                    throw TypeError(".cloverpad.GetHEKeyStateResponse.states: array expected");
                message.states = [];
                for (let i = 0; i < object.states.length; ++i) {
                    if (typeof object.states[i] !== "object")
                        throw TypeError(".cloverpad.GetHEKeyStateResponse.states: object expected");
                    message.states[i] = $root.cloverpad.HEKeyState.fromObject(object.states[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetHEKeyStateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.GetHEKeyStateResponse
         * @static
         * @param {cloverpad.GetHEKeyStateResponse} message GetHEKeyStateResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetHEKeyStateResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.states = [];
            if (message.states && message.states.length) {
                object.states = [];
                for (let j = 0; j < message.states.length; ++j)
                    object.states[j] = $root.cloverpad.HEKeyState.toObject(message.states[j], options);
            }
            return object;
        };

        /**
         * Converts this GetHEKeyStateResponse to JSON.
         * @function toJSON
         * @memberof cloverpad.GetHEKeyStateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetHEKeyStateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetHEKeyStateResponse
         * @function getTypeUrl
         * @memberof cloverpad.GetHEKeyStateResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetHEKeyStateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.GetHEKeyStateResponse";
        };

        return GetHEKeyStateResponse;
    })();

    cloverpad.HEKeyState = (function() {

        /**
         * Properties of a HEKeyState.
         * @memberof cloverpad
         * @interface IHEKeyState
         * @property {boolean|null} [pressed] HEKeyState pressed
         * @property {number|null} [averageReading] HEKeyState averageReading
         * @property {number|null} [lastPosition] HEKeyState lastPosition
         */

        /**
         * Constructs a new HEKeyState.
         * @memberof cloverpad
         * @classdesc Represents a HEKeyState.
         * @implements IHEKeyState
         * @constructor
         * @param {cloverpad.IHEKeyState=} [properties] Properties to set
         */
        function HEKeyState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HEKeyState pressed.
         * @member {boolean} pressed
         * @memberof cloverpad.HEKeyState
         * @instance
         */
        HEKeyState.prototype.pressed = false;

        /**
         * HEKeyState averageReading.
         * @member {number} averageReading
         * @memberof cloverpad.HEKeyState
         * @instance
         */
        HEKeyState.prototype.averageReading = 0;

        /**
         * HEKeyState lastPosition.
         * @member {number} lastPosition
         * @memberof cloverpad.HEKeyState
         * @instance
         */
        HEKeyState.prototype.lastPosition = 0;

        /**
         * Creates a new HEKeyState instance using the specified properties.
         * @function create
         * @memberof cloverpad.HEKeyState
         * @static
         * @param {cloverpad.IHEKeyState=} [properties] Properties to set
         * @returns {cloverpad.HEKeyState} HEKeyState instance
         */
        HEKeyState.create = function create(properties) {
            return new HEKeyState(properties);
        };

        /**
         * Encodes the specified HEKeyState message. Does not implicitly {@link cloverpad.HEKeyState.verify|verify} messages.
         * @function encode
         * @memberof cloverpad.HEKeyState
         * @static
         * @param {cloverpad.IHEKeyState} message HEKeyState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HEKeyState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pressed != null && Object.hasOwnProperty.call(message, "pressed"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.pressed);
            if (message.averageReading != null && Object.hasOwnProperty.call(message, "averageReading"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.averageReading);
            if (message.lastPosition != null && Object.hasOwnProperty.call(message, "lastPosition"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.lastPosition);
            return writer;
        };

        /**
         * Encodes the specified HEKeyState message, length delimited. Does not implicitly {@link cloverpad.HEKeyState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloverpad.HEKeyState
         * @static
         * @param {cloverpad.IHEKeyState} message HEKeyState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HEKeyState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HEKeyState message from the specified reader or buffer.
         * @function decode
         * @memberof cloverpad.HEKeyState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloverpad.HEKeyState} HEKeyState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HEKeyState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloverpad.HEKeyState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.pressed = reader.bool();
                        break;
                    }
                case 2: {
                        message.averageReading = reader.uint32();
                        break;
                    }
                case 3: {
                        message.lastPosition = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HEKeyState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloverpad.HEKeyState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloverpad.HEKeyState} HEKeyState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HEKeyState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HEKeyState message.
         * @function verify
         * @memberof cloverpad.HEKeyState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HEKeyState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pressed != null && message.hasOwnProperty("pressed"))
                if (typeof message.pressed !== "boolean")
                    return "pressed: boolean expected";
            if (message.averageReading != null && message.hasOwnProperty("averageReading"))
                if (!$util.isInteger(message.averageReading))
                    return "averageReading: integer expected";
            if (message.lastPosition != null && message.hasOwnProperty("lastPosition"))
                if (typeof message.lastPosition !== "number")
                    return "lastPosition: number expected";
            return null;
        };

        /**
         * Creates a HEKeyState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloverpad.HEKeyState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloverpad.HEKeyState} HEKeyState
         */
        HEKeyState.fromObject = function fromObject(object) {
            if (object instanceof $root.cloverpad.HEKeyState)
                return object;
            let message = new $root.cloverpad.HEKeyState();
            if (object.pressed != null)
                message.pressed = Boolean(object.pressed);
            if (object.averageReading != null)
                message.averageReading = object.averageReading >>> 0;
            if (object.lastPosition != null)
                message.lastPosition = Number(object.lastPosition);
            return message;
        };

        /**
         * Creates a plain object from a HEKeyState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloverpad.HEKeyState
         * @static
         * @param {cloverpad.HEKeyState} message HEKeyState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HEKeyState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.pressed = false;
                object.averageReading = 0;
                object.lastPosition = 0;
            }
            if (message.pressed != null && message.hasOwnProperty("pressed"))
                object.pressed = message.pressed;
            if (message.averageReading != null && message.hasOwnProperty("averageReading"))
                object.averageReading = message.averageReading;
            if (message.lastPosition != null && message.hasOwnProperty("lastPosition"))
                object.lastPosition = options.json && !isFinite(message.lastPosition) ? String(message.lastPosition) : message.lastPosition;
            return object;
        };

        /**
         * Converts this HEKeyState to JSON.
         * @function toJSON
         * @memberof cloverpad.HEKeyState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HEKeyState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HEKeyState
         * @function getTypeUrl
         * @memberof cloverpad.HEKeyState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HEKeyState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloverpad.HEKeyState";
        };

        return HEKeyState;
    })();

    return cloverpad;
})();

export { $root as default };
