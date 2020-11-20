import ListRepositoriesController from './ListRepositoriesController';
import ListRepositoriesUseCase from './ListRepositoriesUseCase';

const listRepositoriesUseCase = new ListRepositoriesUseCase();
const listRepositoriesController = new ListRepositoriesController(
  listRepositoriesUseCase,
);

export { listRepositoriesUseCase, listRepositoriesController };
