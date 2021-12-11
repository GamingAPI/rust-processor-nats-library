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
describe('v0/rust/servers/{server_id}/events/wiped can talk to itself', () => {
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
    var receivedMsg: TestClient.null | undefined = undefined;
    var receivedServerId: string | undefined = undefined
    var publishMessage: Client.null = Client.null.unmarshal("");
    var ServerIdToSend: string = "string"
    const subscription = await testClient.subscribeToV0RustServersServerIdEventsWiped((err, msg, server_id) => {
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
          resolve(undefined);
          isReturned = true
        }
      }, 100);
    });
    await client.publishToV0RustServersServerIdEventsWiped(publishMessage, ServerIdToSend);
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