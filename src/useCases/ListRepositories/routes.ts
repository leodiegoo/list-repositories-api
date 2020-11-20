import { Router } from 'express';
import { listRepositoriesController } from '.';

const router = Router();

router.get('/:owner', (request, response) => {
  listRepositoriesController.handle(request, response);
});

export default router;
