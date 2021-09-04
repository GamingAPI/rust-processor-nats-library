import {
  describe,
  it,
  before
} from 'mocha';
import {
  expect
} from 'chai';
import * as Client from '../../src'
import * as TestClient from '../../src/testclient'
import {
  NatsTypescriptTemplateError
} from '../../src/NatsTypescriptTemplateError';
describe('rust/servers/{server_id}/players/{steam_id}/events/chat can talk to itself', () => {
  var client: Client.NatsAsyncApiClient;
  var testClient: TestClient.NatsAsyncApiTestClient;
  before(async () => {
    client = new Client.NatsAsyncApiClient();
    testClient = new TestClient.NatsAsyncApiTestClient();
    const natsHost = process.env.NATS_HOST || "0.0.0.0"
    const natsPort = process.env.NATS_PORT || "4222"
    const natsUrl = `${natsHost}:${natsPort}`
    await client.connectToHost(natsUrl);
    await testClient.connectToHost(natsUrl);
  });
  it('can send message', async () => {
    var receivedError: NatsTypescriptTemplateError | undefined = undefined;
    var receivedMsg: TestClient.ChatMessage | undefined = undefined;
    var receivedServerId: string | undefined = undefinedvar receivedSteamId: string | undefined = undefined
    var publishMessage: Client.ChatMessage = Client.ChatMessage.unmarshal({
      "steam_id": "string",
      "player_name": "string",
      "raw_message": "string",
      "full_message": "string",
      "is_admin": true,
      "rank": 0,
      "title": "string",
      "timestamp": "2016-08-29T09:12:33.001Z"
    });
    var ServerIdToSend: string = "string"
    var SteamIdToSend: string = "string"
    const subscription = await testClient.subscribeToRustServersServerIdPlayersSteamIdEventsChat((err, msg, server_id, steam_id) => {
        receivedError = err;
        receivedMsg = msg;
        receivedServerId = server_idreceivedSteamId = steam_id
      }, ServerIdToSend, SteamIdToSend,
      true
    );
    const tryAndWaitForResponse = new Promise((resolve, reject) => {
      let isReturned = false;
      setTimeout(() => {
        if (!isReturned) {
          reject(new Error("Timeout"));
        }
      }, 3000)
      setInterval(async () => {
        if (subscription.getReceived() === 1) {
          resolve();
          isReturned = true
        }
      }, 100);
    });
    await client.publishToRustServersServerIdPlayersSteamIdEventsChat(publishMessage, ServerIdToSend, SteamIdToSend);
    await tryAndWaitForResponse;
    expect(receivedError).to.be.undefined;
    expect(receivedMsg).to.not.be.undefined;
    expect(receivedMsg!.marshal()).to.equal(publishMessage.marshal());
    expect(receivedServerId).to.be.equal(ServerIdToSend);
    expect(receivedSteamId).to.be.equal(SteamIdToSend);
  });
  after(async () => {
    await client.disconnect();
    await testClient.disconnect();
  });
});