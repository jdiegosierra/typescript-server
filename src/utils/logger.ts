import winston from "winston";
const { createLogger, format, transports } = winston
const { combine, timestamp, label, printf, colorize } = format

var moment = require('moment');

const myFormat = winston.format.printf(({ level, message, label, timestamp }) => {
  return `[${level}] ${moment().format('YYYY-MM-DD HH:mm:ss:SSS')} ${message}`;
});

const logger = winston.createLogger({
  format: winston.format.combine(
    colorize(),
    // winston.format.label({ label: 'right meow!' }),
    // winston.format.timestamp(),
    // winston.format.splat(),
    // winston.format.simple(),
    myFormat
    // ${timestamp} [${label}] ${level}: ${message}
    // winston.format.level 
  ),
  transports: [
    new winston.transports.File({
      level: 'debug',
      filename: './logs/debug.log',
      handleExceptions: true,
      maxsize: 5242880, // 5MB
      maxFiles: 1
    }),
    new winston.transports.Console({
      level: 'silly',
      colorize: true
    })
  ],
  exitOnError: false,
});

export default logger;

export const stream = {
  write: function (message: string) {
    logger.info(message)
  }
}
