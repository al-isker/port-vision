import {
	QueryClient,
	UseMutationOptions,
	useMutation as useTanstackMutation
} from '@tanstack/react-query';

export const useMutation = <
	TData = unknown,
	TError = Error,
	TVariables = void,
	TContext = unknown
>(
	options: UseMutationOptions<TData, TError, TVariables, TContext>,
	queryClient?: QueryClient
) => {
	return useTanstackMutation(options, queryClient);
};
