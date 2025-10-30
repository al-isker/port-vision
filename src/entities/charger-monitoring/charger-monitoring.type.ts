export interface IChargerMonitoringItem {
	id: number;
	name: string;
	lastMonitoringAt: string;
	lastMonitoringDuration: string;
	emptySlotsCount: number;
	readyToUseCount: number;
	chargingCount: number;
	dailyRentCount: number;
	partnerName: string;
	temperature: number;
	health: number;
	trigger: string;
	partnerId: number;
}
