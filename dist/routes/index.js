"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("@controllers/index"));
class Routes {
    constructor() {
        this.router = express_1.Router();
        this._routes();
    }
    ;
    getV1Routes() {
        return this.router;
    }
    ;
    _routes() {
        this.router.get('/ping', (_req, res) => {
            res.send('pong');
        });
        this.router.post('/login', index_1.default.auth.login);
    }
}
exports.default = Routes;
//# sourceMappingURL=index.js.map