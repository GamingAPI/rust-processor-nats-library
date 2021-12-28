import * as Nats from 'nats';
/**
 * Module which wraps functionality for the `v0/rust/servers/{server_id}/events/wiped` channel
 * @module v0RustServersServerIdEventsWiped
 */
/**
 * Internal functionality to publish message to channel
 * v0/rust/servers/{server_id}/events/wiped
 *
 * @param message to publish
 * @param nc to publish with
 * @param codec used to convert messages
 * @param server_id parameter to use in topic
 * @param options to publish with
 */
export declare function publish(message: null, nc: Nats.NatsConnection, codec: Nats.Codec<any>, server_id: string, options?: Nats.PublishOptions): Promise<void>;
