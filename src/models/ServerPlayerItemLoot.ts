

class ServerPlayerItemLoot {
  private _lootTimestamp: string;
  private _steamId: string;
  private _itemUid: number;
  private _itemId: number;
  private _containerUid: number;
  private _containerPrefab: string;
  private _containerPosition?: PlayerPosition;
  private _amount: number;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    lootTimestamp: string,
    steamId: string,
    itemUid: number,
    itemId: number,
    containerUid: number,
    containerPrefab: string,
    containerPosition?: PlayerPosition,
    amount: number,
  }) {
    this._lootTimestamp = input.lootTimestamp;
    this._steamId = input.steamId;
    this._itemUid = input.itemUid;
    this._itemId = input.itemId;
    this._containerUid = input.containerUid;
    this._containerPrefab = input.containerPrefab;
    this._containerPosition = input.containerPosition;
    this._amount = input.amount;
  }

  get lootTimestamp(): string { return this._lootTimestamp; }
  set lootTimestamp(lootTimestamp: string) { this._lootTimestamp = lootTimestamp; }

  get steamId(): string { return this._steamId; }
  set steamId(steamId: string) { this._steamId = steamId; }

  get itemUid(): number { return this._itemUid; }
  set itemUid(itemUid: number) { this._itemUid = itemUid; }

  get itemId(): number { return this._itemId; }
  set itemId(itemId: number) { this._itemId = itemId; }

  get containerUid(): number { return this._containerUid; }
  set containerUid(containerUid: number) { this._containerUid = containerUid; }

  get containerPrefab(): string { return this._containerPrefab; }
  set containerPrefab(containerPrefab: string) { this._containerPrefab = containerPrefab; }

  get containerPosition(): PlayerPosition | undefined { return this._containerPosition; }
  set containerPosition(containerPosition: PlayerPosition | undefined) { this._containerPosition = containerPosition; }

  get amount(): number { return this._amount; }
  set amount(amount: number) { this._amount = amount; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.lootTimestamp !== undefined) {
      json += `"loot_timestamp": ${typeof this.lootTimestamp === 'number' || typeof this.lootTimestamp === 'boolean' ? this.lootTimestamp : JSON.stringify(this.lootTimestamp)},`; 
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
    if(this.containerUid !== undefined) {
      json += `"container_uid": ${typeof this.containerUid === 'number' || typeof this.containerUid === 'boolean' ? this.containerUid : JSON.stringify(this.containerUid)},`; 
    }
    if(this.containerPrefab !== undefined) {
      json += `"container_prefab": ${typeof this.containerPrefab === 'number' || typeof this.containerPrefab === 'boolean' ? this.containerPrefab : JSON.stringify(this.containerPrefab)},`; 
    }
    if(this.containerPosition !== undefined) {
      json += `"container_position": ${this.containerPosition.marshal()},`; 
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

  public static unmarshal(json: string | object): ServerPlayerItemLoot {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new ServerPlayerItemLoot({} as any);

    if (obj["loot_timestamp"] !== undefined) {
      instance.lootTimestamp = obj["loot_timestamp"];
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
    if (obj["container_uid"] !== undefined) {
      instance.containerUid = obj["container_uid"];
    }
    if (obj["container_prefab"] !== undefined) {
      instance.containerPrefab = obj["container_prefab"];
    }
    if (obj["container_position"] !== undefined) {
      instance.containerPosition = PlayerPosition.unmarshal(obj["container_position"]);
    }
    if (obj["amount"] !== undefined) {
      instance.amount = obj["amount"];
    }

    //Not part of core properties
  
    if (instance.additionalProperties === undefined) {instance.additionalProperties = new Map();}
    for (const [key, value] of Object.entries(obj).filter((([key,]) => {return !["loot_timestamp","steam_id","item_uid","item_id","container_uid","container_prefab","container_position","amount"].includes(key);}))) {
    
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
    