"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerPlayerConnected = void 0;
class ServerPlayerConnected {
    constructor(input) {
        this._connectedTimestamp = input.connectedTimestamp;
        this._player = input.player;
    }
    get connectedTimestamp() { return this._connectedTimestamp; }
    set connectedTimestamp(connectedTimestamp) { this._connectedTimestamp = connectedTimestamp; }
    get player() { return this._player; }
    set player(player) { this._player = player; }
    get additionalProperties() { return this._additionalProperties; }
    set additionalProperties(additionalProperties) { this._additionalProperties = additionalProperties; }
    marshal() {
        let json = '{';
        if (this.connectedTimestamp !== undefined) {
            json += `"connected_timestamp": ${typeof this.connectedTimestamp === 'number' || typeof this.connectedTimestamp === 'boolean' ? this.connectedTimestamp : JSON.stringify(this.connectedTimestamp)},`;
        }
        if (this.player !== undefined) {
            json += `"player": ${this.player.marshal()},`;
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
        const instance = new ServerPlayerConnected({});
        if (obj["connected_timestamp"] !== undefined) {
            instance.connectedTimestamp = obj["connected_timestamp"];
        }
        if (obj["player"] !== undefined) {
            instance.player = Player.unmarshal(obj["player"]);
        }
        //Not part of core properties
        if (instance.additionalProperties === undefined) {
            instance.additionalProperties = new Map();
        }
        for (const [key, value] of Object.entries(obj).filter((([key,]) => { return !["connected_timestamp", "player"].includes(key); }))) {
            instance.additionalProperties.set(key, value);
        }
        return instance;
    }
}
exports.ServerPlayerConnected = ServerPlayerConnected;
//# sourceMappingURL=ServerPlayerConnected.js.map