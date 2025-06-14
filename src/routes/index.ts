import express from 'express';
import produtosRouter from './produtos';
import voosRouter from './voos';


const router = express.Router();



router.use('/voos', voosRouter);
router.use('/produtos', produtosRouter);

router.get('/', (req, res) => {
  let name: string = 'Lucas';
  let age: number = 24;

  res.json({ name, age });
});



export default router;
