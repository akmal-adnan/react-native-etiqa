import {
  GitHubRepository,
  GitHubSearchResponse,
} from '@/src/types/GithubProps';
import { useCallback, useEffect, useRef, useState } from 'react';

interface UseGitHubRepositoriesReturn {
  repositories: GitHubRepository[];
  isLoading: boolean;
  isLoadingMore: boolean;
  isRefreshing: boolean;
  error: string | null;
  handleLoadMore: () => Promise<void>;
  handleRefresh: () => Promise<void>;
}

const GITHUB_API_BASE_URL =
  'https://api.github.com/search/repositories?q=created:>2024-07-15&sort=stars&order=desc';

const ERROR_COOLDOWN_MS = 2000;

export function useGitHubRepositories(): UseGitHubRepositoriesReturn {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isRefreshing, setRefreshing] = useState<boolean>(false);
  const [isLoadingMore, setLoadingMore] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const errorTimestampRef = useRef<number | null>(null);

  const formatErrorMessage = (message: string) => {
    return message
      .split('.')
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => s + '.')[0];
  };

  const fetchRepositories = useCallback(async (page = 1) => {
    try {
      setError(null);
      const apiUrl = `${GITHUB_API_BASE_URL}&page=${page}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errData: { message: string } = await response.json();
        const errorText = formatErrorMessage(errData.message);
        throw new Error(`Failed to fetch repositories: ${errorText}`);
      }

      const data: GitHubSearchResponse = await response.json();

      if (page === 1) {
        setRepositories(data.items);
      } else {
        setRepositories((prev) => [...prev, ...data.items]);
      }
    } catch (err) {
      const errorMessage = (err as Error).message;
      setError(errorMessage);
      errorTimestampRef.current = Date.now();
      alert(errorMessage);
    } finally {
      setLoading(false);
      setLoadingMore(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchRepositories(1);
  }, [fetchRepositories]);

  const handleLoadMore = useCallback(async () => {
    if (isLoadingMore || repositories.length === 0) {
      return;
    }

    if (error && errorTimestampRef.current) {
      const timeSinceError = Date.now() - errorTimestampRef.current;
      if (timeSinceError < ERROR_COOLDOWN_MS) {
        return;
      }

      setError(null);
      errorTimestampRef.current = null;
    }

    const nextPage = currentPage + 1;
    setLoadingMore(true);
    await fetchRepositories(nextPage);
    setCurrentPage(nextPage);
  }, [
    currentPage,
    error,
    fetchRepositories,
    isLoadingMore,
    repositories.length,
  ]);

  const handleRefresh = useCallback(async () => {
    setError(null);
    errorTimestampRef.current = null;

    setRefreshing(true);
    setCurrentPage(1);

    await fetchRepositories(1);
  }, [fetchRepositories]);

  return {
    repositories,
    isLoading,
    isLoadingMore,
    isRefreshing,
    error,
    handleLoadMore,
    handleRefresh,
  };
}
