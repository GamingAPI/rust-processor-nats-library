import { ServerCommand } from '../../models/ServerCommand';
import * as Nats from 'nats';
/**
 * Module which wraps functionality for the `v0/rust/servers/{server_id}/events/command` channel
 * @module v0RustServersServerIdEventsCommand
 */
/**
 * Internal functionality to publish message to channel
 * v0/rust/servers/{server_id}/events/command
 *
 * @param message to publish
 * @param nc to publish with
 * @param codec used to convert messages
 * @param server_id parameter to use in topic
 * @param options to publish with
 */
export declare function publish(message: ServerCommand, nc: Nats.NatsConnection, codec: Nats.Codec<any>, server_id: string, options?: Nats.PublishOptions): Promise<void>;
