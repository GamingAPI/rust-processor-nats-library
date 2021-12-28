export declare class ActiveItem {
    private _uid?;
    private _itemId?;
    private _additionalProperties?;
    constructor(input: {
        uid?: number;
        itemId?: number;
    });
    get uid(): number | undefined;
    set uid(uid: number | undefined);
    get itemId(): number | undefined;
    set itemId(itemId: number | undefined);
    get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined;
    set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined);
    marshal(): string;
    static unmarshal(json: string | object): ActiveItem;
}
