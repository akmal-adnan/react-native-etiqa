import { GitHubRepository } from '@/src/types/GithubProps/GitHubRepository';

export type GitHubSearchResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubRepository[];
};
