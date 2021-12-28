"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribe = void 0;
const ServerPlayerItemLoot_1 = require("../models/ServerPlayerItemLoot");
const NatsTypescriptTemplateError_1 = require("../NatsTypescriptTemplateError");
/**
 * Module which wraps functionality for the `v0/rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/loot` channel
 * @module v0RustServersServerIdPlayersSteamIdEventsItemsItemIdLoot
 */
/**
 * Internal functionality to setup subscription on the `v0/rust/servers/{server_id}/players/{steam_id}/events/items/{item_id}/loot` channel
 *
 * @param onDataCallback to call when messages are received
 * @param nc to subscribe with
 * @param codec used to convert messages
 * @param server_id parameter to use in topic
 * @param steam_id parameter to use in topic
 * @param item_id parameter to use in topic
 * @param options to subscribe with, bindings from the AsyncAPI document overwrite these if specified
 */
function subscribe(onDataCallback, nc, codec, server_id, steam_id, item_id, options) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        let subscribeOptions = Object.assign({}, options);
        subscribeOptions.queue = 'processing';
        try {
            let subscription = nc.subscribe(`v0.rust.servers.${server_id}.players.${steam_id}.events.items.${item_id}.loot`, subscribeOptions);
            (() => __awaiter(this, void 0, void 0, function* () {
                var e_1, _a;
                try {
                    for (var subscription_1 = __asyncValues(subscription), subscription_1_1; subscription_1_1 = yield subscription_1.next(), !subscription_1_1.done;) {
                        const msg = subscription_1_1.value;
                        const unmodifiedChannel = `v0.rust.servers.{server_id}.players.{steam_id}.events.items.{item_id}.loot`;
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
                        let receivedData = codec.decode(msg.data);
                        onDataCallback(undefined, ServerPlayerItemLoot_1.ServerPlayerItemLoot.unmarshal(receivedData), serverIdParam, steamIdParam, itemIdParam);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (subscription_1_1 && !subscription_1_1.done && (_a = subscription_1.return)) yield _a.call(subscription_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                console.log("subscription closed");
            }))();
            resolve(subscription);
        }
        catch (e) {
            reject(NatsTypescriptTemplateError_1.NatsTypescriptTemplateError.errorForCode(NatsTypescriptTemplateError_1.ErrorCode.INTERNAL_NATS_TS_ERROR, e));
        }
    }));
}
exports.subscribe = subscribe;
//# sourceMappingURL=V0RustServersServerIdPlayersSteamIdEventsItemsItemIdLoot.js.map