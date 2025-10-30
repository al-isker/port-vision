type WordsTuple = [string, string, string];

export const getWordByNumber = (
	number: number,
	[one, two, five]: WordsTuple
) => {
	let n = Math.abs(number);

	n %= 100;
	if (n >= 5 && n <= 20) return five;

	n %= 10;
	if (n === 1) return one;
	if (n >= 2 && n <= 4) return two;

	return five;
};
