import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { getRoot } from '../controllers/root.controller.js';
import { swaggerSpec } from '../config/swagger.js';
import produtosRouter from './produtos.routes.js';
import voosRouter from './voos.routes.js';
import healthRouter from './health.routes.js';

const router = Router();

// Rota raiz — info do dev
router.get('/', getRoot);

// Documentação interativa (Swagger UI)
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Especificação OpenAPI em JSON
router.get('/docs.json', (_req, res) => {
  res.json(swaggerSpec);
});

// Módulos de domínio
router.use('/produtos', produtosRouter);
router.use('/voos', voosRouter);

// Health check
router.use('/health', healthRouter);

export default router;
