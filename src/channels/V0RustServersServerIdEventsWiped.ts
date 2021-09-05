import {
  Client,
  NatsError,
  Subscription,
  SubscriptionOptions,
  Payload
} from 'ts-nats';
import {
  ErrorCode,
  NatsTypescriptTemplateError
} from '../NatsTypescriptTemplateError';
import {
  Hooks
} from '../hooks';
/**
 * Module which wraps functionality for the `v0/rust/servers/{server_id}/events/wiped` channel
 * @module v0RustServersServerIdEventsWiped
 */
/**
 * Internal functionality to publish message to channel 
 * v0/rust/servers/{server_id}/events/wiped
 * 
 * @param message to publish
 * @param client to publish with
 * @param server_id parameter to use in topic
 */
export function publish(
  message: null,
  client: Client, server_id: string
): Promise < void > {
  return new Promise < void > (async (resolve, reject) => {
    try {
      let dataToSend: any = message.marshal();
      await nc.publish(`v0.rust.servers.${server_id}.events.wiped`, null);
      resolve();
    } catch (e) {
      reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e));
    }
  });
};