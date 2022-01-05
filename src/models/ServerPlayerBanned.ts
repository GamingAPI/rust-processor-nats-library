

class ServerPlayerBanned {
  private _playerName: string;
  private _steamId: string;
  private _reason?: string;
  private _duration?: string;
  private _timestamp: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    playerName: string,
    steamId: string,
    reason?: string,
    duration?: string,
    timestamp: string,
  }) {
    this._playerName = input.playerName;
    this._steamId = input.steamId;
    this._reason = input.reason;
    this._duration = input.duration;
    this._timestamp = input.timestamp;
  }

  get playerName(): string { return this._playerName; }
  set playerName(playerName: string) { this._playerName = playerName; }

  get steamId(): string { return this._steamId; }
  set steamId(steamId: string) { this._steamId = steamId; }

  get reason(): string | undefined { return this._reason; }
  set reason(reason: string | undefined) { this._reason = reason; }

  get duration(): string | undefined { return this._duration; }
  set duration(duration: string | undefined) { this._duration = duration; }

  get timestamp(): string { return this._timestamp; }
  set timestamp(timestamp: string) { this._timestamp = timestamp; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.playerName !== undefined) {
      json += `"player_name": ${typeof this.playerName === 'number' || typeof this.playerName === 'boolean' ? this.playerName : JSON.stringify(this.playerName)},`; 
    }
    if(this.steamId !== undefined) {
      json += `"steam_id": ${typeof this.steamId === 'number' || typeof this.steamId === 'boolean' ? this.steamId : JSON.stringify(this.steamId)},`; 
    }
    if(this.reason !== undefined) {
      json += `"reason": ${typeof this.reason === 'number' || typeof this.reason === 'boolean' ? this.reason : JSON.stringify(this.reason)},`; 
    }
    if(this.duration !== undefined) {
      json += `"duration": ${typeof this.duration === 'number' || typeof this.duration === 'boolean' ? this.duration : JSON.stringify(this.duration)},`; 
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

  public static unmarshal(json: string | object): ServerPlayerBanned {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new ServerPlayerBanned({} as any);

    if (obj["player_name"] !== undefined) {
      instance.playerName = obj["player_name"];
    }
    if (obj["steam_id"] !== undefined) {
      instance.steamId = obj["steam_id"];
    }
    if (obj["reason"] !== undefined) {
      instance.reason = obj["reason"];
    }
    if (obj["duration"] !== undefined) {
      instance.duration = obj["duration"];
    }
    if (obj["timestamp"] !== undefined) {
      instance.timestamp = obj["timestamp"];
    }

    //Not part of core properties
  
    if (instance.additionalProperties === undefined) {instance.additionalProperties = new Map();}
    for (const [key, value] of Object.entries(obj).filter((([key,]) => {return !["player_name","steam_id","reason","duration","timestamp"].includes(key);}))) {
    
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
    