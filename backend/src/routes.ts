import express from 'express';
import { createRoutes } from './routes.helper';
const router = express.Router();

import { StylesController } from './controllers/styles.controller';
import { SizesController } from './controllers/sizes.controller';

createRoutes(['index', 'show', 'create', 'update', 'delete'], '/styles', new StylesController());
createRoutes(['show', 'create', 'update', 'delete'], '/styles/:styleId/variants/:variantId/sizes', new SizesController());
router.use('/styles/:styleId/variants', require('./controllers/variants.controller'));
router.use('/styles/:styleId/variants/:variantId/sizes', require('./controllers/sizes.controller'));

export default router;
