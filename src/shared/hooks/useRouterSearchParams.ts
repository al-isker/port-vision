import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useRouterSearchParams = () => {
	const router = useRouter();
	const pathname = usePathname();
	const initialSearchParams = useSearchParams();

	const searchParams = new URLSearchParams(initialSearchParams.toString());

	const _delete = (name: string, value?: string) => {
		searchParams.delete(name, value);

		const href = pathname + '?' + searchParams.toString();

		router.push(href, { scroll: false });
	};

	const set = (name: string, value: string) => {
		searchParams.set(name, value);

		const href = pathname + '?' + searchParams.toString();

		router.push(href, { scroll: false });
	};

	return { delete: _delete, set };
};
