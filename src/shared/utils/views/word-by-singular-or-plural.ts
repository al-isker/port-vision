type WordsTuple = [string, string];

export const getWordBySingularOrPlural = (
	number: number,
	[singular, plural]: WordsTuple
) => {
	const n = Math.abs(number);

	return n === 1 ? singular : plural;
};
