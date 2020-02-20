"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("../controllers/auth"));
let auth = {
    login: function (_req, res) {
        res.status(200).send(auth_1.default.login('diego', 'password'));
    },
    verifyToken: function (req, res, next) {
        console.log('Token válido');
        next();
    }
};
exports.default = auth;
//# sourceMappingURL=auth.js.map