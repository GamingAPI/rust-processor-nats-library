export declare class ServerPlayerDisconnectedPlayer {
    private _id;
    private _additionalProperties?;
    constructor(input: {
        id: string;
    });
    get id(): string;
    set id(id: string);
    get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined;
    set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined);
    marshal(): string;
    static unmarshal(json: string | object): ServerPlayerDisconnectedPlayer;
}
