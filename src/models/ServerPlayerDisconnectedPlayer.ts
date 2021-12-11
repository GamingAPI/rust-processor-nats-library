

export class ServerPlayerDisconnectedPlayer {
  private _id: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    id: string,
  }) {
    this._id = input.id;
  }

  get id(): string { return this._id; }
  set id(id: string) { this._id = id; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.id !== undefined) {
      json += `"id": ${typeof this.id === 'number' || typeof this.id === 'boolean' ? this.id : JSON.stringify(this.id)},`; 
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

  public static unmarshal(json: string | object): ServerPlayerDisconnectedPlayer {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new ServerPlayerDisconnectedPlayer({} as any);

    if (obj["id"] !== undefined) {
      instance.id = obj["id"];
    }

    //Not part of core properties
  
    if (instance.additionalProperties === undefined) {instance.additionalProperties = new Map();}
    for (const [key, value] of Object.entries(obj).filter((([key,]) => {return !["id"].includes(key);}))) {
    
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
    