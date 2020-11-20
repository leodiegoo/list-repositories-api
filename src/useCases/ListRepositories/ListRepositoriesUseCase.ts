import { Octokit } from '@octokit/core';
import { IListRepositoriesRequestDTO } from './ListRepositoriesDTO';

class ListRepositoriesUseCase {
  constructor(protected octokit = new Octokit()) {}

  async execute({ owner }: IListRepositoriesRequestDTO): Promise<any> {
    const repositories = await this.octokit.request(
      'GET /users/:username/repos',
      {
        username: owner,
      },
    );

    return repositories.data;
  }
}

export default ListRepositoriesUseCase;
