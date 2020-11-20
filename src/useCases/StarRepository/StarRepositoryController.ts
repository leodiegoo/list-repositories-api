import { Request, Response } from 'express';
import StarRepositoryUseCase from './StarRepositoryUseCase';

class StarRepositoryController {
  constructor(protected starRepositoryUseCase: StarRepositoryUseCase) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { auth } = request;
    const { owner, repo } = request.params;

    try {
      const result = await this.starRepositoryUseCase.create({
        owner,
        repo,
        auth,
      });

      return response.status(201).send(result);
    } catch (error) {
      return response.status(error.status).send(error);
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { auth } = request;
    const { owner, repo } = request.params;

    try {
      const result = await this.starRepositoryUseCase.delete({
        owner,
        repo,
        auth,
      });

      return response.status(201).send(result);
    } catch (error) {
      return response.status(error.status).send(error);
    }
  }
}

export default StarRepositoryController;
