import express from 'express';
import * as newslettersController from './newsletters.controller';

const router = express.Router();

router.get('/', newslettersController.getAll);

router.get('/:id', newslettersController.get);

router.post('/', newslettersController.create);

router.put('/:id', newslettersController.update);

router.delete('/:id', newslettersController.remove);

export default router;