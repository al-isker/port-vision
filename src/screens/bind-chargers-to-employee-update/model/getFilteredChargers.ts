import { ICharger } from '@/entities/charger/charger.type';

export const getFilteredChargers = (
	chargers: ICharger[],
	search: string | undefined,
	limit?: number
) => {
	if (!search) {
		return chargers.slice(0, limit);
	}

	const searchChargers: ICharger[] = [];

	for (const charger of chargers) {
		if (searchChargers.length === limit) break;

		if (
			charger.name.toLowerCase().includes(search.toLowerCase()) ||
			charger.address?.toLowerCase().includes(search.toLowerCase())
		) {
			searchChargers.push(charger);
		}
	}

	return searchChargers;
};
