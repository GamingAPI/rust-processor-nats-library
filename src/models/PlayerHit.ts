

class PlayerHit {
  private _steamId: string;
  private _position: PlayerPosition;
  private _activeItem: ActiveItem;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    steamId: string,
    position: PlayerPosition,
    activeItem: ActiveItem,
  }) {
    this._steamId = input.steamId;
    this._position = input.position;
    this._activeItem = input.activeItem;
  }

  get steamId(): string { return this._steamId; }
  set steamId(steamId: string) { this._steamId = steamId; }

  get position(): PlayerPosition { return this._position; }
  set position(position: PlayerPosition) { this._position = position; }

  get activeItem(): ActiveItem { return this._activeItem; }
  set activeItem(activeItem: ActiveItem) { this._activeItem = activeItem; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.steamId !== undefined) {
      json += `"steam_id": ${typeof this.steamId === 'number' || typeof this.steamId === 'boolean' ? this.steamId : JSON.stringify(this.steamId)},`; 
    }
    if(this.position !== undefined) {
      json += `"position": ${this.position.marshal()},`; 
    }
    if(this.activeItem !== undefined) {
      json += `"active_item": ${this.activeItem.marshal()},`; 
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

  public static unmarshal(json: string | object): PlayerHit {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new PlayerHit({} as any);

    if (obj["steam_id"] !== undefined) {
      instance.steamId = obj["steam_id"];
    }
    if (obj["position"] !== undefined) {
      instance.position = PlayerPosition.unmarshal(obj["position"]);
    }
    if (obj["active_item"] !== undefined) {
      instance.activeItem = ActiveItem.unmarshal(obj["active_item"]);
    }

    //Not part of core properties
  
    if (instance.additionalProperties === undefined) {instance.additionalProperties = new Map();}
    for (const [key, value] of Object.entries(obj).filter((([key,]) => {return !["steam_id","position","active_item"].includes(key);}))) {
    
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
    