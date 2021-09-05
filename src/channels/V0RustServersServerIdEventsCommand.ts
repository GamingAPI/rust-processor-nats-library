import {
  ServerCommand
} from '../models/ServerCommand';
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
 * Module which wraps functionality for the `v0/rust/servers/{server_id}/events/command` channel
 * @module v0RustServersServerIdEventsCommand
 */
/**
 * Internal functionality to publish message to channel 
 * v0/rust/servers/{server_id}/events/command
 * 
 * @param message to publish
 * @param client to publish with
 * @param server_id parameter to use in topic
 */
export function publish(
  message: ServerCommand,
  client: Client, server_id: string
): Promise < void > {
  return new Promise < void > (async (resolve, reject) => {
    try {
      let dataToSend: any = message.marshal();
      try {
        let beforeSendingHooks = Hooks.getInstance().getBeforeSendingDataHook();
        for (let hook of beforeSendingHooks) {
          dataToSend = hook(dataToSend);
        }
      } catch (e) {
        const error = NatsTypescriptTemplateError.errorForCode(ErrorCode.HOOK_ERROR, e);
        throw error;
      }
      await client.publish(`v0.rust.servers.${server_id}.events.command`, dataToSend);
      resolve();
    } catch (e) {
      reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e));
    }
  });
};