import {
  ServerPlayerItemLoot
} from '../models/ServerPlayerItemLoot';
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
 * Module which wraps functionality for the `rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/loot` channel
 * @module rustServersServerIdPlayersSteamIdEventsItemsItemIdLoot
 */
/**
 * Internal functionality to publish message to channel 
 * rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/loot
 * 
 * @param message to publish
 * @param client to publish with
 * @param server_id parameter to use in topic
 * @param steam_id parameter to use in topic
 * @param item_id parameter to use in topic
 */
export function publish(
  message: ServerPlayerItemLoot,
  client: Client, server_id: string, steam_id: string, item_id: string
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
      await client.publish(`rust.servers.${server_id}.players.${steam_id}.events.items.${item_id}.loot`, dataToSend);
      resolve();
    } catch (e) {
      reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e));
    }
  });
};