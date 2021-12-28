"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerPlayerDisconnectedPlayer = void 0;
class ServerPlayerDisconnectedPlayer {
    constructor(input) {
        this._id = input.id;
    }
    get id() { return this._id; }
    set id(id) { this._id = id; }
    get additionalProperties() { return this._additionalProperties; }
    set additionalProperties(additionalProperties) { this._additionalProperties = additionalProperties; }
    marshal() {
        let json = '{';
        if (this.id !== undefined) {
            json += `"id": ${typeof this.id === 'number' || typeof this.id === 'boolean' ? this.id : JSON.stringify(this.id)},`;
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
        const instance = new ServerPlayerDisconnectedPlayer({});
        if (obj["id"] !== undefined) {
            instance.id = obj["id"];
        }
        //Not part of core properties
        if (instance.additionalProperties === undefined) {
            instance.additionalProperties = new Map();
        }
        for (const [key, value] of Object.entries(obj).filter((([key,]) => { return !["id"].includes(key); }))) {
            instance.additionalProperties.set(key, value);
        }
        return instance;
    }
}
exports.ServerPlayerDisconnectedPlayer = ServerPlayerDisconnectedPlayer;
//# sourceMappingURL=ServerPlayerDisconnectedPlayer.js.map