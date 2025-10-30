export interface IAcbItem {
	id: number;
	acbUuid: string;
	chargerId: number;
	percentage: number;
	slot: number;
	temperature: number;
	health: number;
	usageCount: number;
}

export interface IAcbRent {
	text: string;
}
