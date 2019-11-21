import winston from "winston";

const logger = winston.createLogger({
  format: winston.format.combine(
    // winston.format.label({ label: 'right meow!' }),
    winston.format.timestamp(),
    winston.format.splat(),
    winston.format.simple()
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
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug'
    })
  ],
  exitOnError: false
});

export default logger;

export const stream = {
  write: function (message: string) {
    logger.info(message)
  }
}
