"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerPlayerDisconnected = void 0;
class ServerPlayerDisconnected {
    constructor(input) {
        this._disconnectedTimestamp = input.disconnectedTimestamp;
        this._player = input.player;
        this._reason = input.reason;
    }
    get disconnectedTimestamp() { return this._disconnectedTimestamp; }
    set disconnectedTimestamp(disconnectedTimestamp) { this._disconnectedTimestamp = disconnectedTimestamp; }
    get player() { return this._player; }
    set player(player) { this._player = player; }
    get reason() { return this._reason; }
    set reason(reason) { this._reason = reason; }
    get additionalProperties() { return this._additionalProperties; }
    set additionalProperties(additionalProperties) { this._additionalProperties = additionalProperties; }
    marshal() {
        let json = '{';
        if (this.disconnectedTimestamp !== undefined) {
            json += `"disconnected_timestamp": ${typeof this.disconnectedTimestamp === 'number' || typeof this.disconnectedTimestamp === 'boolean' ? this.disconnectedTimestamp : JSON.stringify(this.disconnectedTimestamp)},`;
        }
        if (this.player !== undefined) {
            json += `"player": ${this.player.marshal()},`;
        }
        if (this.reason !== undefined) {
            json += `"reason": ${typeof this.reason === 'number' || typeof this.reason === 'boolean' ? this.reason : JSON.stringify(this.reason)},`;
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
        const instance = new ServerPlayerDisconnected({});
        if (obj["disconnected_timestamp"] !== undefined) {
            instance.disconnectedTimestamp = obj["disconnected_timestamp"];
        }
        if (obj["player"] !== undefined) {
            instance.player = ServerPlayerDisconnectedPlayer.unmarshal(obj["player"]);
        }
        if (obj["reason"] !== undefined) {
            instance.reason = obj["reason"];
        }
        //Not part of core properties
        if (instance.additionalProperties === undefined) {
            instance.additionalProperties = new Map();
        }
        for (const [key, value] of Object.entries(obj).filter((([key,]) => { return !["disconnected_timestamp", "player", "reason"].includes(key); }))) {
            instance.additionalProperties.set(key, value);
        }
        return instance;
    }
}
exports.ServerPlayerDisconnected = ServerPlayerDisconnected;
//# sourceMappingURL=ServerPlayerDisconnected.js.map