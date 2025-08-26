import { useInfiniteQuery } from "@tanstack/react-query";
import type { Product } from "@/utils/types";
import { fetchProducts } from "@/api/api";

export const useItems = (initialLimit = 3, step = 3) => {
  const query = useInfiniteQuery<Product[], Error>({
    queryKey: ["products", initialLimit],
    queryFn: ({ pageParam }) => fetchProducts((pageParam as number) ?? initialLimit),
    getNextPageParam: (_lastPage, allPages) => {
      // Increase limit by step for next fetch
      return (allPages.length + 1) * step + initialLimit - step;
    },
    initialPageParam: initialLimit, // required by useInfiniteQuery
    staleTime: 1000 * 60,
    retry: 1,
  });

  return {
    items: query.data?.pages?.[query.data.pages.length - 1] ?? [],
    fetchMore: query.fetchNextPage,
    hasMore: true, // always true since API supports only limit
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
};
