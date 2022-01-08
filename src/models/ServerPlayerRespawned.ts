import PlayerPosition from './PlayerPosition';

class ServerPlayerRespawned {
  private _steamId: string;
  private _respawnTimestamp: string;
  private _respawnPosition: PlayerPosition;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    steamId: string,
    respawnTimestamp: string,
    respawnPosition: PlayerPosition,
  }) {
    this._steamId = input.steamId;
    this._respawnTimestamp = input.respawnTimestamp;
    this._respawnPosition = input.respawnPosition;
  }

  get steamId(): string { return this._steamId; }
  set steamId(steamId: string) { this._steamId = steamId; }

  get respawnTimestamp(): string { return this._respawnTimestamp; }
  set respawnTimestamp(respawnTimestamp: string) { this._respawnTimestamp = respawnTimestamp; }

  get respawnPosition(): PlayerPosition { return this._respawnPosition; }
  set respawnPosition(respawnPosition: PlayerPosition) { this._respawnPosition = respawnPosition; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.steamId !== undefined) {
      json += `"steam_id": ${typeof this.steamId === 'number' || typeof this.steamId === 'boolean' ? this.steamId : JSON.stringify(this.steamId)},`; 
    }
    if(this.respawnTimestamp !== undefined) {
      json += `"respawn_timestamp": ${typeof this.respawnTimestamp === 'number' || typeof this.respawnTimestamp === 'boolean' ? this.respawnTimestamp : JSON.stringify(this.respawnTimestamp)},`; 
    }
    if(this.respawnPosition !== undefined) {
      json += `"respawn_position": ${this.respawnPosition.marshal()},`; 
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

  public static unmarshal(json: string | object): ServerPlayerRespawned {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new ServerPlayerRespawned({} as any);

    if (obj["steam_id"] !== undefined) {
      instance.steamId = obj["steam_id"];
    }
    if (obj["respawn_timestamp"] !== undefined) {
      instance.respawnTimestamp = obj["respawn_timestamp"];
    }
    if (obj["respawn_position"] !== undefined) {
      instance.respawnPosition = PlayerPosition.unmarshal(obj["respawn_position"]);
    }

    //Not part of core properties
  
    if (instance.additionalProperties === undefined) {instance.additionalProperties = new Map();}
    for (const [key, value] of Object.entries(obj).filter((([key,]) => {return !["steam_id","respawn_timestamp","respawn_position"].includes(key);}))) {
    
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
export default ServerPlayerRespawned;
