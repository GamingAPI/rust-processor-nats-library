export declare class ChatMessage {
    private _steamId;
    private _playerName;
    private _rawMessage?;
    private _fullMessage;
    private _isAdmin;
    private _rank?;
    private _title?;
    private _timestamp;
    private _additionalProperties?;
    constructor(input: {
        steamId: string;
        playerName: string;
        rawMessage?: string;
        fullMessage: string;
        isAdmin: boolean;
        rank?: number;
        title?: string;
        timestamp: string;
    });
    get steamId(): string;
    set steamId(steamId: string);
    get playerName(): string;
    set playerName(playerName: string);
    get rawMessage(): string | undefined;
    set rawMessage(rawMessage: string | undefined);
    get fullMessage(): string;
    set fullMessage(fullMessage: string);
    get isAdmin(): boolean;
    set isAdmin(isAdmin: boolean);
    get rank(): number | undefined;
    set rank(rank: number | undefined);
    get title(): string | undefined;
    set title(title: string | undefined);
    get timestamp(): string;
    set timestamp(timestamp: string);
    get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined;
    set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined);
    marshal(): string;
    static unmarshal(json: string | object): ChatMessage;
}