import { Router } from 'express';
import { getProdutos, getProdutoById } from '../controllers/produtos.controller.js';
import { validate } from '../middlewares/validate.js';
import { produtoIdSchema } from '../validators/produtos.schema.js';

const router = Router();

router.get('/', getProdutos);

router.get('/:id', validate(produtoIdSchema, 'params'), getProdutoById);

export default router;
