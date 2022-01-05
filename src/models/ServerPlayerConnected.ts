

class ServerPlayerConnected {
  private _connectedTimestamp: string;
  private _player: Player;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    connectedTimestamp: string,
    player: Player,
  }) {
    this._connectedTimestamp = input.connectedTimestamp;
    this._player = input.player;
  }

  get connectedTimestamp(): string { return this._connectedTimestamp; }
  set connectedTimestamp(connectedTimestamp: string) { this._connectedTimestamp = connectedTimestamp; }

  get player(): Player { return this._player; }
  set player(player: Player) { this._player = player; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.connectedTimestamp !== undefined) {
      json += `"connected_timestamp": ${typeof this.connectedTimestamp === 'number' || typeof this.connectedTimestamp === 'boolean' ? this.connectedTimestamp : JSON.stringify(this.connectedTimestamp)},`; 
    }
    if(this.player !== undefined) {
      json += `"player": ${this.player.marshal()},`; 
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

  public static unmarshal(json: string | object): ServerPlayerConnected {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new ServerPlayerConnected({} as any);

    if (obj["connected_timestamp"] !== undefined) {
      instance.connectedTimestamp = obj["connected_timestamp"];
    }
    if (obj["player"] !== undefined) {
      instance.player = Player.unmarshal(obj["player"]);
    }

    //Not part of core properties
  
    if (instance.additionalProperties === undefined) {instance.additionalProperties = new Map();}
    for (const [key, value] of Object.entries(obj).filter((([key,]) => {return !["connected_timestamp","player"].includes(key);}))) {
    
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
    