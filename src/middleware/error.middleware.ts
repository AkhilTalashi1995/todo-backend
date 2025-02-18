import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";
import { ZodError } from "zod";

export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public errorCode?: string
  ) {
    super(message);
    this.name = "AppError";
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: "error",
      message: err.message,
      errorCode: err.errorCode || "UNKNOWN_ERROR",
    });
    return;
  }

  if (err instanceof ZodError) {
    res.status(400).json({
      status: "error",
      message: "Validation Error",
      errors: err.errors,
    });
    return;
  }

  logger.error(`Unexpected error: ${err.message}`, { stack: err.stack });

  res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};
