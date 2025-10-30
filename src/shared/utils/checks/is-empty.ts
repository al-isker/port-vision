export const isEmpty = (...values: unknown[]) => {
	return values.some(item => item === null || item === undefined);
};
