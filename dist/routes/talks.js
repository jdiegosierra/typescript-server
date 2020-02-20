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
const talk_1 = __importDefault(require("../controllers/talk"));
let talks = {
    add: function (req, res) {
        let talk = req.body.talk;
        if (talk_1.default.add(talk)) {
            res.status(200).send('okey');
        }
        else {
            res.status(400).send('error');
        }
    },
    get: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const talksData = yield talk_1.default.get();
            if (talksData) {
                res.status(200).json(talksData);
            }
            else {
                res.status(404).send('error');
            }
        });
    }
};
exports.default = talks;
//# sourceMappingURL=talks.js.map