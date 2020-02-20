"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Routes {
    constructor() {
        this.router = express_1.Router();
        this._routes();
        return this.router;
    }
    _routes() {
        this.router.get('/test', () => {
            console.log("elelelelele");
        });
    }
}
exports.default = Routes;
//# sourceMappingURL=index.js.map