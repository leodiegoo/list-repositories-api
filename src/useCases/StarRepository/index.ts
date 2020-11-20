import StarRepositoryController from './StarRepositoryController';
import StarRepositoryUseCase from './StarRepositoryUseCase';

const starRepositoryUseCase = new StarRepositoryUseCase();
const starRepositoryController = new StarRepositoryController(
  starRepositoryUseCase,
);

export { starRepositoryUseCase, starRepositoryController };
