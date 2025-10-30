type ParamsType = { [name: string]: string | number };

export const createSearchParams = (
	params: ParamsType,
	initialURLSearchParams?: URLSearchParams
) => {
	const searchParams = initialURLSearchParams ?? new URLSearchParams();

	for (const name in params) {
		searchParams.set(name, String(params[name]));
	}

	return searchParams;
};
