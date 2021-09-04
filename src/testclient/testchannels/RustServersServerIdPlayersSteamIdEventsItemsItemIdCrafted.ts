import {
  ServerPlayerItemCrafted
} from '../../models/ServerPlayerItemCrafted';
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
} from '../../NatsTypescriptTemplateError';
import {
  Hooks
} from '../../hooks';
/**
 * Module which wraps functionality for the `rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/crafted` channel
 * @module rustServersServerIdPlayersSteamIdEventsItemsItemIdCrafted
 */
/**
 * Internal functionality to setup subscription on the `rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/crafted` channel 
 * 
 * @param onDataCallback to call when messages are received
 * @param client to subscribe with
 * @param server_id parameter to use in topic
 * @param steam_id parameter to use in topic
 * @param item_id parameter to use in topic
 * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
 */
export function subscribe(
  onDataCallback: (
    err ? : NatsTypescriptTemplateError,
    msg ? : ServerPlayerItemCrafted, server_id ? : string, steam_id ? : string, item_id ? : string) => void,
  client: Client, server_id: string, steam_id: string, item_id: string,
  options ? : SubscriptionOptions
): Promise < Subscription > {
  return new Promise(async (resolve, reject) => {
    let subscribeOptions: SubscriptionOptions = {
      ...options
    };
    try {
      let subscription = await client.subscribe(`rust.servers.${server_id}.players.${steam_id}.events.items.${item_id}.crafted`, (err, msg) => {
        if (err) {
          onDataCallback(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, err));
        } else {
          const unmodifiedChannel = `rust.servers.{server_id}.players.{steam_id}.events.items.{item_id}.crafted`;
          let channel = msg.subject;
          const serverIdSplit = unmodifiedChannel.split("{server_id}");
          const steamIdSplit = serverIdSplit[1].split("{steam_id}");
          const itemIdSplit = steamIdSplit[1].split("{item_id}");
          const splits = [
            serverIdSplit[0], steamIdSplit[0],
            itemIdSplit[0],
            itemIdSplit[1]
          ];
          channel = channel.substring(splits[0].length);
          const serverIdEnd = channel.indexOf(splits[1]);
          const serverIdParam = "" + channel.substring(0, serverIdEnd);
          channel = channel.substring(serverIdEnd + splits[1].length);
          const steamIdEnd = channel.indexOf(splits[2]);
          const steamIdParam = "" + channel.substring(0, steamIdEnd);
          channel = channel.substring(steamIdEnd + splits[2].length);
          const itemIdEnd = channel.indexOf(splits[3]);
          const itemIdParam = "" + channel.substring(0, itemIdEnd);
          let receivedData: any = msg.data;
          try {
            try {
              let receivedDataHooks = Hooks.getInstance().getReceivedDataHook();
              for (let hook of receivedDataHooks) {
                receivedData = hook(receivedData);
              }
              undefined
            } catch (e) {
              const error = NatsTypescriptTemplateError.errorForCode(ErrorCode.HOOK_ERROR, e);
              throw error;
            }
          } catch (e) {
            onDataCallback(e)
            return;
          }
          onDataCallback(undefined, ServerPlayerItemCrafted.unmarshal(receivedData), serverIdParam, steamIdParam, itemIdParam);
        }
      }, subscribeOptions);
      resolve(subscription);
    } catch (e) {
      reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e));
    }
  })
}