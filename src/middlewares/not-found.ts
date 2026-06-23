import type { Request, Response } from 'express';

/**
 * Middleware para rotas não encontradas (404).
 * Deve ser registrado ANTES do errorHandler, DEPOIS de todas as rotas.
 */
export function notFoundHandler(_req: Request, res: Response): void {
  res.status(404).json({
    success: false,
    error: 'Rota não encontrada',
  });
}
