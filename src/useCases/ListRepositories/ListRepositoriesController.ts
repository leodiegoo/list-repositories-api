import { Request, Response } from 'express';
import ListRepositoriesUseCase from './ListRepositoriesUseCase';

class ListRepositoriesController {
  constructor(protected listRepositoriesUseCase: ListRepositoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { owner } = request.params;

    try {
      const result = await this.listRepositoriesUseCase.execute({ owner });
      return response.status(200).send(result);
    } catch (error) {
      return response.status(error.status).send(error);
    }
  }
}

export default ListRepositoriesController;
