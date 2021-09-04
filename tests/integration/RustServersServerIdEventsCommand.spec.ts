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
describe('rust/servers/{server_id}/events/command can talk to itself', () => {
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
    var receivedMsg: TestClient.ServerCommand | undefined = undefined;
    var receivedServerId: string | undefined = undefined
    var publishMessage: Client.ServerCommand = Client.ServerCommand.unmarshal({
      "command": "string",
      "arguments": "string",
      "steam_id": "string",
      "timestamp": "2016-08-29T09:12:33.001Z"
    });
    var ServerIdToSend: string = "string"
    const subscription = await testClient.subscribeToRustServersServerIdEventsCommand((err, msg, server_id) => {
        receivedError = err;
        receivedMsg = msg;
        receivedServerId = server_id
      }, ServerIdToSend,
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
    await client.publishToRustServersServerIdEventsCommand(publishMessage, ServerIdToSend);
    await tryAndWaitForResponse;
    expect(receivedError).to.be.undefined;
    expect(receivedMsg).to.not.be.undefined;
    expect(receivedMsg!.marshal()).to.equal(publishMessage.marshal());
    expect(receivedServerId).to.be.equal(ServerIdToSend);
  });
  after(async () => {
    await client.disconnect();
    await testClient.disconnect();
  });
});