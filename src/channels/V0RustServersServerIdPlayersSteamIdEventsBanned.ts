import {
  ServerPlayerBanned
} from '../models/ServerPlayerBanned';
import * as Nats from 'nats';
import {
  ErrorCode,
  NatsTypescriptTemplateError
} from '../NatsTypescriptTemplateError';
/**
 * Module which wraps functionality for the `v0/rust/servers/{server_id}/players/{steam_id}/events/banned` channel
 * @module v0RustServersServerIdPlayersSteamIdEventsBanned
 */
/**
 * Internal functionality to publish message to channel 
 * v0/rust/servers/{server_id}/players/{steam_id}/events/banned
 * 
 * @param message to publish
 * @param nc to publish with
 * @param codec used to convert messages
 * @param server_id parameter to use in topic
 * @param steam_id parameter to use in topic
 * @param options to publish with
 */
export function publish(
  message: ServerPlayerBanned,
  nc: Nats.NatsConnection,
  codec: Nats.Codec < any > , server_id: string, steam_id: string,
  options ? : Nats.PublishOptions
): Promise < void > {
  return new Promise < void > (async (resolve, reject) => {
    try {
      let dataToSend: any = message.marshal();
      dataToSend = codec.encode(dataToSend);
      nc.publish(`v0.rust.servers.${server_id}.players.${steam_id}.events.banned`, dataToSend, options);
      resolve();
    } catch (e: any) {
      reject(NatsTypescriptTemplateError.errorForCode(ErrorCode.INTERNAL_NATS_TS_ERROR, e));
    }
  });
};