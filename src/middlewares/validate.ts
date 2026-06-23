import type { Request, Response, NextFunction } from 'express';
import type { ZodSchema } from 'zod';
import { ZodError } from 'zod';
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
      // Fallback: extrai mensagens do ZodError.message (JSON string) ou usa o erro bruto
      let formattedMessage = 'Erro de validação';

      if (result.error instanceof ZodError) {
        try {
          // O ZodError armazena os issues como string JSON em .message
          const issues = JSON.parse(result.error.message) as Array<{
            path: string[];
            message: string;
          }>;
          formattedMessage = issues
            .map(
              (e) =>
                `${e.path.length ? e.path.join('.') + ': ' : ''}${e.message}`,
            )
            .join('; ');
        } catch {
          formattedMessage = result.error.message;
        }
      }

      next(new AppError(formattedMessage, 400, result.error));
      return;
    }

    // Substitui os dados validados (com coerções/transforms do Zod)
    req[source] = result.data;
    next();
  };
}
