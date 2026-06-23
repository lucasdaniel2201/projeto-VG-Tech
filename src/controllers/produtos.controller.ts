import type { Request, Response } from 'express';

/**
 * GET /produtos
 * Retorna a lista de produtos (mock).
 */
export function getProdutos(_req: Request, res: Response): void {
  res.json({
    success: true,
    data: [
      { id: '1', name: 'Teclado Xyz', price: 90 },
      { id: '2', name: 'Mouse Abc', price: 45 },
      { id: '3', name: 'Monitor Qwe', price: 600 },
    ],
  });
}

/**
 * GET /produtos/:id
 * Retorna um produto específico pelo ID.
 */
export function getProdutoById(req: Request, res: Response): void {
  const { id } = req.params;

  res.json({
    success: true,
    data: {
      id,
      name: 'Teclado Xyz',
      price: 90,
    },
  });
}
