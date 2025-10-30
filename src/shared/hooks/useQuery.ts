import {
	QueryClient,
	QueryKey,
	UseQueryOptions,
	useQuery as useTanstackQuery
} from '@tanstack/react-query';

export const useQuery = <
	TQueryFnData = unknown,
	TError = Error,
	TData = TQueryFnData,
	TQueryKey extends QueryKey = QueryKey
>(
	options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
	queryClient?: QueryClient
) => {
	return useTanstackQuery(options, queryClient);
};
