import { Router } from 'express';
import { getVoo } from '../controllers/voos.controller.js';
import { validate } from '../middlewares/validate.js';
import { vooParamsSchema } from '../validators/voos.schema.js';

const router = Router();

router.get('/:from/:to', validate(vooParamsSchema, 'params'), getVoo);

export default router;
