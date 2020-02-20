"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("../controllers/test"));
let test = {
    test: function (_req, res) {
        res.status(200).send(test_1.default.test());
    }
};
exports.default = test;
//# sourceMappingURL=test.js.map