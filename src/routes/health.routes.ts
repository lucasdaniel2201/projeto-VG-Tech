import { Router } from 'express';
import { getHealth } from '../controllers/health.controller.js';

const router = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Verifica a saúde da aplicação
 *     tags: [System]
 *     responses:
 *       200:
 *         description: Aplicação saudável
 */
router.get('/', getHealth);

export default router;
