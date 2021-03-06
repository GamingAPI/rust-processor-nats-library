import ServerPlayerItemCrafted from '../models/ServerPlayerItemCrafted';
import * as Nats from 'nats';
import {
  ErrorCode,
  NatsTypescriptTemplateError
} from '../NatsTypescriptTemplateError';
/**
 * Module which wraps functionality for the `v0/rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/crafted` channel
 * @module v0RustServersServerIdPlayersSteamIdEventsItemsItemIdCrafted
 */
/**
 * Internal functionality to setup subscription on the `v0/rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/crafted` channel 
 * 
 * @param onDataCallback to call when messages are received
 * @param nc to subscribe with
 * @param codec used to convert messages
 * @param server_id parameter to use in topic
 * @param steam_id parameter to use in topic
 * @param item_id parameter to use in topic
 * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
 */
export function subscribe(
  onDataCallback: (
    err ? : NatsTypescriptTemplateError,
    msg ? : ServerPlayerItemCrafted, server_id ? : string, steam_id ? : string, item_id ? : string) => void,
  nc: Nats.NatsConnection,
  codec: Nats.Codec < any > , server_id: string, steam_id: string, item_id: string,
  options ? : Nats.SubscriptionOptions
): Promise < Nats.Subscription > {
  return new Promise(async (resolve, reject) => {
    let subscribeOptions: Nats.SubscriptionOptions = {
      ...options
    };
    subscribeOptions.queue = 'processing';
    try {
      let subscription = nc.subscribe(`v0.rust.servers.${server_id}.players.${steam_id}.events.items.${item_id}.crafted`, subscribeOptions);
      (async () => {
        for await (const msg of subscription) {
          const unmodifiedChannel = `v0.rust.servers.{server_id}.players.{steam_id}.events.items.{item_id}.crafted`;
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
          let receivedData: any = codec.decode(msg.data);
          onDataCallback(undefined, ServerPlayerItemCrafted.unmarshal(receivedData), serverIdParam, steamIdParam, itemIdParam);
        }
        console.log("subscription closed");
      })();
      resolve(subscription);
    } catch (e: any) {
      reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e));
    }
  })
}