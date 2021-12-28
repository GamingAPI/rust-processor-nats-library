export declare class ServerPlayerItemPickup {
    private _pickupTimestamp;
    private _steamId;
    private _itemUid;
    private _itemId;
    private _amount?;
    private _additionalProperties?;
    constructor(input: {
        pickupTimestamp: string;
        steamId: string;
        itemUid: number;
        itemId: number;
        amount?: number;
    });
    get pickupTimestamp(): string;
    set pickupTimestamp(pickupTimestamp: string);
    get steamId(): string;
    set steamId(steamId: string);
    get itemUid(): number;
    set itemUid(itemUid: number);
    get itemId(): number;
    set itemId(itemId: number);
    get amount(): number | undefined;
    set amount(amount: number | undefined);
    get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined;
    set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined);
    marshal(): string;
    static unmarshal(json: string | object): ServerPlayerItemPickup;
}
