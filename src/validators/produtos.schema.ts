import { z } from 'zod';

/**
 * Schema de validação para o parâmetro de rota :id (produtos).
 */
export const produtoIdSchema = z.object({
  id: z
    .string({ required_error: 'ID do produto é obrigatório' })
    .trim()
    .min(1, 'ID do produto não pode estar vazio'),
});
