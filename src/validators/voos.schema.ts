import { z } from 'zod';

/**
 * Schema de validação para os parâmetros :from e :to (voos).
 */
export const vooParamsSchema = z.object({
  from: z
    .string({ required_error: 'Sigla de origem é obrigatória' })
    .min(2, 'Sigla de origem deve ter no mínimo 2 caracteres')
    .max(3, 'Sigla de origem deve ter no máximo 3 caracteres')
    .regex(/^[A-Za-z]+$/, 'Sigla de origem deve conter apenas letras'),
  to: z
    .string({ required_error: 'Sigla de destino é obrigatória' })
    .min(2, 'Sigla de destino deve ter no mínimo 2 caracteres')
    .max(3, 'Sigla de destino deve ter no máximo 3 caracteres')
    .regex(/^[A-Za-z]+$/, 'Sigla de destino deve conter apenas letras'),
});
