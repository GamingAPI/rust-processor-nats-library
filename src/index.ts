import {
  AvailableHooks,
  ReceivedDataHook,
  BeforeSendingDataHook,
  Hooks
} from './hooks';
import * as TestClient from './testclient/';
import {
  fromSeed
} from 'ts-nkeys';
import {
  ErrorCode,
  NatsTypescriptTemplateError
} from './NatsTypescriptTemplateError';
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
import * as v0RustServersServerIdEventsWipedChannel from "./channels/V0RustServersServerIdEventsWiped";
import * as v0RustServersServerIdEventsStartedChannel from "./channels/V0RustServersServerIdEventsStarted";
import * as v0RustServersServerIdEventsStoppingChannel from "./channels/V0RustServersServerIdEventsStopping";
import * as v0RustServersServerIdPlayersSteamIdEventsConnectedChannel from "./channels/V0RustServersServerIdPlayersSteamIdEventsConnected";
import * as v0RustServersServerIdPlayersSteamIdEventsDisconnectedChannel from "./channels/V0RustServersServerIdPlayersSteamIdEventsDisconnected";
import * as v0RustServersServerIdPlayersSteamIdEventsResourcesGatheredChannel from "./channels/V0RustServersServerIdPlayersSteamIdEventsResourcesGathered";
import * as v0RustServersServerIdPlayersSteamIdEventsRespawnedChannel from "./channels/V0RustServersServerIdPlayersSteamIdEventsRespawned";
import * as v0RustServersServerIdPlayersSteamIdEventsCombatPlayerhitChannel from "./channels/V0RustServersServerIdPlayersSteamIdEventsCombatPlayerhit";
import * as v0RustServersServerIdPlayersSteamIdEventsItemsItemIdPickupChannel from "./channels/V0RustServersServerIdPlayersSteamIdEventsItemsItemIdPickup";
import * as v0RustServersServerIdPlayersSteamIdEventsItemsItemIdLootChannel from "./channels/V0RustServersServerIdPlayersSteamIdEventsItemsItemIdLoot";
import * as v0RustServersServerIdPlayersSteamIdEventsItemsItemIdCraftedChannel from "./channels/V0RustServersServerIdPlayersSteamIdEventsItemsItemIdCrafted";
import * as v0RustServersServerIdEventsCommandChannel from "./channels/V0RustServersServerIdEventsCommand";
import * as v0RustServersServerIdPlayersSteamIdEventsReportedChannel from "./channels/V0RustServersServerIdPlayersSteamIdEventsReported";
import * as v0RustServersServerIdPlayersSteamIdEventsUnbannedChannel from "./channels/V0RustServersServerIdPlayersSteamIdEventsUnbanned";
import * as v0RustServersServerIdPlayersSteamIdEventsBannedChannel from "./channels/V0RustServersServerIdPlayersSteamIdEventsBanned";
import * as v0RustServersServerIdPlayersSteamIdEventsChatChannel from "./channels/V0RustServersServerIdPlayersSteamIdEventsChat";
import {
  ServerPlayerConnected
} from "./models/ServerPlayerConnected";
import {
  ServerPlayerDisconnected
} from "./models/ServerPlayerDisconnected";
import {
  ServerPlayerResourceGathered
} from "./models/ServerPlayerResourceGathered";
import {
  ServerPlayerRespawned
} from "./models/ServerPlayerRespawned";
import {
  ServerPlayerCombatPlayerhit
} from "./models/ServerPlayerCombatPlayerhit";
import {
  ServerPlayerItemPickup
} from "./models/ServerPlayerItemPickup";
import {
  ServerPlayerItemLoot
} from "./models/ServerPlayerItemLoot";
import {
  ServerPlayerItemCrafted
} from "./models/ServerPlayerItemCrafted";
import {
  ServerCommand
} from "./models/ServerCommand";
import {
  ServerPlayerReported
} from "./models/ServerPlayerReported";
import {
  ServerPlayerUnbanned
} from "./models/ServerPlayerUnbanned";
import {
  ServerPlayerBanned
} from "./models/ServerPlayerBanned";
import {
  ChatMessage
} from "./models/ChatMessage";
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
  v0RustServersServerIdEventsWipedChannel
};
export {
  v0RustServersServerIdEventsStartedChannel
};
export {
  v0RustServersServerIdEventsStoppingChannel
};
export {
  v0RustServersServerIdPlayersSteamIdEventsConnectedChannel
};
export {
  v0RustServersServerIdPlayersSteamIdEventsDisconnectedChannel
};
export {
  v0RustServersServerIdPlayersSteamIdEventsResourcesGatheredChannel
};
export {
  v0RustServersServerIdPlayersSteamIdEventsRespawnedChannel
};
export {
  v0RustServersServerIdPlayersSteamIdEventsCombatPlayerhitChannel
};
export {
  v0RustServersServerIdPlayersSteamIdEventsItemsItemIdPickupChannel
};
export {
  v0RustServersServerIdPlayersSteamIdEventsItemsItemIdLootChannel
};
export {
  v0RustServersServerIdPlayersSteamIdEventsItemsItemIdCraftedChannel
};
export {
  v0RustServersServerIdEventsCommandChannel
};
export {
  v0RustServersServerIdPlayersSteamIdEventsReportedChannel
};
export {
  v0RustServersServerIdPlayersSteamIdEventsUnbannedChannel
};
export {
  v0RustServersServerIdPlayersSteamIdEventsBannedChannel
};
export {
  v0RustServersServerIdPlayersSteamIdEventsChatChannel
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
export {
  ErrorCode,
  NatsTypescriptTemplateError
}
export {
  TestClient
};
export {
  AvailableHooks,
  ReceivedDataHook,
  BeforeSendingDataHook,
  Hooks
}
export {
  Client,
  ServerInfo,
  ServersChangedEvent,
  SubEvent
}
export declare interface NatsAsyncApiClient {
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
 * @class NatsAsyncApiClient
 * 
 * The generated client based on your AsyncAPI document.
 */
export class NatsAsyncApiClient extends events.EventEmitter {
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
   * Publish to the `v0/rust/servers/{server_id}/events/wiped` channel 
   * 
   * Channel for the API to process when a server has just wiped
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   */
  public publishToV0RustServersServerIdEventsWiped(
    message: null, server_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdEventsWipedChannel.publish(
        message,
        nc, server_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
  /**
   * Publish to the `v0/rust/servers/{server_id}/events/started` channel 
   * 
   * Channel for the API to process for when a server has started
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   */
  public publishToV0RustServersServerIdEventsStarted(
    message: null, server_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdEventsStartedChannel.publish(
        message,
        nc, server_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
  /**
   * Publish to the `v0/rust/servers/{server_id}/events/stopping` channel 
   * 
   * Channel for the API to process for when a server is about to stop (cant send information if already stopped)
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   */
  public publishToV0RustServersServerIdEventsStopping(
    message: null, server_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdEventsStoppingChannel.publish(
        message,
        nc, server_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
  /**
   * Publish to the `v0/rust/servers/{server_id}/players/{steam_id}/events/connected` channel 
   * 
   * Channel for the API to process for when a player connects to a server
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   */
  public publishToV0RustServersServerIdPlayersSteamIdEventsConnected(
    message: ServerPlayerConnected, server_id: string, steam_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdPlayersSteamIdEventsConnectedChannel.publish(
        message,
        nc, server_id, steam_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
  /**
   * Publish to the `v0/rust/servers/{server_id}/players/{steam_id}/events/disconnected` channel 
   * 
   * Channel for the API to process for when a player disconnects from a server
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   */
  public publishToV0RustServersServerIdPlayersSteamIdEventsDisconnected(
    message: ServerPlayerDisconnected, server_id: string, steam_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdPlayersSteamIdEventsDisconnectedChannel.publish(
        message,
        nc, server_id, steam_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
  /**
   * Publish to the `v0/rust/servers/{server_id}/players/{steam_id}/events/resourcesGathered` channel 
   * 
   * Channel for the API to process for when a player gathers some resources
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   */
  public publishToV0RustServersServerIdPlayersSteamIdEventsResourcesGathered(
    message: ServerPlayerResourceGathered, server_id: string, steam_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdPlayersSteamIdEventsResourcesGatheredChannel.publish(
        message,
        nc, server_id, steam_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
  /**
   * Publish to the `v0/rust/servers/{server_id}/players/{steam_id}/events/respawned` channel 
   * 
   * Channel for the API to process for when a player respawn
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   */
  public publishToV0RustServersServerIdPlayersSteamIdEventsRespawned(
    message: ServerPlayerRespawned, server_id: string, steam_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdPlayersSteamIdEventsRespawnedChannel.publish(
        message,
        nc, server_id, steam_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
  /**
   * Publish to the `v0/rust/servers/{server_id}/players/{steam_id}/events/combat/playerhit` channel 
   * 
   * Channel for the API to process for when a player hits another player
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   */
  public publishToV0RustServersServerIdPlayersSteamIdEventsCombatPlayerhit(
    message: ServerPlayerCombatPlayerhit, server_id: string, steam_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdPlayersSteamIdEventsCombatPlayerhitChannel.publish(
        message,
        nc, server_id, steam_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
  /**
   * Publish to the `v0/rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/pickup` channel 
   * 
   * Channel for the API to process for when a player pickup items ingame
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   * @param item_id parameter to use in topic
   */
  public publishToV0RustServersServerIdPlayersSteamIdEventsItemsItemIdPickup(
    message: ServerPlayerItemPickup, server_id: string, steam_id: string, item_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdPlayersSteamIdEventsItemsItemIdPickupChannel.publish(
        message,
        nc, server_id, steam_id, item_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
  /**
   * Publish to the `v0/rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/loot` channel 
   * 
   * Channel for the API to process for when a player loots an item ingame
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   * @param item_id parameter to use in topic
   */
  public publishToV0RustServersServerIdPlayersSteamIdEventsItemsItemIdLoot(
    message: ServerPlayerItemLoot, server_id: string, steam_id: string, item_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdPlayersSteamIdEventsItemsItemIdLootChannel.publish(
        message,
        nc, server_id, steam_id, item_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
  /**
   * Publish to the `v0/rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/crafted` channel 
   * 
   * Channel for the API to process for when a player crafts items ingame
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   * @param item_id parameter to use in topic
   */
  public publishToV0RustServersServerIdPlayersSteamIdEventsItemsItemIdCrafted(
    message: ServerPlayerItemCrafted, server_id: string, steam_id: string, item_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdPlayersSteamIdEventsItemsItemIdCraftedChannel.publish(
        message,
        nc, server_id, steam_id, item_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
  /**
   * Publish to the `v0/rust/servers/{server_id}/events/command` channel 
   * 
   * Channel for the API to process for when a server command is run
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   */
  public publishToV0RustServersServerIdEventsCommand(
    message: ServerCommand, server_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdEventsCommandChannel.publish(
        message,
        nc, server_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
  /**
   * Publish to the `v0/rust/servers/{server_id}/players/{steam_id}/events/reported` channel 
   * 
   * Channel for the API to process for when a player is reported
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   */
  public publishToV0RustServersServerIdPlayersSteamIdEventsReported(
    message: ServerPlayerReported, server_id: string, steam_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdPlayersSteamIdEventsReportedChannel.publish(
        message,
        nc, server_id, steam_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
  /**
   * Publish to the `v0/rust/servers/{server_id}/players/{steam_id}/events/unbanned` channel 
   * 
   * Channel for notifying a server unbanned a player
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   */
  public publishToV0RustServersServerIdPlayersSteamIdEventsUnbanned(
    message: ServerPlayerUnbanned, server_id: string, steam_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdPlayersSteamIdEventsUnbannedChannel.publish(
        message,
        nc, server_id, steam_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
  /**
   * Publish to the `v0/rust/servers/{server_id}/players/{steam_id}/events/banned` channel 
   * 
   * Channel for notifying a server banned a player
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   */
  public publishToV0RustServersServerIdPlayersSteamIdEventsBanned(
    message: ServerPlayerBanned, server_id: string, steam_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdPlayersSteamIdEventsBannedChannel.publish(
        message,
        nc, server_id, steam_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
  /**
   * Publish to the `v0/rust/servers/{server_id}/players/{steam_id}/events/chat` channel 
   * 
   * Channel for when a player chats ingame
   * 
   * @param message to publish
   * @param server_id parameter to use in topic
   * @param steam_id parameter to use in topic
   */
  public publishToV0RustServersServerIdPlayersSteamIdEventsChat(
    message: ChatMessage, server_id: string, steam_id: string
  ): Promise < void > {
    const nc: Client = this.jsonClient!;
    if (nc) {
      return v0RustServersServerIdPlayersSteamIdEventsChatChannel.publish(
        message,
        nc, server_id, steam_id
      );
    } else {
      return Promise.reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.NOT_CONNECTED));
    }
  }
}