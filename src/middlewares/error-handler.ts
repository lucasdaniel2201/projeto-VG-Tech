import type { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger.js';

/**
 * Erro customizado da aplicação.
 * Permite definir status HTTP e detalhes para debug.
 */
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly details?: unknown;

  constructor(message: string, statusCode = 500, details?: unknown) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.details = details;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

/**
 * Middleware global de tratamento de erros.
 * Deve ser registrado por último na cadeia do Express.
 */
export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  logger.error(err.message, { stack: err.stack });

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      error: err.message,
      ...(process.env.NODE_ENV !== 'production' && err.details
        ? { details: err.details }
        : {}),
    });
    return;
  }

  // Erro inesperado
  res.status(500).json({
    success: false,
    error:
      process.env.NODE_ENV === 'production'
        ? 'Erro interno do servidor'
        : err.message,
  });
}
