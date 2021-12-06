

export class ActiveItem {
  private _uid?: number;
  private _itemId?: number;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    uid?: number,
    itemId?: number,
  }) {
    this._uid = input.uid;
    this._itemId = input.itemId;
  }

  get uid(): number | undefined { return this._uid; }
  set uid(uid: number | undefined) { this._uid = uid; }

  get itemId(): number | undefined { return this._itemId; }
  set itemId(itemId: number | undefined) { this._itemId = itemId; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.uid !== undefined) {
      json += `"uid": ${typeof this.uid === 'number' || typeof this.uid === 'boolean' ? this.uid : JSON.stringify(this.uid)},`; 
    }
    if(this.itemId !== undefined) {
      json += `"item_id": ${typeof this.itemId === 'number' || typeof this.itemId === 'boolean' ? this.itemId : JSON.stringify(this.itemId)},`; 
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

  public static unmarshal(json: string | object): ActiveItem {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new ActiveItem({} as any);

    if (obj["uid"] !== undefined) {
      instance.uid = obj["uid"];
    }
    if (obj["item_id"] !== undefined) {
      instance.itemId = obj["item_id"];
    }

    //Not part of core properties
  
    if (instance.additionalProperties === undefined) {instance.additionalProperties = new Map();}
    for (const [key, value] of Object.entries(obj).filter((([key,]) => {return !["uid","item_id"].includes(key);}))) {
    
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
    