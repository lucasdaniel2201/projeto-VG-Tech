import type { Request, Response } from 'express';

/**
 * GET /health
 * Health check — útil para monitoramento e deploy.
 */
export function getHealth(_req: Request, res: Response): void {
  res.json({
    success: true,
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    nodeVersion: process.version,
  });
}
