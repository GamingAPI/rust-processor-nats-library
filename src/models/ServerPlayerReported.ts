

export class ServerPlayerReported {
  private _reporterSteamId: string;
  private _reportedTargetSteamId: string;
  private _subject?: string;
  private _message?: string;
  private _reportedType?: string;
  private _timestamp: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null | number>;

  constructor(input: {
    reporterSteamId: string,
    reportedTargetSteamId: string,
    subject?: string,
    message?: string,
    reportedType?: string,
    timestamp: string,
  }) {
    this._reporterSteamId = input.reporterSteamId;
    this._reportedTargetSteamId = input.reportedTargetSteamId;
    this._subject = input.subject;
    this._message = input.message;
    this._reportedType = input.reportedType;
    this._timestamp = input.timestamp;
  }

  get reporterSteamId(): string { return this._reporterSteamId; }
  set reporterSteamId(reporterSteamId: string) { this._reporterSteamId = reporterSteamId; }

  get reportedTargetSteamId(): string { return this._reportedTargetSteamId; }
  set reportedTargetSteamId(reportedTargetSteamId: string) { this._reportedTargetSteamId = reportedTargetSteamId; }

  get subject(): string | undefined { return this._subject; }
  set subject(subject: string | undefined) { this._subject = subject; }

  get message(): string | undefined { return this._message; }
  set message(message: string | undefined) { this._message = message; }

  get reportedType(): string | undefined { return this._reportedType; }
  set reportedType(reportedType: string | undefined) { this._reportedType = reportedType; }

  get timestamp(): string { return this._timestamp; }
  set timestamp(timestamp: string) { this._timestamp = timestamp; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null | number> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null | number> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.reporterSteamId !== undefined) {
      json += `"reporter_steam_id": ${typeof this.reporterSteamId === 'number' || typeof this.reporterSteamId === 'boolean' ? this.reporterSteamId : JSON.stringify(this.reporterSteamId)},`; 
    }
    if(this.reportedTargetSteamId !== undefined) {
      json += `"reported_target_steam_id": ${typeof this.reportedTargetSteamId === 'number' || typeof this.reportedTargetSteamId === 'boolean' ? this.reportedTargetSteamId : JSON.stringify(this.reportedTargetSteamId)},`; 
    }
    if(this.subject !== undefined) {
      json += `"subject": ${typeof this.subject === 'number' || typeof this.subject === 'boolean' ? this.subject : JSON.stringify(this.subject)},`; 
    }
    if(this.message !== undefined) {
      json += `"message": ${typeof this.message === 'number' || typeof this.message === 'boolean' ? this.message : JSON.stringify(this.message)},`; 
    }
    if(this.reportedType !== undefined) {
      json += `"reportedType": ${typeof this.reportedType === 'number' || typeof this.reportedType === 'boolean' ? this.reportedType : JSON.stringify(this.reportedType)},`; 
    }
    if(this.timestamp !== undefined) {
      json += `"timestamp": ${typeof this.timestamp === 'number' || typeof this.timestamp === 'boolean' ? this.timestamp : JSON.stringify(this.timestamp)},`; 
    }
  
    if(this.additionalProperties !== undefined) { 
      for (const [key, value] of this.additionalProperties.entries()) {
        //Only render additionalProperties which are not already a property
        if(Object.keys(this).includes(String(key))) continue;
        json += `"${key}": ${typeof value === 'number' || typeof value === 'boolean' ? value : JSON.stringify(value)},`;
      }
    }

    //Remove potential last comma 
    return `${json.charAt(json.length-1) === ',' ? json.slice(0, json.length-1) : json}}`;
  }

  public static unmarshal(json: string | object): ServerPlayerReported {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new ServerPlayerReported({} as any);

    if (obj["reporter_steam_id"] !== undefined) {
      instance.reporterSteamId = obj["reporter_steam_id"];
    }
    if (obj["reported_target_steam_id"] !== undefined) {
      instance.reportedTargetSteamId = obj["reported_target_steam_id"];
    }
    if (obj["subject"] !== undefined) {
      instance.subject = obj["subject"];
    }
    if (obj["message"] !== undefined) {
      instance.message = obj["message"];
    }
    if (obj["reportedType"] !== undefined) {
      instance.reportedType = obj["reportedType"];
    }
    if (obj["timestamp"] !== undefined) {
      instance.timestamp = obj["timestamp"];
    }

    //Not part of core properties
  
    if (instance.additionalProperties === undefined) {instance.additionalProperties = new Map();}
    for (const [key, value] of Object.entries(obj).filter((([key,]) => {return !["reporter_steam_id","reported_target_steam_id","subject","message","reportedType","timestamp"].includes(key);}))) {
    
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
    