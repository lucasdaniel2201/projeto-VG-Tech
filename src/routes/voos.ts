import express from 'express';

const router = express.Router();


router.get('/:from/:to', (req, res) => {
  const { from, to } = req.params;
  res.json({
    flight: {
      from: from.toUpperCase(),
      to: to.toUpperCase(),
      price: 123456
    }
  });
});





export default router;
