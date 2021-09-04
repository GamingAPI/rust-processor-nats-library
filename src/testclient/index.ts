import {
  fromSeed
} from 'ts-nkeys';
import {
  ErrorCode,
  NatsTypescriptTemplateError
} from '..//NatsTypescriptTemplateError';
import {
  Client,
  NatsConnectionOptions,
  connect,
  Payload,
  NatsError,
  Subscription,
  ServersChangedEvent,
  SubEvent,
  ServerInfo,
  SubscriptionOptions
} from 'ts-nats';
import * as rustServersServerIdEventsWipedChannel from "./testchannels/RustServersServerIdEventsWiped";
import * as rustServersServerIdEventsStartedChannel from "./testchannels/RustServersServerIdEventsStarted";
import * as rustServersServerIdEventsStoppingChannel from "./testchannels/RustServersServerIdEventsStopping";
import * as rustServersServerIdPlayersSteamIdEventsConnectedChannel from "./testchannels/RustServersServerIdPlayersSteamIdEventsConnected";
import * as rustServersServerIdPlayersSteamIdEventsDisconnectedChannel from "./testchannels/RustServersServerIdPlayersSteamIdEventsDisconnected";
import * as rustServersServerIdPlayersSteamIdEventsResourcesGatheredChannel from "./testchannels/RustServersServerIdPlayersSteamIdEventsResourcesGathered";
import * as rustServersServerIdPlayersSteamIdEventsRespawnedChannel from "./testchannels/RustServersServerIdPlayersSteamIdEventsRespawned";
import * as rustServersServerIdPlayersSteamIdEventsCombatPlayerhitChannel from "./testchannels/RustServersServerIdPlayersSteamIdEventsCombatPlayerhit";
import * as rustServersServerIdPlayersSteamIdEventsItemsItemIdPickupChannel from "./testchannels/RustServersServerIdPlayersSteamIdEventsItemsItemIdPickup";
import * as rustServersServerIdPlayersSteamIdEventsItemsItemIdLootChannel from "./testchannels/RustServersServerIdPlayersSteamIdEventsItemsItemIdLoot";
import * as rustServersServerIdPlayersSteamIdEventsItemsItemIdCraftedChannel from "./testchannels/RustServersServerIdPlayersSteamIdEventsItemsItemIdCrafted";
import * as rustServersServerIdEventsCommandChannel from "./testchannels/RustServersServerIdEventsCommand";
import * as rustServersServerIdPlayersSteamIdEventsReportedChannel from "./testchannels/RustServersServerIdPlayersSteamIdEventsReported";
import * as rustServersServerIdPlayersSteamIdEventsUnbannedChannel from "./testchannels/RustServersServerIdPlayersSteamIdEventsUnbanned";
import * as rustServersServerIdPlayersSteamIdEventsBannedChannel from "./testchannels/RustServersServerIdPlayersSteamIdEventsBanned";
import * as rustServersServerIdPlayersSteamIdEventsChatChannel from "./testchannels/RustServersServerIdPlayersSteamIdEventsChat";
import {
  ServerPlayerConnected
} from "..//models/ServerPlayerConnected";
import {
  ServerPlayerDisconnected
} from "..//models/ServerPlayerDisconnected";
import {
  ServerPlayerResourceGathered
} from "..//models/ServerPlayerResourceGathered";
import {
  ServerPlayerRespawned
} from "..//models/ServerPlayerRespawned";
import {
  ServerPlayerCombatPlayerhit
} from "..//models/ServerPlayerCombatPlayerhit";
import {
  ServerPlayerItemPickup
} from "..//models/ServerPlayerItemPickup";
import {
  ServerPlayerItemLoot
} from "..//models/ServerPlayerItemLoot";
import {
  ServerPlayerItemCrafted
} from "..//models/ServerPlayerItemCrafted";
import {
  ServerCommand
} from "..//models/ServerCommand";
import {
  ServerPlayerReported
} from "..//models/ServerPlayerReported";
import {
  ServerPlayerUnbanned
} from "..//models/ServerPlayerUnbanned";
import {
  ServerPlayerBanned
} from "..//models/ServerPlayerBanned";
import {
  ChatMessage
} from "..//models/ChatMessage";
import * as events from 'events';
export enum AvailableEvents {
  permissionError = 'permissionError',
    close = 'close',
    connect = 'connect',
    connecting = 'connecting',
    disconnect = 'disconnect',
    error = 'error',
    pingcount = 'pingcount',
    pingtimer = 'pingtimer',
    reconnect = 'reconnect',
    reconnecting = 'reconnecting',
    serversChanged = 'serversChanged',
    subscribe = 'subscribe',
    unsubscribe = 'unsubscribe',
    yield = 'yield'
}
export {
  rustServersServerIdEventsWipedChannel
};
export {
  rustServersServerIdEventsStartedChannel
};
export {
  rustServersServerIdEventsStoppingChannel
};
export {
  rustServersServerIdPlayersSteamIdEventsConnectedChannel
};
export {
  rustServersServerIdPlayersSteamIdEventsDisconnectedChannel
};
export {
  rustServersServerIdPlayersSteamIdEventsResourcesGatheredChannel
};
export {
  rustServersServerIdPlayersSteamIdEventsRespawnedChannel
};
export {
  rustServersServerIdPlayersSteamIdEventsCombatPlayerhitChannel
};
export {
  rustServersServerIdPlayersSteamIdEventsItemsItemIdPickupChannel
};
export {
  rustServersServerIdPlayersSteamIdEventsItemsItemIdLootChannel
};
export {
  rustServersServerIdPlayersSteamIdEventsItemsItemIdCraftedChannel
};
export {
  rustServersServerIdEventsCommandChannel
};
export {
  rustServersServerIdPlayersSteamIdEventsReportedChannel
};
export {
  rustServersServerIdPlayersSteamIdEventsUnbannedChannel
};
export {
  rustServersServerIdPlayersSteamIdEventsBannedChannel
};
export {
  rustServersServerIdPlayersSteamIdEventsChatChannel
};
export {
  ServerPlayerConnected
};
export {
  ServerPlayerDisconnected
};
export {
  ServerPlayerResourceGathered
};
export {
  ServerPlayerRespawned
};
export {
  ServerPlayerCombatPlayerhit
};
export {
  ServerPlayerItemPickup
};
export {
  ServerPlayerItemLoot
};
export {
  ServerPlayerItemCrafted
};
export {
  ServerCommand
};
export {
  ServerPlayerReported
};
export {
  ServerPlayerUnbanned
};
export {
  ServerPlayerBanned
};
export {
  ChatMessage
};
export declare interface NatsAsyncApiTestClient {
  on(event: AvailableEvents.permissionError, listener: (error: NatsTypescriptTemplateError) => void): this;
  on(event: AvailableEvents.close, listener: (error: NatsTypescriptTemplateError) => void): this;
  on(event: AvailableEvents.connect, listener: (connection: Client, serverURL: string, info: ServerInfo) => void): this;
  on(event: AvailableEvents.connecting, listener: (error: NatsTypescriptTemplateError) => void): this;
  on(event: AvailableEvents.disconnect, listener: (serverURL: string) => void): this;
  on(event: AvailableEvents.error, listener: (error: NatsTypescriptTemplateError) => void): this;
  on(event: AvailableEvents.pingcount, listener: () => void): this;
  on(event: AvailableEvents.pingtimer, listener: () => void): this;
  on(event: AvailableEvents.reconnect, listener: (connection: Client, serverURL: string, info: ServerInfo) => void): this;
  on(event: AvailableEvents.reconnecting, listener: (serverURL: string) => void): this;
  on(event: AvailableEvents.serversChanged, listener: (e: ServersChangedEvent) => void): this;
  on(event: AvailableEvents.subscribe, listener: (e: SubEvent) => void): this;
  on(event: AvailableEvents.unsubscribe, listener: (e: SubEvent) => void): this;
  on(event: AvailableEvents.yield, listener: () => void): this;
}
/**
 * @class NatsAsyncApiTestClient
 * 
 * The test/mirror client which is the reverse to the normal NatsAsyncApiClient.
 */
export class NatsAsyncApiTestClient extends events.EventEmitter {
  private jsonClient ? : Client;
  private stringClient ? : Client;
  private binaryClient ? : Client;
  private options ? : NatsConnectionOptions;
  constructor() {
    super();
  }
  /**
   * Try to connect to the NATS server with the different payloads.
   * @param options to use, payload is omitted if sat in the AsyncAPI document.
   */
  connect(options: NatsConnectionOptions): Promise < void > {
    return new Promise(async (resolve: () => void, reject: (error: any) => void) => {
      this.options = options;
      try {
        if (!this.jsonClient || this.jsonClient!.isClosed()) {
          this.options.payload = Payload.JSON;
          this.jsonClient = await connect(this.options);
          this.chainEvents(this.jsonClient);
        }
        resolve();
      } catch (e) {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e));
      }
    })
  }
  /**
   * Disconnect all clients from the server
   */
  async disconnect() {
    if (!this.isClosed()) {
      await this.jsonClient!.drain();
    }
  }
  /**
   * Returns whether or not any of the clients are closed
   */
  isClosed() {
    if (!this.jsonClient || this.jsonClient!.isClosed()) {
      return true;
    }
    return false;
  }
  private chainEvents(ns: Client) {
    ns.on('permissionError', (e: NatsError) => {
      this.emit(AvailableEvents.permissionError, NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e))
    });
    ns.on('close', (e: NatsError) => {
      this.emit(AvailableEvents.close, NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e))
    });
    ns.on('connect', (connection: Client, serverURL: string, info: ServerInfo) => {
      this.emit(AvailableEvents.connect, connection, serverURL, info)
    });
    ns.on('connecting', (serverURL: string) => {
      this.emit(AvailableEvents.connecting, serverURL)
    });
    ns.on('disconnect', (serverURL: string) => {
      this.emit(AvailableEvents.disconnect, serverURL)
    });
    ns.on('error', (e: NatsError) => {
      this.emit(AvailableEvents.error, NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e))
    });
    ns.on('pingcount', () => {
      this.emit(AvailableEvents.pingcount)
    });
    ns.on('pingtimer', () => {
      this.emit(AvailableEvents.pingtimer)
    });
    ns.on('reconnect', (connection: Client, serverURL: string, info: ServerInfo) => {
      this.emit(AvailableEvents.reconnect, connection, serverURL, info)
    });
    ns.on('reconnecting', (serverURL: string) => {
      this.emit(AvailableEvents.reconnecting, serverURL)
    });
    ns.on('serversChanged', (e: ServersChangedEvent) => {
      this.emit(AvailableEvents.serversChanged, e)
    });
    ns.on('subscribe', (e: SubEvent) => {
      this.emit(AvailableEvents.subscribe, e)
    });
    ns.on('unsubscribe', (e: SubEvent) => {
      this.emit(AvailableEvents.unsubscribe, e)
    });
    ns.on('yield', () => {
      this.emit(AvailableEvents.yield)
    });
  }
  /**
   * Try to connect to the NATS server with user credentials
   *
   * @param userCreds to use
   * @param options to connect with
   */
  async connectWithUserCreds(userCreds: string, options ? : NatsConnectionOptions) {
    await this.connect({
      userCreds: userCreds,
      ...options
    });
  }
  /**
   * Try to connect to the NATS server with user and password
   * 
   * @param user username to use
   * @param pass password to use
   * @param options to connect with
   */
  async connectWithUserPass(user: string, pass: string, options ? : NatsConnectionOptions) {
    await this.connect({
      user: user,
      pass: pass,
      ...options
    });
  }
  /**
   * Try to connect to the NATS server which has no authentication
   
   * @param host to connect to
   * @param options to connect with
   */
  async connectToHost(host: string, options ? : NatsConnectionOptions) {
    await this.connect({
      servers: [host],
      ...options
    });
  }
  /**
   * Try to connect to the NATS server with NKey authentication
   * 
   * @param publicNkey User
   * @param seed private key
   * @param options to connect with
   */
  async connectWithNkey(publicNkey: string, seed: string, options ? : NatsConnectionOptions) {
    await this.connect({
      nkey: publicNkey,
      nonceSigner: (nonce: string): Buffer => {
        const sk = fromSeed(Buffer.from(seed));
        return sk.sign(Buffer.from(nonce));
      },
      ...options
    });
  }
  /**
   * Connects the client to the AsyncAPI server called production.
   * Test broker
   */
  async connectToProduction() {
    await this.connect({
      servers: ["test.nats.org:{port}"]
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/events/wiped`
   * 
   * Channel for the API to process when a server has just wiped
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdEventsWiped(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : null, server_id ? : string) => void, server_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdEventsWipedChannel.subscribe(
            onDataCallback, nc, server_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/events/started`
   * 
   * Channel for the API to process for when a server has started
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdEventsStarted(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : null, server_id ? : string) => void, server_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdEventsStartedChannel.subscribe(
            onDataCallback, nc, server_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/events/stopping`
   * 
   * Channel for the API to process for when a server is about to stop (cant send information if already stopped)
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdEventsStopping(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : null, server_id ? : string) => void, server_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdEventsStoppingChannel.subscribe(
            onDataCallback, nc, server_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/players/{steam_id}/events/connected`
   * 
   * Channel for the API to process for when a player connects to a server
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdPlayersSteamIdEventsConnected(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : ServerPlayerConnected, server_id ? : string, steam_id ? : string) => void, server_id: string, steam_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdPlayersSteamIdEventsConnectedChannel.subscribe(
            onDataCallback, nc, server_id, steam_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/players/{steam_id}/events/disconnected`
   * 
   * Channel for the API to process for when a player disconnects from a server
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdPlayersSteamIdEventsDisconnected(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : ServerPlayerDisconnected, server_id ? : string, steam_id ? : string) => void, server_id: string, steam_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdPlayersSteamIdEventsDisconnectedChannel.subscribe(
            onDataCallback, nc, server_id, steam_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/players/{steam_id}/events/resourcesGathered`
   * 
   * Channel for the API to process for when a player gathers some resources
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdPlayersSteamIdEventsResourcesGathered(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : ServerPlayerResourceGathered, server_id ? : string, steam_id ? : string) => void, server_id: string, steam_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdPlayersSteamIdEventsResourcesGatheredChannel.subscribe(
            onDataCallback, nc, server_id, steam_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/players/{steam_id}/events/respawned`
   * 
   * Channel for the API to process for when a player respawn
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdPlayersSteamIdEventsRespawned(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : ServerPlayerRespawned, server_id ? : string, steam_id ? : string) => void, server_id: string, steam_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdPlayersSteamIdEventsRespawnedChannel.subscribe(
            onDataCallback, nc, server_id, steam_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/players/{steam_id}/events/combat/playerhit`
   * 
   * Channel for the API to process for when a player hits another player
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdPlayersSteamIdEventsCombatPlayerhit(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : ServerPlayerCombatPlayerhit, server_id ? : string, steam_id ? : string) => void, server_id: string, steam_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdPlayersSteamIdEventsCombatPlayerhitChannel.subscribe(
            onDataCallback, nc, server_id, steam_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/pickup`
   * 
   * Channel for the API to process for when a player pickup items ingame
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   * @param item_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdPlayersSteamIdEventsItemsItemIdPickup(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : ServerPlayerItemPickup, server_id ? : string, steam_id ? : string, item_id ? : string) => void, server_id: string, steam_id: string, item_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdPlayersSteamIdEventsItemsItemIdPickupChannel.subscribe(
            onDataCallback, nc, server_id, steam_id, item_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/loot`
   * 
   * Channel for the API to process for when a player loots an item ingame
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   * @param item_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdPlayersSteamIdEventsItemsItemIdLoot(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : ServerPlayerItemLoot, server_id ? : string, steam_id ? : string, item_id ? : string) => void, server_id: string, steam_id: string, item_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdPlayersSteamIdEventsItemsItemIdLootChannel.subscribe(
            onDataCallback, nc, server_id, steam_id, item_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/crafted`
   * 
   * Channel for the API to process for when a player crafts items ingame
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   * @param item_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdPlayersSteamIdEventsItemsItemIdCrafted(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : ServerPlayerItemCrafted, server_id ? : string, steam_id ? : string, item_id ? : string) => void, server_id: string, steam_id: string, item_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdPlayersSteamIdEventsItemsItemIdCraftedChannel.subscribe(
            onDataCallback, nc, server_id, steam_id, item_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/events/command`
   * 
   * Channel for the API to process for when a server command is run
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdEventsCommand(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : ServerCommand, server_id ? : string) => void, server_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdEventsCommandChannel.subscribe(
            onDataCallback, nc, server_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/players/{steam_id}/events/reported`
   * 
   * Channel for the API to process for when a player is reported
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdPlayersSteamIdEventsReported(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : ServerPlayerReported, server_id ? : string, steam_id ? : string) => void, server_id: string, steam_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdPlayersSteamIdEventsReportedChannel.subscribe(
            onDataCallback, nc, server_id, steam_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/players/{steam_id}/events/unbanned`
   * 
   * Channel for notifying a server unbanned a player
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdPlayersSteamIdEventsUnbanned(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : ServerPlayerUnbanned, server_id ? : string, steam_id ? : string) => void, server_id: string, steam_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdPlayersSteamIdEventsUnbannedChannel.subscribe(
            onDataCallback, nc, server_id, steam_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/players/{steam_id}/events/banned`
   * 
   * Channel for notifying a server banned a player
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdPlayersSteamIdEventsBanned(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : ServerPlayerBanned, server_id ? : string, steam_id ? : string) => void, server_id: string, steam_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdPlayersSteamIdEventsBannedChannel.subscribe(
            onDataCallback, nc, server_id, steam_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
  /**
   * Subscribe to the `rust/servers/{server_id}/players/{steam_id}/events/chat`
   * 
   * Channel for when a player chats ingame
   * 
   * @param onDataCallback to call when messages are received
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   * @param flush ensure client is force flushed after subscribing
   * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
   */
  public subscribeToRustServersServerIdPlayersSteamIdEventsChat(
    onDataCallback: (
      err ? : NatsTypescriptTemplateError,
      msg ? : ChatMessage, server_id ? : string, steam_id ? : string) => void, server_id: string, steam_id: string,
    flush ? : boolean,
    options ? : SubscriptionOptions
  ): Promise < Subscription > {
    return new Promise(async (resolve, reject) => {
      const nc: Client = this.jsonClient!;
      if (nc) {
        try {
          const sub = await rustServersServerIdPlayersSteamIdEventsChatChannel.subscribe(
            onDataCallback, nc, server_id, steam_id,
            options
          );
          if (flush) {
            this.jsonClient!.flush(() => {
              resolve(sub);
            });
          } else {
            resolve(sub);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
      }
    });
  }
}