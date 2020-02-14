"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const { createLogger, format, transports } = winston_1.default;
const { combine, timestamp, label, printf, colorize } = format;
var moment = require('moment');
const myFormat = winston_1.default.format.printf(({ level, message, label, timestamp }) => {
    return `[${level}] ${moment().format('YYYY-MM-DD HH:mm:ss:SSS')} ${message}`;
});
const logger = winston_1.default.createLogger({
    format: winston_1.default.format.combine(colorize(), myFormat),
    transports: [
        new winston_1.default.transports.File({
            level: 'debug',
            filename: './logs/debug.log',
            handleExceptions: true,
            maxsize: 5242880,
            maxFiles: 1
        }),
        new winston_1.default.transports.Console({
            level: 'silly',
            colorize: true
        })
    ],
    exitOnError: false,
});
exports.default = logger;
exports.stream = {
    write: function (message) {
        logger.info(message);
    }
};
//# sourceMappingURL=logger.js.map