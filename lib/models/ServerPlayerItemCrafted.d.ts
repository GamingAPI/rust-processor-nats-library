export declare class ServerPlayerItemCrafted {
    private _craftTimestamp;
    private _steamId;
    private _itemUid;
    private _itemId;
    private _amount;
    private _additionalProperties?;
    constructor(input: {
        craftTimestamp: string;
        steamId: string;
        itemUid: number;
        itemId: number;
        amount: number;
    });
    get craftTimestamp(): string;
    set craftTimestamp(craftTimestamp: string);
    get steamId(): string;
    set steamId(steamId: string);
    get itemUid(): number;
    set itemUid(itemUid: number);
    get itemId(): number;
    set itemId(itemId: number);
    get amount(): number;
    set amount(amount: number);
    get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined;
    set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined);
    marshal(): string;
    static unmarshal(json: string | object): ServerPlayerItemCrafted;
}
