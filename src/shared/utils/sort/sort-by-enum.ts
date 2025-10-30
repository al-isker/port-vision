export const sortByEnumOrder = <T, V extends string | number>(
	arr: T[],
	enumOrder: V[],
	getValue: (item: T) => V
) => {
	return arr.sort((a, b) => {
		return enumOrder.indexOf(getValue(a)) - enumOrder.indexOf(getValue(b));
	});
};
