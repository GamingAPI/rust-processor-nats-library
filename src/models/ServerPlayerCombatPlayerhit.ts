

class ServerPlayerCombatPlayerhit {
  private _hitTimestamp: string;
  private _playerHit: PlayerOnPlayerHit;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    hitTimestamp: string,
    playerHit: PlayerOnPlayerHit,
  }) {
    this._hitTimestamp = input.hitTimestamp;
    this._playerHit = input.playerHit;
  }

  get hitTimestamp(): string { return this._hitTimestamp; }
  set hitTimestamp(hitTimestamp: string) { this._hitTimestamp = hitTimestamp; }

  get playerHit(): PlayerOnPlayerHit { return this._playerHit; }
  set playerHit(playerHit: PlayerOnPlayerHit) { this._playerHit = playerHit; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.hitTimestamp !== undefined) {
      json += `"hit_timestamp": ${typeof this.hitTimestamp === 'number' || typeof this.hitTimestamp === 'boolean' ? this.hitTimestamp : JSON.stringify(this.hitTimestamp)},`; 
    }
    if(this.playerHit !== undefined) {
      json += `"player_hit": ${this.playerHit.marshal()},`; 
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

  public static unmarshal(json: string | object): ServerPlayerCombatPlayerhit {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new ServerPlayerCombatPlayerhit({} as any);

    if (obj["hit_timestamp"] !== undefined) {
      instance.hitTimestamp = obj["hit_timestamp"];
    }
    if (obj["player_hit"] !== undefined) {
      instance.playerHit = PlayerOnPlayerHit.unmarshal(obj["player_hit"]);
    }

    //Not part of core properties
  
    if (instance.additionalProperties === undefined) {instance.additionalProperties = new Map();}
    for (const [key, value] of Object.entries(obj).filter((([key,]) => {return !["hit_timestamp","player_hit"].includes(key);}))) {
    
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
    