import type { Request, Response } from 'express';

/**
 * GET /voos/:from/:to
 * Simula uma rota de voo entre dois estados.
 */
export function getVoo(req: Request, res: Response): void {
  const { from, to } = req.params;

  res.json({
    success: true,
    data: {
      flight: {
        from: (from as string).toUpperCase(),
        to: (to as string).toUpperCase(),
        price: 12345,
      },
    },
  });
}
