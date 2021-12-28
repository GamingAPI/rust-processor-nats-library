import * as TestClient from './testclient/';
import { ErrorCode, NatsTypescriptTemplateError } from './NatsTypescriptTemplateError';
import * as Nats from 'nats';
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
import { ServerPlayerConnected } from "./models/ServerPlayerConnected";
import { ServerPlayerDisconnected } from "./models/ServerPlayerDisconnected";
import { ServerPlayerResourceGathered } from "./models/ServerPlayerResourceGathered";
import { ServerPlayerRespawned } from "./models/ServerPlayerRespawned";
import { ServerPlayerCombatPlayerhit } from "./models/ServerPlayerCombatPlayerhit";
import { ServerPlayerItemPickup } from "./models/ServerPlayerItemPickup";
import { ServerPlayerItemLoot } from "./models/ServerPlayerItemLoot";
import { ServerPlayerItemCrafted } from "./models/ServerPlayerItemCrafted";
import { ServerCommand } from "./models/ServerCommand";
import { ServerPlayerReported } from "./models/ServerPlayerReported";
import { ServerPlayerUnbanned } from "./models/ServerPlayerUnbanned";
import { ServerPlayerBanned } from "./models/ServerPlayerBanned";
import { ChatMessage } from "./models/ChatMessage";
export { v0RustServersServerIdEventsWipedChannel };
export { v0RustServersServerIdEventsStartedChannel };
export { v0RustServersServerIdEventsStoppingChannel };
export { v0RustServersServerIdPlayersSteamIdEventsConnectedChannel };
export { v0RustServersServerIdPlayersSteamIdEventsDisconnectedChannel };
export { v0RustServersServerIdPlayersSteamIdEventsResourcesGatheredChannel };
export { v0RustServersServerIdPlayersSteamIdEventsRespawnedChannel };
export { v0RustServersServerIdPlayersSteamIdEventsCombatPlayerhitChannel };
export { v0RustServersServerIdPlayersSteamIdEventsItemsItemIdPickupChannel };
export { v0RustServersServerIdPlayersSteamIdEventsItemsItemIdLootChannel };
export { v0RustServersServerIdPlayersSteamIdEventsItemsItemIdCraftedChannel };
export { v0RustServersServerIdEventsCommandChannel };
export { v0RustServersServerIdPlayersSteamIdEventsReportedChannel };
export { v0RustServersServerIdPlayersSteamIdEventsUnbannedChannel };
export { v0RustServersServerIdPlayersSteamIdEventsBannedChannel };
export { v0RustServersServerIdPlayersSteamIdEventsChatChannel };
export { ServerPlayerConnected };
export { ServerPlayerDisconnected };
export { ServerPlayerResourceGathered };
export { ServerPlayerRespawned };
export { ServerPlayerCombatPlayerhit };
export { ServerPlayerItemPickup };
export { ServerPlayerItemLoot };
export { ServerPlayerItemCrafted };
export { ServerCommand };
export { ServerPlayerReported };
export { ServerPlayerUnbanned };
export { ServerPlayerBanned };
export { ChatMessage };
export { ErrorCode, NatsTypescriptTemplateError };
export { TestClient };
/**
 * @class NatsAsyncApiClient
 *
 * The generated client based on your AsyncAPI document.
 */
export declare class NatsAsyncApiClient {
    private nc?;
    private codec?;
    private options?;
    /**
     * Try to connect to the NATS server with the different payloads.
     * @param options to use, payload is omitted if sat in the AsyncAPI document.
     */
    connect(options: Nats.ConnectionOptions, codec?: Nats.Codec<any>): Promise<void>;
    /**
     * Disconnect all clients from the server
     */
    disconnect(): Promise<void>;
    /**
     * Returns whether or not any of the clients are closed
     */
    isClosed(): boolean;
    /**
     * Try to connect to the NATS server with user credentials
     *
     * @param userCreds to use
     * @param options to connect with
     */
    connectWithUserCreds(userCreds: string, options?: Nats.ConnectionOptions, codec?: Nats.Codec<any>): Promise<void>;
    /**
     * Try to connect to the NATS server with user and password
     *
     * @param user username to use
     * @param pass password to use
     * @param options to connect with
     */
    connectWithUserPass(user: string, pass: string, options?: Nats.ConnectionOptions, codec?: Nats.Codec<any>): Promise<void>;
    /**
     * Try to connect to the NATS server which has no authentication
     
      * @param host to connect to
      * @param options to connect with
      */
    connectToHost(host: string, options?: Nats.ConnectionOptions, codec?: Nats.Codec<any>): Promise<void>;
    /**
     * Connects the client to the AsyncAPI server called production.
     * Test broker
     */
    connectToProduction(codec?: Nats.Codec<any>): Promise<void>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/events/wiped`
     *
     * Channel for the API to process when a server has just wiped
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdEventsWiped(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: null, server_id?: string) => void, server_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/events/started`
     *
     * Channel for the API to process for when a server has started
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdEventsStarted(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: null, server_id?: string) => void, server_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/events/stopping`
     *
     * Channel for the API to process for when a server is about to stop (cant send information if already stopped)
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdEventsStopping(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: null, server_id?: string) => void, server_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/connected`
     *
     * Channel for the API to process for when a player connects to a server
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsConnected(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: ServerPlayerConnected, server_id?: string, steam_id?: string) => void, server_id: string, steam_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/disconnected`
     *
     * Channel for the API to process for when a player disconnects from a server
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsDisconnected(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: ServerPlayerDisconnected, server_id?: string, steam_id?: string) => void, server_id: string, steam_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/resourcesGathered`
     *
     * Channel for the API to process for when a player gathers some resources
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsResourcesGathered(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: ServerPlayerResourceGathered, server_id?: string, steam_id?: string) => void, server_id: string, steam_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/respawned`
     *
     * Channel for the API to process for when a player respawn
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsRespawned(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: ServerPlayerRespawned, server_id?: string, steam_id?: string) => void, server_id: string, steam_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/combat/playerhit`
     *
     * Channel for the API to process for when a player hits another player
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsCombatPlayerhit(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: ServerPlayerCombatPlayerhit, server_id?: string, steam_id?: string) => void, server_id: string, steam_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/pickup`
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
    subscribeToV0RustServersServerIdPlayersSteamIdEventsItemsItemIdPickup(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: ServerPlayerItemPickup, server_id?: string, steam_id?: string, item_id?: string) => void, server_id: string, steam_id: string, item_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/loot`
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
    subscribeToV0RustServersServerIdPlayersSteamIdEventsItemsItemIdLoot(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: ServerPlayerItemLoot, server_id?: string, steam_id?: string, item_id?: string) => void, server_id: string, steam_id: string, item_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/crafted`
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
    subscribeToV0RustServersServerIdPlayersSteamIdEventsItemsItemIdCrafted(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: ServerPlayerItemCrafted, server_id?: string, steam_id?: string, item_id?: string) => void, server_id: string, steam_id: string, item_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/events/command`
     *
     * Channel for the API to process for when a server command is run
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdEventsCommand(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: ServerCommand, server_id?: string) => void, server_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/reported`
     *
     * Channel for the API to process for when a player is reported
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsReported(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: ServerPlayerReported, server_id?: string, steam_id?: string) => void, server_id: string, steam_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/unbanned`
     *
     * Channel for notifying a server unbanned a player
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsUnbanned(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: ServerPlayerUnbanned, server_id?: string, steam_id?: string) => void, server_id: string, steam_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/banned`
     *
     * Channel for notifying a server banned a player
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsBanned(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: ServerPlayerBanned, server_id?: string, steam_id?: string) => void, server_id: string, steam_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/chat`
     *
     * Channel for when a player chats ingame
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsChat(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: ChatMessage, server_id?: string, steam_id?: string) => void, server_id: string, steam_id: string, flush?: boolean, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
}
