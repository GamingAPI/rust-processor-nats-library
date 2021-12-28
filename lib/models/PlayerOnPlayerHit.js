"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerOnPlayerHit = void 0;
class PlayerOnPlayerHit {
    constructor(input) {
        this._hitAreaId = input.hitAreaId;
        this._hitDistance = input.hitDistance;
        this._hitDamage = input.hitDamage;
        this._isKill = input.isKill;
        this._victim = input.victim;
        this._attacker = input.attacker;
    }
    get hitAreaId() { return this._hitAreaId; }
    set hitAreaId(hitAreaId) { this._hitAreaId = hitAreaId; }
    get hitDistance() { return this._hitDistance; }
    set hitDistance(hitDistance) { this._hitDistance = hitDistance; }
    get hitDamage() { return this._hitDamage; }
    set hitDamage(hitDamage) { this._hitDamage = hitDamage; }
    get isKill() { return this._isKill; }
    set isKill(isKill) { this._isKill = isKill; }
    get victim() { return this._victim; }
    set victim(victim) { this._victim = victim; }
    get attacker() { return this._attacker; }
    set attacker(attacker) { this._attacker = attacker; }
    get additionalProperties() { return this._additionalProperties; }
    set additionalProperties(additionalProperties) { this._additionalProperties = additionalProperties; }
    marshal() {
        let json = '{';
        if (this.hitAreaId !== undefined) {
            json += `"hit_area_id": ${typeof this.hitAreaId === 'number' || typeof this.hitAreaId === 'boolean' ? this.hitAreaId : JSON.stringify(this.hitAreaId)},`;
        }
        if (this.hitDistance !== undefined) {
            json += `"hit_distance": ${typeof this.hitDistance === 'number' || typeof this.hitDistance === 'boolean' ? this.hitDistance : JSON.stringify(this.hitDistance)},`;
        }
        if (this.hitDamage !== undefined) {
            json += `"hit_damage": ${typeof this.hitDamage === 'number' || typeof this.hitDamage === 'boolean' ? this.hitDamage : JSON.stringify(this.hitDamage)},`;
        }
        if (this.isKill !== undefined) {
            json += `"isKill": ${typeof this.isKill === 'number' || typeof this.isKill === 'boolean' ? this.isKill : JSON.stringify(this.isKill)},`;
        }
        if (this.victim !== undefined) {
            json += `"victim": ${this.victim.marshal()},`;
        }
        if (this.attacker !== undefined) {
            json += `"attacker": ${typeof this.attacker === 'number' || typeof this.attacker === 'boolean' ? this.attacker : JSON.stringify(this.attacker)},`;
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
        const instance = new PlayerOnPlayerHit({});
        if (obj["hit_area_id"] !== undefined) {
            instance.hitAreaId = obj["hit_area_id"];
        }
        if (obj["hit_distance"] !== undefined) {
            instance.hitDistance = obj["hit_distance"];
        }
        if (obj["hit_damage"] !== undefined) {
            instance.hitDamage = obj["hit_damage"];
        }
        if (obj["isKill"] !== undefined) {
            instance.isKill = obj["isKill"];
        }
        if (obj["victim"] !== undefined) {
            instance.victim = PlayerHit.unmarshal(obj["victim"]);
        }
        if (obj["attacker"] !== undefined) {
            instance.attacker = obj["attacker"];
        }
        //Not part of core properties
        if (instance.additionalProperties === undefined) {
            instance.additionalProperties = new Map();
        }
        for (const [key, value] of Object.entries(obj).filter((([key,]) => { return !["hit_area_id", "hit_distance", "hit_damage", "isKill", "victim", "attacker"].includes(key); }))) {
            instance.additionalProperties.set(key, value);
        }
        return instance;
    }
}
exports.PlayerOnPlayerHit = PlayerOnPlayerHit;
//# sourceMappingURL=PlayerOnPlayerHit.js.map