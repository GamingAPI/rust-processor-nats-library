export declare class Player {
    private _id;
    private _name;
    private _address;
    private _additionalProperties?;
    constructor(input: {
        id: string;
        name: string;
        address: string;
    });
    get id(): string;
    set id(id: string);
    get name(): string;
    set name(name: string);
    get address(): string;
    set address(address: string);
    get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined;
    set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined);
    marshal(): string;
    static unmarshal(json: string | object): Player;
}
