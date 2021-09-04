

export class ChatMessage {
  private _steamId: string;
  private _playerName: string;
  private _rawMessage?: string;
  private _fullMessage: string;
  private _isAdmin: boolean;
  private _rank?: number;
  private _title?: string;
  private _timestamp: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null | number>;

  constructor(input: {
    steamId: string,
    playerName: string,
    rawMessage?: string,
    fullMessage: string,
    isAdmin: boolean,
    rank?: number,
    title?: string,
    timestamp: string,
  }) {
    this._steamId = input.steamId;
    this._playerName = input.playerName;
    this._rawMessage = input.rawMessage;
    this._fullMessage = input.fullMessage;
    this._isAdmin = input.isAdmin;
    this._rank = input.rank;
    this._title = input.title;
    this._timestamp = input.timestamp;
  }

  get steamId(): string { return this._steamId; }
  set steamId(steamId: string) { this._steamId = steamId; }

  get playerName(): string { return this._playerName; }
  set playerName(playerName: string) { this._playerName = playerName; }

  get rawMessage(): string | undefined { return this._rawMessage; }
  set rawMessage(rawMessage: string | undefined) { this._rawMessage = rawMessage; }

  get fullMessage(): string { return this._fullMessage; }
  set fullMessage(fullMessage: string) { this._fullMessage = fullMessage; }

  get isAdmin(): boolean { return this._isAdmin; }
  set isAdmin(isAdmin: boolean) { this._isAdmin = isAdmin; }

  get rank(): number | undefined { return this._rank; }
  set rank(rank: number | undefined) { this._rank = rank; }

  get title(): string | undefined { return this._title; }
  set title(title: string | undefined) { this._title = title; }

  get timestamp(): string { return this._timestamp; }
  set timestamp(timestamp: string) { this._timestamp = timestamp; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null | number> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null | number> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.steamId !== undefined) {
      json += `"steam_id": ${typeof this.steamId === 'number' || typeof this.steamId === 'boolean' ? this.steamId : JSON.stringify(this.steamId)},`; 
    }
    if(this.playerName !== undefined) {
      json += `"player_name": ${typeof this.playerName === 'number' || typeof this.playerName === 'boolean' ? this.playerName : JSON.stringify(this.playerName)},`; 
    }
    if(this.rawMessage !== undefined) {
      json += `"raw_message": ${typeof this.rawMessage === 'number' || typeof this.rawMessage === 'boolean' ? this.rawMessage : JSON.stringify(this.rawMessage)},`; 
    }
    if(this.fullMessage !== undefined) {
      json += `"full_message": ${typeof this.fullMessage === 'number' || typeof this.fullMessage === 'boolean' ? this.fullMessage : JSON.stringify(this.fullMessage)},`; 
    }
    if(this.isAdmin !== undefined) {
      json += `"is_admin": ${typeof this.isAdmin === 'number' || typeof this.isAdmin === 'boolean' ? this.isAdmin : JSON.stringify(this.isAdmin)},`; 
    }
    if(this.rank !== undefined) {
      json += `"rank": ${typeof this.rank === 'number' || typeof this.rank === 'boolean' ? this.rank : JSON.stringify(this.rank)},`; 
    }
    if(this.title !== undefined) {
      json += `"title": ${typeof this.title === 'number' || typeof this.title === 'boolean' ? this.title : JSON.stringify(this.title)},`; 
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

  public static unmarshal(json: string | object): ChatMessage {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new ChatMessage({} as any);

    if (obj["steam_id"] !== undefined) {
      instance.steamId = obj["steam_id"];
    }
    if (obj["player_name"] !== undefined) {
      instance.playerName = obj["player_name"];
    }
    if (obj["raw_message"] !== undefined) {
      instance.rawMessage = obj["raw_message"];
    }
    if (obj["full_message"] !== undefined) {
      instance.fullMessage = obj["full_message"];
    }
    if (obj["is_admin"] !== undefined) {
      instance.isAdmin = obj["is_admin"];
    }
    if (obj["rank"] !== undefined) {
      instance.rank = obj["rank"];
    }
    if (obj["title"] !== undefined) {
      instance.title = obj["title"];
    }
    if (obj["timestamp"] !== undefined) {
      instance.timestamp = obj["timestamp"];
    }

    //Not part of core properties
  
    if (instance.additionalProperties === undefined) {instance.additionalProperties = new Map();}
    for (const [key, value] of Object.entries(obj).filter((([key,]) => {return !["steam_id","player_name","raw_message","full_message","is_admin","rank","title","timestamp"].includes(key);}))) {
    
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
    