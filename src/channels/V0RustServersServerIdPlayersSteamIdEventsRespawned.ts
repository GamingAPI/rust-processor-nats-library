import ServerPlayerRespawned from '../models/ServerPlayerRespawned';
import * as Nats from 'nats';
import {
  ErrorCode,
  NatsTypescriptTemplateError
} from '../NatsTypescriptTemplateError';
/**
 * Module which wraps functionality for the `v0/rust/servers/{server_id}/players/{steam_id}/events/respawned` channel
 * @module v0RustServersServerIdPlayersSteamIdEventsRespawned
 */
/**
 * Internal functionality to setup subscription on the `v0/rust/servers/{server_id}/players/{steam_id}/events/respawned` channel 
 * 
 * @param onDataCallback to call when messages are received
 * @param nc to subscribe with
 * @param codec used to convert messages
 * @param server_id parameter to use in topic
 * @param steam_id parameter to use in topic
 * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
 */
export function subscribe(
  onDataCallback: (
    err ? : NatsTypescriptTemplateError,
    msg ? : ServerPlayerRespawned, server_id ? : string, steam_id ? : string) => void,
  nc: Nats.NatsConnection,
  codec: Nats.Codec < any > , server_id: string, steam_id: string,
  options ? : Nats.SubscriptionOptions
): Promise < Nats.Subscription > {
  return new Promise(async (resolve, reject) => {
    let subscribeOptions: Nats.SubscriptionOptions = {
      ...options
    };
    subscribeOptions.queue = 'processing';
    try {
      let subscription = nc.subscribe(`v0.rust.servers.${server_id}.players.${steam_id}.events.respawned`, subscribeOptions);
      (async () => {
        for await (const msg of subscription) {
          const unmodifiedChannel = `v0.rust.servers.{server_id}.players.{steam_id}.events.respawned`;
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
          let receivedData: any = codec.decode(msg.data);
          onDataCallback(undefined, ServerPlayerRespawned.unmarshal(receivedData), serverIdParam, steamIdParam);
        }
        console.log("subscription closed");
      })();
      resolve(subscription);
    } catch (e: any) {
      reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e));
    }
  })
}