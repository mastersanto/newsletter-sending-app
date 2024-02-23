import express from 'express';
import * as recipientsController from './recipients.controller';

const router = express.Router();

router.get('/', recipientsController.getAll);

router.get('/:id', recipientsController.get);

router.post('/', recipientsController.create);

router.put('/:id', recipientsController.update);

router.delete('/:id', recipientsController.remove);

export default router;