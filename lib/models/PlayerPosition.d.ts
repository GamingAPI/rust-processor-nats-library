export declare class PlayerPosition {
    private _x;
    private _y;
    private _z;
    private _additionalProperties?;
    constructor(input: {
        x: number;
        y: number;
        z: number;
    });
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get z(): number;
    set z(z: number);
    get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined;
    set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined);
    marshal(): string;
    static unmarshal(json: string | object): PlayerPosition;
}
