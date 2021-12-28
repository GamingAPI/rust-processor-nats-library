export declare class ServerCommand {
    private _command?;
    private _reservedArguments?;
    private _steamId?;
    private _timestamp;
    private _additionalProperties?;
    constructor(input: {
        command?: string;
        reservedArguments?: string;
        steamId?: string;
        timestamp: string;
    });
    get command(): string | undefined;
    set command(command: string | undefined);
    get reservedArguments(): string | undefined;
    set reservedArguments(reservedArguments: string | undefined);
    get steamId(): string | undefined;
    set steamId(steamId: string | undefined);
    get timestamp(): string;
    set timestamp(timestamp: string);
    get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined;
    set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined);
    marshal(): string;
    static unmarshal(json: string | object): ServerCommand;
}
