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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yt_search_1 = __importDefault(require("yt-search"));
function search(query) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield yt_search_1.default(query);
            if (!result.videos)
                return { title: "", url: "" };
            const video = result.videos[Math.floor(Math.random() * result.videos.length)];
            return {
                title: video.title,
                url: video.url,
            };
        }
        catch (_a) {
            console.error("Error");
        }
        return { title: "", url: "" };
    });
}
exports.default = search;
//# sourceMappingURL=music.js.map