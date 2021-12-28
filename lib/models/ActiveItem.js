"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveItem = void 0;
class ActiveItem {
    constructor(input) {
        this._uid = input.uid;
        this._itemId = input.itemId;
    }
    get uid() { return this._uid; }
    set uid(uid) { this._uid = uid; }
    get itemId() { return this._itemId; }
    set itemId(itemId) { this._itemId = itemId; }
    get additionalProperties() { return this._additionalProperties; }
    set additionalProperties(additionalProperties) { this._additionalProperties = additionalProperties; }
    marshal() {
        let json = '{';
        if (this.uid !== undefined) {
            json += `"uid": ${typeof this.uid === 'number' || typeof this.uid === 'boolean' ? this.uid : JSON.stringify(this.uid)},`;
        }
        if (this.itemId !== undefined) {
            json += `"item_id": ${typeof this.itemId === 'number' || typeof this.itemId === 'boolean' ? this.itemId : JSON.stringify(this.itemId)},`;
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
        const instance = new ActiveItem({});
        if (obj["uid"] !== undefined) {
            instance.uid = obj["uid"];
        }
        if (obj["item_id"] !== undefined) {
            instance.itemId = obj["item_id"];
        }
        //Not part of core properties
        if (instance.additionalProperties === undefined) {
            instance.additionalProperties = new Map();
        }
        for (const [key, value] of Object.entries(obj).filter((([key,]) => { return !["uid", "item_id"].includes(key); }))) {
            instance.additionalProperties.set(key, value);
        }
        return instance;
    }
}
exports.ActiveItem = ActiveItem;
//# sourceMappingURL=ActiveItem.js.map