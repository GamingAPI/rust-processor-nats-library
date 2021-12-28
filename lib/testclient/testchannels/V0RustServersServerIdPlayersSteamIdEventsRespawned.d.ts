import { ServerPlayerRespawned } from '../../models/ServerPlayerRespawned';
import * as Nats from 'nats';
/**
 * Module which wraps functionality for the `v0/rust/servers/{server_id}/players/{steam_id}/events/respawned` channel
 * @module v0RustServersServerIdPlayersSteamIdEventsRespawned
 */
/**
 * Internal functionality to publish message to channel
 * v0/rust/servers/{server_id}/players/{steam_id}/events/respawned
 *
 * @param message to publish
 * @param nc to publish with
 * @param codec used to convert messages
 * @param server_id parameter to use in topic
 * @param steam_id parameter to use in topic
 * @param options to publish with
 */
export declare function publish(message: ServerPlayerRespawned, nc: Nats.NatsConnection, codec: Nats.Codec<any>, server_id: string, steam_id: string, options?: Nats.PublishOptions): Promise<void>;
