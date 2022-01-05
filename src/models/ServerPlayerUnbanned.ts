

class ServerPlayerUnbanned {
  private _steamId: string;
  private _name?: string;
  private _timestamp: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    steamId: string,
    name?: string,
    timestamp: string,
  }) {
    this._steamId = input.steamId;
    this._name = input.name;
    this._timestamp = input.timestamp;
  }

  get steamId(): string { return this._steamId; }
  set steamId(steamId: string) { this._steamId = steamId; }

  get name(): string | undefined { return this._name; }
  set name(name: string | undefined) { this._name = name; }

  get timestamp(): string { return this._timestamp; }
  set timestamp(timestamp: string) { this._timestamp = timestamp; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.steamId !== undefined) {
      json += `"steam_id": ${typeof this.steamId === 'number' || typeof this.steamId === 'boolean' ? this.steamId : JSON.stringify(this.steamId)},`; 
    }
    if(this.name !== undefined) {
      json += `"name": ${typeof this.name === 'number' || typeof this.name === 'boolean' ? this.name : JSON.stringify(this.name)},`; 
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

  public static unmarshal(json: string | object): ServerPlayerUnbanned {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new ServerPlayerUnbanned({} as any);

    if (obj["steam_id"] !== undefined) {
      instance.steamId = obj["steam_id"];
    }
    if (obj["name"] !== undefined) {
      instance.name = obj["name"];
    }
    if (obj["timestamp"] !== undefined) {
      instance.timestamp = obj["timestamp"];
    }

    //Not part of core properties
  
    if (instance.additionalProperties === undefined) {instance.additionalProperties = new Map();}
    for (const [key, value] of Object.entries(obj).filter((([key,]) => {return !["steam_id","name","timestamp"].includes(key);}))) {
    
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
    