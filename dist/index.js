"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config_1 = __importDefault(require("config"));
const logger_1 = require("@utils/logger");
const index_1 = __importDefault(require("@server/index"));
function main() {
    logger_1.logger.info('API server made by J. Diego Sierra');
    logger_1.logger.info('Current environment: ' + process.env.NODE_ENV || "development");
    const server = index_1.default.init(config_1.default, logger_1.logger);
    server.start(() => { });
}
main();
//# sourceMappingURL=index.js.map