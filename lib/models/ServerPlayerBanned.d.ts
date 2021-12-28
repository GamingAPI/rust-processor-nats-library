export declare class ServerPlayerBanned {
    private _playerName;
    private _steamId;
    private _reason?;
    private _duration?;
    private _timestamp;
    private _additionalProperties?;
    constructor(input: {
        playerName: string;
        steamId: string;
        reason?: string;
        duration?: string;
        timestamp: string;
    });
    get playerName(): string;
    set playerName(playerName: string);
    get steamId(): string;
    set steamId(steamId: string);
    get reason(): string | undefined;
    set reason(reason: string | undefined);
    get duration(): string | undefined;
    set duration(duration: string | undefined);
    get timestamp(): string;
    set timestamp(timestamp: string);
    get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined;
    set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined);
    marshal(): string;
    static unmarshal(json: string | object): ServerPlayerBanned;
}
