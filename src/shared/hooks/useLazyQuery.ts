import { QueryClient, QueryKey, UseQueryOptions } from '@tanstack/react-query';

import { useQuery } from './useQuery';

export const useLazyQuery = <
	TQueryFnData = unknown,
	TError = Error,
	TData = TQueryFnData,
	TQueryKey extends QueryKey = QueryKey
>(
	options: Omit<
		UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
		'enabled'
	>,
	queryClient?: QueryClient
) => {
	const { refetch, ...query } = useQuery(
		Object.assign(options, {
			enabled: false
		}),
		queryClient
	);

	return Object.assign(query, {
		fetch: refetch
	});
};
