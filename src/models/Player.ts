

export class Player {
  private _id: string;
  private _name: string;
  private _address: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    id: string,
    name: string,
    address: string,
  }) {
    this._id = input.id;
    this._name = input.name;
    this._address = input.address;
  }

  get id(): string { return this._id; }
  set id(id: string) { this._id = id; }

  get name(): string { return this._name; }
  set name(name: string) { this._name = name; }

  get address(): string { return this._address; }
  set address(address: string) { this._address = address; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.id !== undefined) {
      json += `"id": ${typeof this.id === 'number' || typeof this.id === 'boolean' ? this.id : JSON.stringify(this.id)},`; 
    }
    if(this.name !== undefined) {
      json += `"name": ${typeof this.name === 'number' || typeof this.name === 'boolean' ? this.name : JSON.stringify(this.name)},`; 
    }
    if(this.address !== undefined) {
      json += `"address": ${typeof this.address === 'number' || typeof this.address === 'boolean' ? this.address : JSON.stringify(this.address)},`; 
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

  public static unmarshal(json: string | object): Player {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new Player({} as any);

    if (obj["id"] !== undefined) {
      instance.id = obj["id"];
    }
    if (obj["name"] !== undefined) {
      instance.name = obj["name"];
    }
    if (obj["address"] !== undefined) {
      instance.address = obj["address"];
    }

    //Not part of core properties
  
    if (instance.additionalProperties === undefined) {instance.additionalProperties = new Map();}
    for (const [key, value] of Object.entries(obj).filter((([key,]) => {return !["id","name","address"].includes(key);}))) {
    
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
    