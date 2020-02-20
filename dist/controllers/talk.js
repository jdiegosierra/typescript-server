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
Object.defineProperty(exports, "__esModule", { value: true });
const talks = [];
let id = 0;
const starttime = 36000;
const dayTime = [];
let roomId = 0;
let talkcontroller = {
    add: function (talk) {
        return __awaiter(this, void 0, void 0, function* () {
            talk.id = id;
            if (dayTime[talk.day][roomId]) {
                talk.start = dayTime[talk.day][roomId] + starttime;
                dayTime[talk.day][roomId] += talk.duration;
                if (dayTime[talk.day][roomId] + starttime > 72000) {
                    roomId += 1;
                }
            }
            else {
                talk.start = starttime;
                dayTime[roomId][talk.day] = talk.duration;
            }
            talk.roomId = roomId;
            talk.end = dayTime[roomId][talk.day] + starttime;
            console.log(talk);
            if (talks[talk.day] === undefined) {
                talks[talk.day] = [];
            }
            yield talks[talk.day].push(talk);
            id += 1;
            return true;
        });
    },
    get: function () {
        return __awaiter(this, void 0, void 0, function* () {
            return talks;
        });
    }
};
exports.default = talkcontroller;
//# sourceMappingURL=talk.js.map