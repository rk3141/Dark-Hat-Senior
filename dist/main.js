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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const music_1 = __importDefault(require("./music"));
const Discord = __importStar(require("discord.js"));
const client = new Discord.Client();
client.once("ready", () => {
    console.log('Go!');
    client.user.setActivity("xhelp");
});
let subs = [];
client.setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield music_1.default("whitehat jr exposed");
    subs.forEach((sub) => {
        sub.send(`**${res.title}**\nLink: ${res.url}`);
    });
}), 360000);
client.on("message", (msg) => {
    if (msg.content == "xhelp") {
        msg.channel.send('\
`dssr-sub`: Subscribe hourly exposing\n\
`dssr-usub`: Unsubscribe\n\
`expose`: Expose\n\
');
    }
    if (msg.content == "dssr-sub") {
        if (subs.filter(u => u != msg.author) == []) {
            subs.push(msg.author);
            return msg.channel.send("**Subscribed!**");
        }
        return msg.channel.send("**You are already subscribed**");
    }
    if (msg.content == "dssr-usub") {
        const temp = subs.filter(u => u != msg.author);
        if (temp != subs) {
            msg.channel.send("Unsubscribed");
            subs = temp;
        }
    }
    if (msg.content != "expose") {
        return;
    }
    music_1.default("whitehat jr exposed")
        .then((res) => {
        msg.channel.send(`**${res.title}**\nLink: ${res.url}`);
    });
});
client.login("Nzg1MzkzOTU2NDc2MTU3OTcy.X83NHw.ith84FOg9Mmp4bgTdLKV5WKnWTs");
//# sourceMappingURL=main.js.map