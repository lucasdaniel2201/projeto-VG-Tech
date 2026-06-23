import { Router } from 'express';
import { getRoot } from '../controllers/root.controller.js';
import produtosRouter from './produtos.routes.js';
import voosRouter from './voos.routes.js';
import healthRouter from './health.routes.js';

const router = Router();

// Rota raiz — info do dev
router.get('/', getRoot);

// Módulos de domínio
router.use('/produtos', produtosRouter);
router.use('/voos', voosRouter);

// Health check
router.use('/health', healthRouter);

export default router;
