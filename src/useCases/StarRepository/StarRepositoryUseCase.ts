import { Octokit } from '@octokit/core';
import { IStarRepositoryRequestDTO } from './StarRepositoryDTO';

class StarRepositoryUseCase {
  async create({ owner, repo, auth }: IStarRepositoryRequestDTO): Promise<any> {
    const octokit = new Octokit({ auth });

    const repositories = await octokit.request(
      'PUT /user/starred/:owner/:repo',
      {
        owner,
        repo,
      },
    );

    return repositories.data;
  }

  async delete({ owner, repo, auth }: IStarRepositoryRequestDTO): Promise<any> {
    const octokit = new Octokit({ auth });

    const repositories = await octokit.request(
      'DELETE /user/starred/:owner/:repo',
      {
        owner,
        repo,
      },
    );

    return repositories.data;
  }
}

export default StarRepositoryUseCase;
