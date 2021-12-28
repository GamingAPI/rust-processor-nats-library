import { ServerPlayerRespawned } from '../models/ServerPlayerRespawned';
import * as Nats from 'nats';
import { NatsTypescriptTemplateError } from '../NatsTypescriptTemplateError';
/**
 * Module which wraps functionality for the `v0/rust/servers/{server_id}/players/{steam_id}/events/respawned` channel
 * @module v0RustServersServerIdPlayersSteamIdEventsRespawned
 */
/**
 * Internal functionality to setup subscription on the `v0/rust/servers/{server_id}/players/{steam_id}/events/respawned` channel
 *
 * @param onDataCallback to call when messages are received
 * @param nc to subscribe with
 * @param codec used to convert messages
 * @param server_id parameter to use in topic
 * @param steam_id parameter to use in topic
 * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
 */
export declare function subscribe(onDataCallback: (err?: NatsTypescriptTemplateError, msg?: ServerPlayerRespawned, server_id?: string, steam_id?: string) => void, nc: Nats.NatsConnection, codec: Nats.Codec<any>, server_id: string, steam_id: string, options?: Nats.SubscriptionOptions): Promise<Nats.Subscription>;
