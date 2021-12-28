"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerPlayerCombatPlayerhit = void 0;
class ServerPlayerCombatPlayerhit {
    constructor(input) {
        this._hitTimestamp = input.hitTimestamp;
        this._playerHit = input.playerHit;
    }
    get hitTimestamp() { return this._hitTimestamp; }
    set hitTimestamp(hitTimestamp) { this._hitTimestamp = hitTimestamp; }
    get playerHit() { return this._playerHit; }
    set playerHit(playerHit) { this._playerHit = playerHit; }
    get additionalProperties() { return this._additionalProperties; }
    set additionalProperties(additionalProperties) { this._additionalProperties = additionalProperties; }
    marshal() {
        let json = '{';
        if (this.hitTimestamp !== undefined) {
            json += `"hit_timestamp": ${typeof this.hitTimestamp === 'number' || typeof this.hitTimestamp === 'boolean' ? this.hitTimestamp : JSON.stringify(this.hitTimestamp)},`;
        }
        if (this.playerHit !== undefined) {
            json += `"player_hit": ${this.playerHit.marshal()},`;
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
        const instance = new ServerPlayerCombatPlayerhit({});
        if (obj["hit_timestamp"] !== undefined) {
            instance.hitTimestamp = obj["hit_timestamp"];
        }
        if (obj["player_hit"] !== undefined) {
            instance.playerHit = PlayerOnPlayerHit.unmarshal(obj["player_hit"]);
        }
        //Not part of core properties
        if (instance.additionalProperties === undefined) {
            instance.additionalProperties = new Map();
        }
        for (const [key, value] of Object.entries(obj).filter((([key,]) => { return !["hit_timestamp", "player_hit"].includes(key); }))) {
            instance.additionalProperties.set(key, value);
        }
        return instance;
    }
}
exports.ServerPlayerCombatPlayerhit = ServerPlayerCombatPlayerhit;
//# sourceMappingURL=ServerPlayerCombatPlayerhit.js.map