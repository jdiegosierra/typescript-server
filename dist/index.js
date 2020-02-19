"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config_1 = __importDefault(require("config"));
console.log(config_1.default);
function main() {
}
main();
//# sourceMappingURL=index.js.map