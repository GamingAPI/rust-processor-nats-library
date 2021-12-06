import {
  ServerCommand
} from '../../models/ServerCommand';
import * as Nats from 'nats';
import {
  ErrorCode,
  NatsTypescriptTemplateError
} from '../../NatsTypescriptTemplateError';
/**
 * Module which wraps functionality for the `v0/rust/servers/{server_id}/events/command` channel
 * @module v0RustServersServerIdEventsCommand
 */
/**
 * Internal functionality to setup subscription on the `v0/rust/servers/{server_id}/events/command` channel 
 * 
 * @param onDataCallback to call when messages are received
 * @param nc to subscribe with
 * @param codec used to convert messages
 * @param server_id parameter to use in topic
 * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
 */
export function subscribe(
  onDataCallback: (
    err ? : NatsTypescriptTemplateError,
    msg ? : ServerCommand, server_id ? : string) => void,
  nc: Nats.NatsConnection,
  codec: Nats.Codec < any > , server_id: string,
  options ? : Nats.SubscriptionOptions
): Promise < Nats.Subscription > {
  return new Promise(async (resolve, reject) => {
    let subscribeOptions: Nats.SubscriptionOptions = {
      ...options
    };
    try {
      let subscription = nc.subscribe(`v0.rust.servers.${server_id}.events.command`, subscribeOptions);
      (async () => {
        for await (const msg of subscription) {
          const unmodifiedChannel = `v0.rust.servers.{server_id}.events.command`;
          let channel = msg.subject;
          const serverIdSplit = unmodifiedChannel.split("{server_id}");
          const splits = [
            serverIdSplit[0],
            serverIdSplit[1]
          ];
          channel = channel.substring(splits[0].length);
          const serverIdEnd = channel.indexOf(splits[1]);
          const serverIdParam = "" + channel.substring(0, serverIdEnd);
          let receivedData: any = codec.decode(msg.data);
          onDataCallback(undefined, ServerCommand.unmarshal(receivedData), serverIdParam);
        }
        console.log("subscription closed");
      })();
      resolve(subscription);
    } catch (e: any) {
      reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e));
    }
  })
}