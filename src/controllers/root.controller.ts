import type { Request, Response } from 'express';

/**
 * GET /
 * Retorna informações do desenvolvedor.
 */
export function getRoot(_req: Request, res: Response): void {
  res.json({
    name: 'Lucas Daniel',
    role: 'Backend Developer',
    stack: ['Node.js', 'TypeScript', 'Express'],
    links: {
      github: 'https://github.com/lucasdaniel2201',
      docs: '/docs',
    },
  });
}
