"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerPlayerBanned = void 0;
class ServerPlayerBanned {
    constructor(input) {
        this._playerName = input.playerName;
        this._steamId = input.steamId;
        this._reason = input.reason;
        this._duration = input.duration;
        this._timestamp = input.timestamp;
    }
    get playerName() { return this._playerName; }
    set playerName(playerName) { this._playerName = playerName; }
    get steamId() { return this._steamId; }
    set steamId(steamId) { this._steamId = steamId; }
    get reason() { return this._reason; }
    set reason(reason) { this._reason = reason; }
    get duration() { return this._duration; }
    set duration(duration) { this._duration = duration; }
    get timestamp() { return this._timestamp; }
    set timestamp(timestamp) { this._timestamp = timestamp; }
    get additionalProperties() { return this._additionalProperties; }
    set additionalProperties(additionalProperties) { this._additionalProperties = additionalProperties; }
    marshal() {
        let json = '{';
        if (this.playerName !== undefined) {
            json += `"player_name": ${typeof this.playerName === 'number' || typeof this.playerName === 'boolean' ? this.playerName : JSON.stringify(this.playerName)},`;
        }
        if (this.steamId !== undefined) {
            json += `"steam_id": ${typeof this.steamId === 'number' || typeof this.steamId === 'boolean' ? this.steamId : JSON.stringify(this.steamId)},`;
        }
        if (this.reason !== undefined) {
            json += `"reason": ${typeof this.reason === 'number' || typeof this.reason === 'boolean' ? this.reason : JSON.stringify(this.reason)},`;
        }
        if (this.duration !== undefined) {
            json += `"duration": ${typeof this.duration === 'number' || typeof this.duration === 'boolean' ? this.duration : JSON.stringify(this.duration)},`;
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
        const instance = new ServerPlayerBanned({});
        if (obj["player_name"] !== undefined) {
            instance.playerName = obj["player_name"];
        }
        if (obj["steam_id"] !== undefined) {
            instance.steamId = obj["steam_id"];
        }
        if (obj["reason"] !== undefined) {
            instance.reason = obj["reason"];
        }
        if (obj["duration"] !== undefined) {
            instance.duration = obj["duration"];
        }
        if (obj["timestamp"] !== undefined) {
            instance.timestamp = obj["timestamp"];
        }
        //Not part of core properties
        if (instance.additionalProperties === undefined) {
            instance.additionalProperties = new Map();
        }
        for (const [key, value] of Object.entries(obj).filter((([key,]) => { return !["player_name", "steam_id", "reason", "duration", "timestamp"].includes(key); }))) {
            instance.additionalProperties.set(key, value);
        }
        return instance;
    }
}
exports.ServerPlayerBanned = ServerPlayerBanned;
//# sourceMappingURL=ServerPlayerBanned.js.map