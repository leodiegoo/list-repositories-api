import { Router } from 'express';
import listRepositoriesRouter from './useCases/ListRepositories/routes';
import starRepository from './useCases/StarRepository/routes';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Hello World' }),
);

routes.use('/repositories', listRepositoriesRouter);
routes.use('/repositories', starRepository);

export default routes;
