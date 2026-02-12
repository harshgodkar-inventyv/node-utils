/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.myapp = (function() {

    /**
     * Namespace myapp.
     * @exports myapp
     * @namespace
     */
    var myapp = {};

    myapp.User = (function() {

        /**
         * Properties of a User.
         * @memberof myapp
         * @interface IUser
         * @property {number|null} [id] User id
         * @property {string|null} [name] User name
         * @property {string|null} [email] User email
         * @property {number|null} [age] User age
         * @property {string|null} [password] User password
         */

        /**
         * Constructs a new User.
         * @memberof myapp
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {myapp.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {number|null|undefined} id
         * @memberof myapp.User
         * @instance
         */
        User.prototype.id = null;

        /**
         * User name.
         * @member {string|null|undefined} name
         * @memberof myapp.User
         * @instance
         */
        User.prototype.name = null;

        /**
         * User email.
         * @member {string|null|undefined} email
         * @memberof myapp.User
         * @instance
         */
        User.prototype.email = null;

        /**
         * User age.
         * @member {number|null|undefined} age
         * @memberof myapp.User
         * @instance
         */
        User.prototype.age = null;

        /**
         * User password.
         * @member {string|null|undefined} password
         * @memberof myapp.User
         * @instance
         */
        User.prototype.password = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(User.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(User.prototype, "_name", {
            get: $util.oneOfGetter($oneOfFields = ["name"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(User.prototype, "_email", {
            get: $util.oneOfGetter($oneOfFields = ["email"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(User.prototype, "_age", {
            get: $util.oneOfGetter($oneOfFields = ["age"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(User.prototype, "_password", {
            get: $util.oneOfGetter($oneOfFields = ["password"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof myapp.User
         * @static
         * @param {myapp.IUser=} [properties] Properties to set
         * @returns {myapp.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link myapp.User.verify|verify} messages.
         * @function encode
         * @memberof myapp.User
         * @static
         * @param {myapp.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.age);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link myapp.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof myapp.User
         * @static
         * @param {myapp.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof myapp.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {myapp.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.myapp.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.email = reader.string();
                        break;
                    }
                case 4: {
                        message.age = reader.int32();
                        break;
                    }
                case 5: {
                        message.password = reader.string();
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
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof myapp.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {myapp.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof myapp.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                properties._id = 1;
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            }
            if (message.name != null && message.hasOwnProperty("name")) {
                properties._name = 1;
                if (!$util.isString(message.name))
                    return "name: string expected";
            }
            if (message.email != null && message.hasOwnProperty("email")) {
                properties._email = 1;
                if (!$util.isString(message.email))
                    return "email: string expected";
            }
            if (message.age != null && message.hasOwnProperty("age")) {
                properties._age = 1;
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            }
            if (message.password != null && message.hasOwnProperty("password")) {
                properties._password = 1;
                if (!$util.isString(message.password))
                    return "password: string expected";
            }
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof myapp.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {myapp.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.myapp.User)
                return object;
            var message = new $root.myapp.User();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.email != null)
                message.email = String(object.email);
            if (object.age != null)
                message.age = object.age | 0;
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof myapp.User
         * @static
         * @param {myapp.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                object.id = message.id;
                if (options.oneofs)
                    object._id = "id";
            }
            if (message.name != null && message.hasOwnProperty("name")) {
                object.name = message.name;
                if (options.oneofs)
                    object._name = "name";
            }
            if (message.email != null && message.hasOwnProperty("email")) {
                object.email = message.email;
                if (options.oneofs)
                    object._email = "email";
            }
            if (message.age != null && message.hasOwnProperty("age")) {
                object.age = message.age;
                if (options.oneofs)
                    object._age = "age";
            }
            if (message.password != null && message.hasOwnProperty("password")) {
                object.password = message.password;
                if (options.oneofs)
                    object._password = "password";
            }
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof myapp.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for User
         * @function getTypeUrl
         * @memberof myapp.User
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myapp.User";
        };

        return User;
    })();

    return myapp;
})();

module.exports = $root;
