

export class ServerPlayerItemCrafted {
  private _craftTimestamp: string;
  private _steamId: string;
  private _itemUid: number;
  private _itemId: number;
  private _amount: number;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    craftTimestamp: string,
    steamId: string,
    itemUid: number,
    itemId: number,
    amount: number,
  }) {
    this._craftTimestamp = input.craftTimestamp;
    this._steamId = input.steamId;
    this._itemUid = input.itemUid;
    this._itemId = input.itemId;
    this._amount = input.amount;
  }

  get craftTimestamp(): string { return this._craftTimestamp; }
  set craftTimestamp(craftTimestamp: string) { this._craftTimestamp = craftTimestamp; }

  get steamId(): string { return this._steamId; }
  set steamId(steamId: string) { this._steamId = steamId; }

  get itemUid(): number { return this._itemUid; }
  set itemUid(itemUid: number) { this._itemUid = itemUid; }

  get itemId(): number { return this._itemId; }
  set itemId(itemId: number) { this._itemId = itemId; }

  get amount(): number { return this._amount; }
  set amount(amount: number) { this._amount = amount; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.craftTimestamp !== undefined) {
      json += `"craft_timestamp": ${typeof this.craftTimestamp === 'number' || typeof this.craftTimestamp === 'boolean' ? this.craftTimestamp : JSON.stringify(this.craftTimestamp)},`; 
    }
    if(this.steamId !== undefined) {
      json += `"steam_id": ${typeof this.steamId === 'number' || typeof this.steamId === 'boolean' ? this.steamId : JSON.stringify(this.steamId)},`; 
    }
    if(this.itemUid !== undefined) {
      json += `"item_uid": ${typeof this.itemUid === 'number' || typeof this.itemUid === 'boolean' ? this.itemUid : JSON.stringify(this.itemUid)},`; 
    }
    if(this.itemId !== undefined) {
      json += `"item_id": ${typeof this.itemId === 'number' || typeof this.itemId === 'boolean' ? this.itemId : JSON.stringify(this.itemId)},`; 
    }
    if(this.amount !== undefined) {
      json += `"amount": ${typeof this.amount === 'number' || typeof this.amount === 'boolean' ? this.amount : JSON.stringify(this.amount)},`; 
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

  public static unmarshal(json: string | object): ServerPlayerItemCrafted {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new ServerPlayerItemCrafted({} as any);

    if (obj["craft_timestamp"] !== undefined) {
      instance.craftTimestamp = obj["craft_timestamp"];
    }
    if (obj["steam_id"] !== undefined) {
      instance.steamId = obj["steam_id"];
    }
    if (obj["item_uid"] !== undefined) {
      instance.itemUid = obj["item_uid"];
    }
    if (obj["item_id"] !== undefined) {
      instance.itemId = obj["item_id"];
    }
    if (obj["amount"] !== undefined) {
      instance.amount = obj["amount"];
    }

    //Not part of core properties
  
    if (instance.additionalProperties === undefined) {instance.additionalProperties = new Map();}
    for (const [key, value] of Object.entries(obj).filter((([key,]) => {return !["craft_timestamp","steam_id","item_uid","item_id","amount"].includes(key);}))) {
    
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
    