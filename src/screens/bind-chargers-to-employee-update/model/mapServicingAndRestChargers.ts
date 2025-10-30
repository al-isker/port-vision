import { ICharger } from '@/entities/charger/charger.type';

export const mapServicingAndRestChargers = (
	chargers: ICharger[],
	servicingChargerIds: number[]
) => {
	const servicingChargers: ICharger[] = [];
	const restChargers: ICharger[] = [];

	for (const charger of chargers) {
		if (servicingChargerIds.includes(charger.id)) {
			servicingChargers.push(charger);
		} else {
			restChargers.push(charger);
		}
	}

	return { servicingChargers, restChargers };
};
