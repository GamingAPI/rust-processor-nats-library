import {
  ServerPlayerBanned
} from '../../models/ServerPlayerBanned';
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
 * Module which wraps functionality for the `v0/rust/servers/{server_id}/players/{steam_id}/events/banned` channel
 * @module v0RustServersServerIdPlayersSteamIdEventsBanned
 */
/**
 * Internal functionality to setup subscription on the `v0/rust/servers/{server_id}/players/{steam_id}/events/banned` channel 
 * 
 * @param onDataCallback to call when messages are received
 * @param client to subscribe with
 * @param server_id parameter to use in topic
 * @param steam_id parameter to use in topic
 * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
 */
export function subscribe(
  onDataCallback: (
    err ? : NatsTypescriptTemplateError,
    msg ? : ServerPlayerBanned, server_id ? : string, steam_id ? : string) => void,
  client: Client, server_id: string, steam_id: string,
  options ? : SubscriptionOptions
): Promise < Subscription > {
  return new Promise(async (resolve, reject) => {
    let subscribeOptions: SubscriptionOptions = {
      ...options
    };
    try {
      let subscription = await client.subscribe(`v0.rust.servers.${server_id}.players.${steam_id}.events.banned`, (err, msg) => {
        if (err) {
          onDataCallback(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, err));
        } else {
          const unmodifiedChannel = `v0.rust.servers.{server_id}.players.{steam_id}.events.banned`;
          let channel = msg.subject;
          const serverIdSplit = unmodifiedChannel.split("{server_id}");
          const steamIdSplit = serverIdSplit[1].split("{steam_id}");
          const splits = [
            serverIdSplit[0],
            steamIdSplit[0],
            steamIdSplit[1]
          ];
          channel = channel.substring(splits[0].length);
          const serverIdEnd = channel.indexOf(splits[1]);
          const serverIdParam = "" + channel.substring(0, serverIdEnd);
          channel = channel.substring(serverIdEnd + splits[1].length);
          const steamIdEnd = channel.indexOf(splits[2]);
          const steamIdParam = "" + channel.substring(0, steamIdEnd);
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
          onDataCallback(undefined, ServerPlayerBanned.unmarshal(receivedData), serverIdParam, steamIdParam);
        }
      }, subscribeOptions);
      resolve(subscription);
    } catch (e) {
      reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e));
    }
  })
}