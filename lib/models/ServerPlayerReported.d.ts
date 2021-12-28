export declare class ServerPlayerReported {
    private _reporterSteamId;
    private _reportedTargetSteamId;
    private _subject?;
    private _message?;
    private _reportedType?;
    private _timestamp;
    private _additionalProperties?;
    constructor(input: {
        reporterSteamId: string;
        reportedTargetSteamId: string;
        subject?: string;
        message?: string;
        reportedType?: string;
        timestamp: string;
    });
    get reporterSteamId(): string;
    set reporterSteamId(reporterSteamId: string);
    get reportedTargetSteamId(): string;
    set reportedTargetSteamId(reportedTargetSteamId: string);
    get subject(): string | undefined;
    set subject(subject: string | undefined);
    get message(): string | undefined;
    set message(message: string | undefined);
    get reportedType(): string | undefined;
    set reportedType(reportedType: string | undefined);
    get timestamp(): string;
    set timestamp(timestamp: string);
    get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined;
    set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined);
    marshal(): string;
    static unmarshal(json: string | object): ServerPlayerReported;
}
