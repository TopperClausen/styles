import express from 'express';
const router = express.Router();

router.use('/styles', require('./controllers/stylesController'));
router.use('/styles/:styleId/variants', require('./controllers/variantsController'));
router.use('/styles/:styleId/variants/:variantId/sizes', require('./controllers/sizesController'));

export default router;
