import * as Nats from 'nats';
import {
  ErrorCode,
  NatsTypescriptTemplateError
} from '../NatsTypescriptTemplateError';
/**
 * Module which wraps functionality for the `v0/rust/servers/{server_id}/events/stopping` channel
 * @module v0RustServersServerIdEventsStopping
 */
/**
 * Internal functionality to publish message to channel 
 * v0/rust/servers/{server_id}/events/stopping
 * 
 * @param message to publish
 * @param nc to publish with
 * @param codec used to convert messages
 * @param server_id parameter to use in topic
 * @param options to publish with
 */
export function publish(
  message: null,
  nc: Nats.NatsConnection,
  codec: Nats.Codec < any > , server_id: string,
  options ? : Nats.PublishOptions
): Promise < void > {
  return new Promise < void > (async (resolve, reject) => {
    try {
      await nc.publish(`v0.rust.servers.${server_id}.events.stopping`, Nats.Empty);
      resolve();
    } catch (e: any) {
      reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e));
    }
  });
};