"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerPosition = void 0;
class PlayerPosition {
    constructor(input) {
        this._x = input.x;
        this._y = input.y;
        this._z = input.z;
    }
    get x() { return this._x; }
    set x(x) { this._x = x; }
    get y() { return this._y; }
    set y(y) { this._y = y; }
    get z() { return this._z; }
    set z(z) { this._z = z; }
    get additionalProperties() { return this._additionalProperties; }
    set additionalProperties(additionalProperties) { this._additionalProperties = additionalProperties; }
    marshal() {
        let json = '{';
        if (this.x !== undefined) {
            json += `"x": ${typeof this.x === 'number' || typeof this.x === 'boolean' ? this.x : JSON.stringify(this.x)},`;
        }
        if (this.y !== undefined) {
            json += `"y": ${typeof this.y === 'number' || typeof this.y === 'boolean' ? this.y : JSON.stringify(this.y)},`;
        }
        if (this.z !== undefined) {
            json += `"z": ${typeof this.z === 'number' || typeof this.z === 'boolean' ? this.z : JSON.stringify(this.z)},`;
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
        const instance = new PlayerPosition({});
        if (obj["x"] !== undefined) {
            instance.x = obj["x"];
        }
        if (obj["y"] !== undefined) {
            instance.y = obj["y"];
        }
        if (obj["z"] !== undefined) {
            instance.z = obj["z"];
        }
        //Not part of core properties
        if (instance.additionalProperties === undefined) {
            instance.additionalProperties = new Map();
        }
        for (const [key, value] of Object.entries(obj).filter((([key,]) => { return !["x", "y", "z"].includes(key); }))) {
            instance.additionalProperties.set(key, value);
        }
        return instance;
    }
}
exports.PlayerPosition = PlayerPosition;
//# sourceMappingURL=PlayerPosition.js.map