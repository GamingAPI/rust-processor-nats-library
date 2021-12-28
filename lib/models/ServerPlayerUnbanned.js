"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerPlayerUnbanned = void 0;
class ServerPlayerUnbanned {
    constructor(input) {
        this._steamId = input.steamId;
        this._name = input.name;
        this._timestamp = input.timestamp;
    }
    get steamId() { return this._steamId; }
    set steamId(steamId) { this._steamId = steamId; }
    get name() { return this._name; }
    set name(name) { this._name = name; }
    get timestamp() { return this._timestamp; }
    set timestamp(timestamp) { this._timestamp = timestamp; }
    get additionalProperties() { return this._additionalProperties; }
    set additionalProperties(additionalProperties) { this._additionalProperties = additionalProperties; }
    marshal() {
        let json = '{';
        if (this.steamId !== undefined) {
            json += `"steam_id": ${typeof this.steamId === 'number' || typeof this.steamId === 'boolean' ? this.steamId : JSON.stringify(this.steamId)},`;
        }
        if (this.name !== undefined) {
            json += `"name": ${typeof this.name === 'number' || typeof this.name === 'boolean' ? this.name : JSON.stringify(this.name)},`;
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
        const instance = new ServerPlayerUnbanned({});
        if (obj["steam_id"] !== undefined) {
            instance.steamId = obj["steam_id"];
        }
        if (obj["name"] !== undefined) {
            instance.name = obj["name"];
        }
        if (obj["timestamp"] !== undefined) {
            instance.timestamp = obj["timestamp"];
        }
        //Not part of core properties
        if (instance.additionalProperties === undefined) {
            instance.additionalProperties = new Map();
        }
        for (const [key, value] of Object.entries(obj).filter((([key,]) => { return !["steam_id", "name", "timestamp"].includes(key); }))) {
            instance.additionalProperties.set(key, value);
        }
        return instance;
    }
}
exports.ServerPlayerUnbanned = ServerPlayerUnbanned;
//# sourceMappingURL=ServerPlayerUnbanned.js.map