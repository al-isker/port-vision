import { IChargerType } from '../charger-type/charger-type.type';
import { ICharger, IChargerMergeType } from './charger.type';

type getChargersMergeTypeFn = (
	charger: ICharger[],
	chargerType: IChargerType[]
) => IChargerMergeType[];

export const getChargersMergeType: getChargersMergeTypeFn = (
	chargers,
	chargerTypes
) => {
	const chargerTypesMap = new Map(chargerTypes.map(item => [item.id, item]));

	return chargers.map(charger => ({
		...charger,
		type: chargerTypesMap.get(charger.typeId)
	}));
};
