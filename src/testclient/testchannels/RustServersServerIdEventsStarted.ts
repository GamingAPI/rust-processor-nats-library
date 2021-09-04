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
 * Module which wraps functionality for the `rust/servers/{server_id}/events/started` channel
 * @module rustServersServerIdEventsStarted
 */
/**
 * Internal functionality to setup subscription on the `rust/servers/{server_id}/events/started` channel 
 * 
 * @param onDataCallback to call when messages are received
 * @param client to subscribe with
 * @param server_id parameter to use in topic
 * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
 */
export function subscribe(
  onDataCallback: (
    err ? : NatsTypescriptTemplateError,
    msg ? : null, server_id ? : string) => void,
  client: Client, server_id: string,
  options ? : SubscriptionOptions
): Promise < Subscription > {
  return new Promise(async (resolve, reject) => {
    let subscribeOptions: SubscriptionOptions = {
      ...options
    };
    try {
      let subscription = await client.subscribe(`rust.servers.${server_id}.events.started`, (err, msg) => {
        if (err) {
          onDataCallback(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, err));
        } else {
          const unmodifiedChannel = `rust.servers.{server_id}.events.started`;
          let channel = msg.subject;
          const serverIdSplit = unmodifiedChannel.split("{server_id}");
          const splits = [
            serverIdSplit[0],
            serverIdSplit[1]
          ];
          channel = channel.substring(splits[0].length);
          const serverIdEnd = channel.indexOf(splits[1]);
          const serverIdParam = "" + channel.substring(0, serverIdEnd);
          onDataCallback(undefined, null, serverIdParam);
        }
      }, subscribeOptions);
      resolve(subscription);
    } catch (e) {
      reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e));
    }
  })
}