"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
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
    }
}
exports.default = Routes;
//# sourceMappingURL=index.js.map