export declare class ServerPlayerUnbanned {
    private _steamId;
    private _name?;
    private _timestamp;
    private _additionalProperties?;
    constructor(input: {
        steamId: string;
        name?: string;
        timestamp: string;
    });
    get steamId(): string;
    set steamId(steamId: string);
    get name(): string | undefined;
    set name(name: string | undefined);
    get timestamp(): string;
    set timestamp(timestamp: string);
    get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined;
    set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined);
    marshal(): string;
    static unmarshal(json: string | object): ServerPlayerUnbanned;
}
