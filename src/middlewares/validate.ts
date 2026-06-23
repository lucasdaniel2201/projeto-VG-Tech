import type { Request, Response, NextFunction } from 'express';
import type { ZodSchema } from 'zod';
import { AppError } from './error-handler.js';

/**
 * Middleware genérico de validação com Zod.
 * Valida `req.params`, `req.query` ou `req.body` contra um schema.
 *
 * @param schema - Schema Zod para validação
 * @param source - Onde buscar os dados: 'params', 'query' ou 'body'
 */
export function validate(
  schema: ZodSchema,
  source: 'params' | 'query' | 'body' = 'params',
) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[source]);

    if (!result.success) {
      const messages = result.error.errors
        .map((e) => `${e.path.join('.')}: ${e.message}`)
        .join('; ');

      next(new AppError(messages, 400, result.error.errors));
      return;
    }

    // Substitui os dados validados (com coerções/transforms do Zod)
    req[source] = result.data;
    next();
  };
}
