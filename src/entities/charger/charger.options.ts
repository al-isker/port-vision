import { ChargerStatusEnum } from './charger.type';
import { getChargerStatusView } from './charger.view';

export const chargerStatusOptions = [
	{
		value: ChargerStatusEnum.ACTIVE,
		label: getChargerStatusView(ChargerStatusEnum.ACTIVE)
	},
	{
		value: ChargerStatusEnum.PAUSE,
		label: getChargerStatusView(ChargerStatusEnum.PAUSE)
	},
	{
		value: ChargerStatusEnum.MAINTENANCE,
		label: getChargerStatusView(ChargerStatusEnum.MAINTENANCE)
	},
	{
		value: ChargerStatusEnum.DISMANTLE,
		label: getChargerStatusView(ChargerStatusEnum.DISMANTLE)
	}
];
