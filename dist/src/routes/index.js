"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const test_1 = __importDefault(require("./test"));
class Routes {
    constructor() {
        this.router = express_1.Router();
        this._routes();
        return this.router;
    }
    _routes() {
        this.router.post('/login', auth_1.default.login);
        this.router.get('/test', auth_1.default.verifyToken, test_1.default.test);
    }
}
exports.default = Routes;
//# sourceMappingURL=index.js.map