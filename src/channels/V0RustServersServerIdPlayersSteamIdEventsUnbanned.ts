import {
  ServerPlayerUnbanned
} from '../models/ServerPlayerUnbanned';
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
 * Module which wraps functionality for the `v0/rust/servers/{server_id}/players/{steam_id}/events/unbanned` channel
 * @module v0RustServersServerIdPlayersSteamIdEventsUnbanned
 */
/**
 * Internal functionality to publish message to channel 
 * v0/rust/servers/{server_id}/players/{steam_id}/events/unbanned
 * 
 * @param message to publish
 * @param client to publish with
 * @param server_id parameter to use in topic
 * @param steam_id parameter to use in topic
 */
export function publish(
  message: ServerPlayerUnbanned,
  client: Client, server_id: string, steam_id: string
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
      await client.publish(`v0.rust.servers.${server_id}.players.${steam_id}.events.unbanned`, dataToSend);
      resolve();
    } catch (e) {
      reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e));
    }
  });
};