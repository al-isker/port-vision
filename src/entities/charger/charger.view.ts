import { ChargerStatusEnum } from './charger.type';

const chargerStatusMapView = {
	[ChargerStatusEnum.ACTIVE]: 'Активен',
	[ChargerStatusEnum.PAUSE]: 'Приостановлен',
	[ChargerStatusEnum.MAINTENANCE]: 'Обслуживание',
	[ChargerStatusEnum.DISMANTLE]: 'Демонтирован'
};

export const getChargerStatusView = (chargerStatus?: ChargerStatusEnum) => {
	return chargerStatus ? chargerStatusMapView[chargerStatus] : null;
};
