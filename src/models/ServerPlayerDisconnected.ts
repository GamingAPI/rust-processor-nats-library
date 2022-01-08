import ServerPlayerDisconnectedPlayer from './ServerPlayerDisconnectedPlayer';

class ServerPlayerDisconnected {
  private _disconnectedTimestamp: string;
  private _player: ServerPlayerDisconnectedPlayer;
  private _reason?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    disconnectedTimestamp: string,
    player: ServerPlayerDisconnectedPlayer,
    reason?: string,
  }) {
    this._disconnectedTimestamp = input.disconnectedTimestamp;
    this._player = input.player;
    this._reason = input.reason;
  }

  get disconnectedTimestamp(): string { return this._disconnectedTimestamp; }
  set disconnectedTimestamp(disconnectedTimestamp: string) { this._disconnectedTimestamp = disconnectedTimestamp; }

  get player(): ServerPlayerDisconnectedPlayer { return this._player; }
  set player(player: ServerPlayerDisconnectedPlayer) { this._player = player; }

  get reason(): string | undefined { return this._reason; }
  set reason(reason: string | undefined) { this._reason = reason; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.disconnectedTimestamp !== undefined) {
      json += `"disconnected_timestamp": ${typeof this.disconnectedTimestamp === 'number' || typeof this.disconnectedTimestamp === 'boolean' ? this.disconnectedTimestamp : JSON.stringify(this.disconnectedTimestamp)},`; 
    }
    if(this.player !== undefined) {
      json += `"player": ${this.player.marshal()},`; 
    }
    if(this.reason !== undefined) {
      json += `"reason": ${typeof this.reason === 'number' || typeof this.reason === 'boolean' ? this.reason : JSON.stringify(this.reason)},`; 
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

  public static unmarshal(json: string | object): ServerPlayerDisconnected {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new ServerPlayerDisconnected({} as any);

    if (obj["disconnected_timestamp"] !== undefined) {
      instance.disconnectedTimestamp = obj["disconnected_timestamp"];
    }
    if (obj["player"] !== undefined) {
      instance.player = ServerPlayerDisconnectedPlayer.unmarshal(obj["player"]);
    }
    if (obj["reason"] !== undefined) {
      instance.reason = obj["reason"];
    }

    //Not part of core properties
  
    if (instance.additionalProperties === undefined) {instance.additionalProperties = new Map();}
    for (const [key, value] of Object.entries(obj).filter((([key,]) => {return !["disconnected_timestamp","player","reason"].includes(key);}))) {
    
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
export default ServerPlayerDisconnected;
