"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const moment_1 = __importDefault(require("moment"));
const myFormat = winston_1.default.format.printf(({ level, message }) => {
    return `[${level}] ${moment_1.default().format('YYYY-MM-DD HH:mm:ss:SSS')} ${message}`;
});
exports.logger = winston_1.default.createLogger({
    format: winston_1.default.format.combine(winston_1.default.format.colorize(), myFormat),
    transports: [
        new winston_1.default.transports.File({
            level: 'debug',
            filename: './logs/debug.log',
            handleExceptions: true,
            maxsize: 5242880,
            maxFiles: 1
        }),
        new winston_1.default.transports.Console({
            level: 'silly'
        })
    ],
    exitOnError: false
});
//# sourceMappingURL=logger.js.map