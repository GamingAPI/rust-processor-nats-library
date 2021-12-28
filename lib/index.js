"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatsAsyncApiClient = exports.TestClient = exports.NatsTypescriptTemplateError = exports.ErrorCode = exports.ChatMessage = exports.ServerPlayerBanned = exports.ServerPlayerUnbanned = exports.ServerPlayerReported = exports.ServerCommand = exports.ServerPlayerItemCrafted = exports.ServerPlayerItemLoot = exports.ServerPlayerItemPickup = exports.ServerPlayerCombatPlayerhit = exports.ServerPlayerRespawned = exports.ServerPlayerResourceGathered = exports.ServerPlayerDisconnected = exports.ServerPlayerConnected = exports.v0RustServersServerIdPlayersSteamIdEventsChatChannel = exports.v0RustServersServerIdPlayersSteamIdEventsBannedChannel = exports.v0RustServersServerIdPlayersSteamIdEventsUnbannedChannel = exports.v0RustServersServerIdPlayersSteamIdEventsReportedChannel = exports.v0RustServersServerIdEventsCommandChannel = exports.v0RustServersServerIdPlayersSteamIdEventsItemsItemIdCraftedChannel = exports.v0RustServersServerIdPlayersSteamIdEventsItemsItemIdLootChannel = exports.v0RustServersServerIdPlayersSteamIdEventsItemsItemIdPickupChannel = exports.v0RustServersServerIdPlayersSteamIdEventsCombatPlayerhitChannel = exports.v0RustServersServerIdPlayersSteamIdEventsRespawnedChannel = exports.v0RustServersServerIdPlayersSteamIdEventsResourcesGatheredChannel = exports.v0RustServersServerIdPlayersSteamIdEventsDisconnectedChannel = exports.v0RustServersServerIdPlayersSteamIdEventsConnectedChannel = exports.v0RustServersServerIdEventsStoppingChannel = exports.v0RustServersServerIdEventsStartedChannel = exports.v0RustServersServerIdEventsWipedChannel = void 0;
const TestClient = __importStar(require("./testclient/"));
exports.TestClient = TestClient;
const NatsTypescriptTemplateError_1 = require("./NatsTypescriptTemplateError");
Object.defineProperty(exports, "ErrorCode", { enumerable: true, get: function () { return NatsTypescriptTemplateError_1.ErrorCode; } });
Object.defineProperty(exports, "NatsTypescriptTemplateError", { enumerable: true, get: function () { return NatsTypescriptTemplateError_1.NatsTypescriptTemplateError; } });
const Nats = __importStar(require("nats"));
const v0RustServersServerIdEventsWipedChannel = __importStar(require("./channels/V0RustServersServerIdEventsWiped"));
exports.v0RustServersServerIdEventsWipedChannel = v0RustServersServerIdEventsWipedChannel;
const v0RustServersServerIdEventsStartedChannel = __importStar(require("./channels/V0RustServersServerIdEventsStarted"));
exports.v0RustServersServerIdEventsStartedChannel = v0RustServersServerIdEventsStartedChannel;
const v0RustServersServerIdEventsStoppingChannel = __importStar(require("./channels/V0RustServersServerIdEventsStopping"));
exports.v0RustServersServerIdEventsStoppingChannel = v0RustServersServerIdEventsStoppingChannel;
const v0RustServersServerIdPlayersSteamIdEventsConnectedChannel = __importStar(require("./channels/V0RustServersServerIdPlayersSteamIdEventsConnected"));
exports.v0RustServersServerIdPlayersSteamIdEventsConnectedChannel = v0RustServersServerIdPlayersSteamIdEventsConnectedChannel;
const v0RustServersServerIdPlayersSteamIdEventsDisconnectedChannel = __importStar(require("./channels/V0RustServersServerIdPlayersSteamIdEventsDisconnected"));
exports.v0RustServersServerIdPlayersSteamIdEventsDisconnectedChannel = v0RustServersServerIdPlayersSteamIdEventsDisconnectedChannel;
const v0RustServersServerIdPlayersSteamIdEventsResourcesGatheredChannel = __importStar(require("./channels/V0RustServersServerIdPlayersSteamIdEventsResourcesGathered"));
exports.v0RustServersServerIdPlayersSteamIdEventsResourcesGatheredChannel = v0RustServersServerIdPlayersSteamIdEventsResourcesGatheredChannel;
const v0RustServersServerIdPlayersSteamIdEventsRespawnedChannel = __importStar(require("./channels/V0RustServersServerIdPlayersSteamIdEventsRespawned"));
exports.v0RustServersServerIdPlayersSteamIdEventsRespawnedChannel = v0RustServersServerIdPlayersSteamIdEventsRespawnedChannel;
const v0RustServersServerIdPlayersSteamIdEventsCombatPlayerhitChannel = __importStar(require("./channels/V0RustServersServerIdPlayersSteamIdEventsCombatPlayerhit"));
exports.v0RustServersServerIdPlayersSteamIdEventsCombatPlayerhitChannel = v0RustServersServerIdPlayersSteamIdEventsCombatPlayerhitChannel;
const v0RustServersServerIdPlayersSteamIdEventsItemsItemIdPickupChannel = __importStar(require("./channels/V0RustServersServerIdPlayersSteamIdEventsItemsItemIdPickup"));
exports.v0RustServersServerIdPlayersSteamIdEventsItemsItemIdPickupChannel = v0RustServersServerIdPlayersSteamIdEventsItemsItemIdPickupChannel;
const v0RustServersServerIdPlayersSteamIdEventsItemsItemIdLootChannel = __importStar(require("./channels/V0RustServersServerIdPlayersSteamIdEventsItemsItemIdLoot"));
exports.v0RustServersServerIdPlayersSteamIdEventsItemsItemIdLootChannel = v0RustServersServerIdPlayersSteamIdEventsItemsItemIdLootChannel;
const v0RustServersServerIdPlayersSteamIdEventsItemsItemIdCraftedChannel = __importStar(require("./channels/V0RustServersServerIdPlayersSteamIdEventsItemsItemIdCrafted"));
exports.v0RustServersServerIdPlayersSteamIdEventsItemsItemIdCraftedChannel = v0RustServersServerIdPlayersSteamIdEventsItemsItemIdCraftedChannel;
const v0RustServersServerIdEventsCommandChannel = __importStar(require("./channels/V0RustServersServerIdEventsCommand"));
exports.v0RustServersServerIdEventsCommandChannel = v0RustServersServerIdEventsCommandChannel;
const v0RustServersServerIdPlayersSteamIdEventsReportedChannel = __importStar(require("./channels/V0RustServersServerIdPlayersSteamIdEventsReported"));
exports.v0RustServersServerIdPlayersSteamIdEventsReportedChannel = v0RustServersServerIdPlayersSteamIdEventsReportedChannel;
const v0RustServersServerIdPlayersSteamIdEventsUnbannedChannel = __importStar(require("./channels/V0RustServersServerIdPlayersSteamIdEventsUnbanned"));
exports.v0RustServersServerIdPlayersSteamIdEventsUnbannedChannel = v0RustServersServerIdPlayersSteamIdEventsUnbannedChannel;
const v0RustServersServerIdPlayersSteamIdEventsBannedChannel = __importStar(require("./channels/V0RustServersServerIdPlayersSteamIdEventsBanned"));
exports.v0RustServersServerIdPlayersSteamIdEventsBannedChannel = v0RustServersServerIdPlayersSteamIdEventsBannedChannel;
const v0RustServersServerIdPlayersSteamIdEventsChatChannel = __importStar(require("./channels/V0RustServersServerIdPlayersSteamIdEventsChat"));
exports.v0RustServersServerIdPlayersSteamIdEventsChatChannel = v0RustServersServerIdPlayersSteamIdEventsChatChannel;
const ServerPlayerConnected_1 = require("./models/ServerPlayerConnected");
Object.defineProperty(exports, "ServerPlayerConnected", { enumerable: true, get: function () { return ServerPlayerConnected_1.ServerPlayerConnected; } });
const ServerPlayerDisconnected_1 = require("./models/ServerPlayerDisconnected");
Object.defineProperty(exports, "ServerPlayerDisconnected", { enumerable: true, get: function () { return ServerPlayerDisconnected_1.ServerPlayerDisconnected; } });
const ServerPlayerResourceGathered_1 = require("./models/ServerPlayerResourceGathered");
Object.defineProperty(exports, "ServerPlayerResourceGathered", { enumerable: true, get: function () { return ServerPlayerResourceGathered_1.ServerPlayerResourceGathered; } });
const ServerPlayerRespawned_1 = require("./models/ServerPlayerRespawned");
Object.defineProperty(exports, "ServerPlayerRespawned", { enumerable: true, get: function () { return ServerPlayerRespawned_1.ServerPlayerRespawned; } });
const ServerPlayerCombatPlayerhit_1 = require("./models/ServerPlayerCombatPlayerhit");
Object.defineProperty(exports, "ServerPlayerCombatPlayerhit", { enumerable: true, get: function () { return ServerPlayerCombatPlayerhit_1.ServerPlayerCombatPlayerhit; } });
const ServerPlayerItemPickup_1 = require("./models/ServerPlayerItemPickup");
Object.defineProperty(exports, "ServerPlayerItemPickup", { enumerable: true, get: function () { return ServerPlayerItemPickup_1.ServerPlayerItemPickup; } });
const ServerPlayerItemLoot_1 = require("./models/ServerPlayerItemLoot");
Object.defineProperty(exports, "ServerPlayerItemLoot", { enumerable: true, get: function () { return ServerPlayerItemLoot_1.ServerPlayerItemLoot; } });
const ServerPlayerItemCrafted_1 = require("./models/ServerPlayerItemCrafted");
Object.defineProperty(exports, "ServerPlayerItemCrafted", { enumerable: true, get: function () { return ServerPlayerItemCrafted_1.ServerPlayerItemCrafted; } });
const ServerCommand_1 = require("./models/ServerCommand");
Object.defineProperty(exports, "ServerCommand", { enumerable: true, get: function () { return ServerCommand_1.ServerCommand; } });
const ServerPlayerReported_1 = require("./models/ServerPlayerReported");
Object.defineProperty(exports, "ServerPlayerReported", { enumerable: true, get: function () { return ServerPlayerReported_1.ServerPlayerReported; } });
const ServerPlayerUnbanned_1 = require("./models/ServerPlayerUnbanned");
Object.defineProperty(exports, "ServerPlayerUnbanned", { enumerable: true, get: function () { return ServerPlayerUnbanned_1.ServerPlayerUnbanned; } });
const ServerPlayerBanned_1 = require("./models/ServerPlayerBanned");
Object.defineProperty(exports, "ServerPlayerBanned", { enumerable: true, get: function () { return ServerPlayerBanned_1.ServerPlayerBanned; } });
const ChatMessage_1 = require("./models/ChatMessage");
Object.defineProperty(exports, "ChatMessage", { enumerable: true, get: function () { return ChatMessage_1.ChatMessage; } });
/**
 * @class NatsAsyncApiClient
 *
 * The generated client based on your AsyncAPI document.
 */
class NatsAsyncApiClient {
    /**
     * Try to connect to the NATS server with the different payloads.
     * @param options to use, payload is omitted if sat in the AsyncAPI document.
     */
    connect(options, codec) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed()) {
                return reject('Client is still connected, please close it first.');
            }
            this.options = options;
            if (codec) {
                this.codec = codec;
            }
            else {
                this.codec = Nats.JSONCodec();
            }
            try {
                this.nc = yield Nats.connect(this.options);
                resolve();
            }
            catch (e) {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.INTERNAL_NATS_TS_ERROR, e));
            }
        }));
    }
    /**
     * Disconnect all clients from the server
     */
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined) {
                yield this.nc.drain();
            }
        });
    }
    /**
     * Returns whether or not any of the clients are closed
     */
    isClosed() {
        if (!this.nc || this.nc.isClosed()) {
            return true;
        }
        return false;
    }
    /**
     * Try to connect to the NATS server with user credentials
     *
     * @param userCreds to use
     * @param options to connect with
     */
    connectWithUserCreds(userCreds, options, codec) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect(Object.assign({ user: userCreds }, options), codec);
        });
    }
    /**
     * Try to connect to the NATS server with user and password
     *
     * @param user username to use
     * @param pass password to use
     * @param options to connect with
     */
    connectWithUserPass(user, pass, options, codec) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect(Object.assign({ user: user, pass: pass }, options), codec);
        });
    }
    /**
     * Try to connect to the NATS server which has no authentication
     
      * @param host to connect to
      * @param options to connect with
      */
    connectToHost(host, options, codec) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect(Object.assign({ servers: [host] }, options), codec);
        });
    }
    /**
     * Connects the client to the AsyncAPI server called production.
     * Test broker
     */
    connectToProduction(codec) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect({
                servers: ["test.nats.org:{port}"]
            }, codec);
        });
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/events/wiped`
     *
     * Channel for the API to process when a server has just wiped
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdEventsWiped(onDataCallback, server_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdEventsWipedChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/events/started`
     *
     * Channel for the API to process for when a server has started
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdEventsStarted(onDataCallback, server_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdEventsStartedChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/events/stopping`
     *
     * Channel for the API to process for when a server is about to stop (cant send information if already stopped)
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdEventsStopping(onDataCallback, server_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdEventsStoppingChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/connected`
     *
     * Channel for the API to process for when a player connects to a server
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsConnected(onDataCallback, server_id, steam_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdPlayersSteamIdEventsConnectedChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, steam_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/disconnected`
     *
     * Channel for the API to process for when a player disconnects from a server
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsDisconnected(onDataCallback, server_id, steam_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdPlayersSteamIdEventsDisconnectedChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, steam_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/resourcesGathered`
     *
     * Channel for the API to process for when a player gathers some resources
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsResourcesGathered(onDataCallback, server_id, steam_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdPlayersSteamIdEventsResourcesGatheredChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, steam_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/respawned`
     *
     * Channel for the API to process for when a player respawn
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsRespawned(onDataCallback, server_id, steam_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdPlayersSteamIdEventsRespawnedChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, steam_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/combat/playerhit`
     *
     * Channel for the API to process for when a player hits another player
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsCombatPlayerhit(onDataCallback, server_id, steam_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdPlayersSteamIdEventsCombatPlayerhitChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, steam_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/pickup`
     *
     * Channel for the API to process for when a player pickup items ingame
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param item_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsItemsItemIdPickup(onDataCallback, server_id, steam_id, item_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdPlayersSteamIdEventsItemsItemIdPickupChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, steam_id, item_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/loot`
     *
     * Channel for the API to process for when a player loots an item ingame
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param item_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsItemsItemIdLoot(onDataCallback, server_id, steam_id, item_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdPlayersSteamIdEventsItemsItemIdLootChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, steam_id, item_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/crafted`
     *
     * Channel for the API to process for when a player crafts items ingame
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param item_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsItemsItemIdCrafted(onDataCallback, server_id, steam_id, item_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdPlayersSteamIdEventsItemsItemIdCraftedChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, steam_id, item_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/events/command`
     *
     * Channel for the API to process for when a server command is run
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdEventsCommand(onDataCallback, server_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdEventsCommandChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/reported`
     *
     * Channel for the API to process for when a player is reported
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsReported(onDataCallback, server_id, steam_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdPlayersSteamIdEventsReportedChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, steam_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/unbanned`
     *
     * Channel for notifying a server unbanned a player
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsUnbanned(onDataCallback, server_id, steam_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdPlayersSteamIdEventsUnbannedChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, steam_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/banned`
     *
     * Channel for notifying a server banned a player
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsBanned(onDataCallback, server_id, steam_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdPlayersSteamIdEventsBannedChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, steam_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
    /**
     * Subscribe to the `v0/rust/servers/{server_id}/players/{steam_id}/events/chat`
     *
     * Channel for when a player chats ingame
     *
     * @param onDataCallback to call when messages are received
     * @param server_id parameter to use in topic
     * @param steam_id parameter to use in topic
     * @param flush ensure client is force flushed after subscribing
     * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
     */
    subscribeToV0RustServersServerIdPlayersSteamIdEventsChat(onDataCallback, server_id, steam_id, flush, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isClosed() && this.nc !== undefined && this.codec !== undefined) {
                try {
                    const sub = yield v0RustServersServerIdPlayersSteamIdEventsChatChannel.subscribe(onDataCallback, this.nc, this.codec, server_id, steam_id, options);
                    if (flush) {
                        yield this.nc.flush();
                    }
                    resolve(sub);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.NOT_CONNECTED));
            }
        }));
    }
}
exports.NatsAsyncApiClient = NatsAsyncApiClient;
//# sourceMappingURL=index.js.map