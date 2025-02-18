import winston from "winston";
import { config } from "../config/environment";

const formatConfig = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);

const developmentFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.simple()
);

export const logger = winston.createLogger({
  level: config.nodeEnv === "production" ? "info" : "debug",
  format: config.nodeEnv === "production" ? formatConfig : developmentFormat,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new winston.transports.File({
      filename: "logs/combined.log",
      maxsize: 5242880,
      maxFiles: 5,
    }),
  ],
});
