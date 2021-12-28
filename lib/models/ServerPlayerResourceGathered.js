"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerPlayerResourceGathered = void 0;
class ServerPlayerResourceGathered {
    constructor(input) {
        this._gatheredTimestamp = input.gatheredTimestamp;
        this._steamId = input.steamId;
        this._itemUid = input.itemUid;
        this._itemId = input.itemId;
        this._amount = input.amount;
        this._gatheringItem = input.gatheringItem;
        this._gatheringPosition = input.gatheringPosition;
    }
    get gatheredTimestamp() { return this._gatheredTimestamp; }
    set gatheredTimestamp(gatheredTimestamp) { this._gatheredTimestamp = gatheredTimestamp; }
    get steamId() { return this._steamId; }
    set steamId(steamId) { this._steamId = steamId; }
    get itemUid() { return this._itemUid; }
    set itemUid(itemUid) { this._itemUid = itemUid; }
    get itemId() { return this._itemId; }
    set itemId(itemId) { this._itemId = itemId; }
    get amount() { return this._amount; }
    set amount(amount) { this._amount = amount; }
    get gatheringItem() { return this._gatheringItem; }
    set gatheringItem(gatheringItem) { this._gatheringItem = gatheringItem; }
    get gatheringPosition() { return this._gatheringPosition; }
    set gatheringPosition(gatheringPosition) { this._gatheringPosition = gatheringPosition; }
    get additionalProperties() { return this._additionalProperties; }
    set additionalProperties(additionalProperties) { this._additionalProperties = additionalProperties; }
    marshal() {
        let json = '{';
        if (this.gatheredTimestamp !== undefined) {
            json += `"gathered_timestamp": ${typeof this.gatheredTimestamp === 'number' || typeof this.gatheredTimestamp === 'boolean' ? this.gatheredTimestamp : JSON.stringify(this.gatheredTimestamp)},`;
        }
        if (this.steamId !== undefined) {
            json += `"steam_id": ${typeof this.steamId === 'number' || typeof this.steamId === 'boolean' ? this.steamId : JSON.stringify(this.steamId)},`;
        }
        if (this.itemUid !== undefined) {
            json += `"item_uid": ${typeof this.itemUid === 'number' || typeof this.itemUid === 'boolean' ? this.itemUid : JSON.stringify(this.itemUid)},`;
        }
        if (this.itemId !== undefined) {
            json += `"item_id": ${typeof this.itemId === 'number' || typeof this.itemId === 'boolean' ? this.itemId : JSON.stringify(this.itemId)},`;
        }
        if (this.amount !== undefined) {
            json += `"amount": ${typeof this.amount === 'number' || typeof this.amount === 'boolean' ? this.amount : JSON.stringify(this.amount)},`;
        }
        if (this.gatheringItem !== undefined) {
            json += `"gathering_item": ${this.gatheringItem.marshal()},`;
        }
        if (this.gatheringPosition !== undefined) {
            json += `"gathering_position": ${this.gatheringPosition.marshal()},`;
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
        const instance = new ServerPlayerResourceGathered({});
        if (obj["gathered_timestamp"] !== undefined) {
            instance.gatheredTimestamp = obj["gathered_timestamp"];
        }
        if (obj["steam_id"] !== undefined) {
            instance.steamId = obj["steam_id"];
        }
        if (obj["item_uid"] !== undefined) {
            instance.itemUid = obj["item_uid"];
        }
        if (obj["item_id"] !== undefined) {
            instance.itemId = obj["item_id"];
        }
        if (obj["amount"] !== undefined) {
            instance.amount = obj["amount"];
        }
        if (obj["gathering_item"] !== undefined) {
            instance.gatheringItem = ActiveItem.unmarshal(obj["gathering_item"]);
        }
        if (obj["gathering_position"] !== undefined) {
            instance.gatheringPosition = PlayerPosition.unmarshal(obj["gathering_position"]);
        }
        //Not part of core properties
        if (instance.additionalProperties === undefined) {
            instance.additionalProperties = new Map();
        }
        for (const [key, value] of Object.entries(obj).filter((([key,]) => { return !["gathered_timestamp", "steam_id", "item_uid", "item_id", "amount", "gathering_item", "gathering_position"].includes(key); }))) {
            instance.additionalProperties.set(key, value);
        }
        return instance;
    }
}
exports.ServerPlayerResourceGathered = ServerPlayerResourceGathered;
//# sourceMappingURL=ServerPlayerResourceGathered.js.map