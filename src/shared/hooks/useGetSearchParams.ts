import { useSearchParams } from 'next/navigation';

export const useGetSearchParams = <N extends string>(...names: N[]) => {
	const searchParams = useSearchParams();

	const allParams = {} as Record<N, any>;

	for (const name of names) {
		allParams[name] = searchParams.get(name);
	}

	return allParams;
};
