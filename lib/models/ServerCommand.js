"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerCommand = void 0;
class ServerCommand {
    constructor(input) {
        this._command = input.command;
        this._reservedArguments = input.reservedArguments;
        this._steamId = input.steamId;
        this._timestamp = input.timestamp;
    }
    get command() { return this._command; }
    set command(command) { this._command = command; }
    get reservedArguments() { return this._reservedArguments; }
    set reservedArguments(reservedArguments) { this._reservedArguments = reservedArguments; }
    get steamId() { return this._steamId; }
    set steamId(steamId) { this._steamId = steamId; }
    get timestamp() { return this._timestamp; }
    set timestamp(timestamp) { this._timestamp = timestamp; }
    get additionalProperties() { return this._additionalProperties; }
    set additionalProperties(additionalProperties) { this._additionalProperties = additionalProperties; }
    marshal() {
        let json = '{';
        if (this.command !== undefined) {
            json += `"command": ${typeof this.command === 'number' || typeof this.command === 'boolean' ? this.command : JSON.stringify(this.command)},`;
        }
        if (this.reservedArguments !== undefined) {
            json += `"arguments": ${typeof this.reservedArguments === 'number' || typeof this.reservedArguments === 'boolean' ? this.reservedArguments : JSON.stringify(this.reservedArguments)},`;
        }
        if (this.steamId !== undefined) {
            json += `"steam_id": ${typeof this.steamId === 'number' || typeof this.steamId === 'boolean' ? this.steamId : JSON.stringify(this.steamId)},`;
        }
        if (this.timestamp !== undefined) {
            json += `"timestamp": ${typeof this.timestamp === 'number' || typeof this.timestamp === 'boolean' ? this.timestamp : JSON.stringify(this.timestamp)},`;
        }
        if (this.additionalProperties !== undefined) {
            for (const [key, value] of this.additionalProperties.entries()) {
                //Only render additionalProperties which are not already a property
                if (Object.keys(this).includes(String(key)))
                    continue;
                json += `"${key}": ${typeof value === 'number' || typeof value === 'boolean' ? value : JSON.stringify(value)},`;
            }
        }
        //Remove potential last comma 
        return `${json.charAt(json.length - 1) === ',' ? json.slice(0, json.length - 1) : json}}`;
    }
    static unmarshal(json) {
        const obj = typeof json === "object" ? json : JSON.parse(json);
        const instance = new ServerCommand({});
        if (obj["command"] !== undefined) {
            instance.command = obj["command"];
        }
        if (obj["arguments"] !== undefined) {
            instance.reservedArguments = obj["arguments"];
        }
        if (obj["steam_id"] !== undefined) {
            instance.steamId = obj["steam_id"];
        }
        if (obj["timestamp"] !== undefined) {
            instance.timestamp = obj["timestamp"];
        }
        //Not part of core properties
        if (instance.additionalProperties === undefined) {
            instance.additionalProperties = new Map();
        }
        for (const [key, value] of Object.entries(obj).filter((([key,]) => { return !["command", "arguments", "steam_id", "timestamp"].includes(key); }))) {
            instance.additionalProperties.set(key, value);
        }
        return instance;
    }
}
exports.ServerCommand = ServerCommand;
//# sourceMappingURL=ServerCommand.js.map