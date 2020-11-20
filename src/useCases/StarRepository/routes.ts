import { Router } from 'express';
import { starRepositoryController } from '.';
import middlewares from './middlewares';

const router = Router();

router.use(middlewares);
router.put('/:owner/:repo', (request, response) => {
  starRepositoryController.create(request, response);
});
router.delete('/:owner/:repo', (request, response) => {
  starRepositoryController.delete(request, response);
});

export default router;
