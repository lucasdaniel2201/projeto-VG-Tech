import { Router } from 'express';
import { getVoo } from '../controllers/voos.controller.js';

const router = Router();

/**
 * @swagger
 * /voos/{from}/{to}:
 *   get:
 *     summary: Simula uma rota de voo entre dois estados
 *     tags: [Voos]
 *     parameters:
 *       - in: path
 *         name: from
 *         required: true
 *         schema:
 *           type: string
 *         description: Sigla do estado de origem (ex: SP, RJ)
 *       - in: path
 *         name: to
 *         required: true
 *         schema:
 *           type: string
 *         description: Sigla do estado de destino (ex: BA, MG)
 *     responses:
 *       200:
 *         description: Detalhes do voo
 */
router.get('/:from/:to', getVoo);

export default router;
