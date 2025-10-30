import { z } from 'zod';

import { IChargerType } from '../charger-type/charger-type.type';
import {
	chargerFormCreateSchema,
	chargerFormUpdateSchema
} from './charger.zod';

export interface ICharger {
	id: number;
	name: string;
	model: string;
	typeId: number;
	status: ChargerStatusEnum;
	partnerId: number;
	referrerId?: number;
	clientTariffId?: number;
	exchangeGroupIds: number[];
	chargerPlaceId?: number;
	address?: string;
	longitude?: number;
	latitude?: number;
	remainingAttachModeDuration: string | null;
	qrCodeUrl: string;
}

export interface IChargerMergeType extends ICharger {
	type?: IChargerType;
}

export interface IChargerAttachMode {
	time: string;
}

export interface ChargerSearchParams {
	status?: ChargerStatusEnum;
}

export enum ChargerStatusEnum {
	ACTIVE = 'ACTIVE',
	PAUSE = 'PAUSE',
	MAINTENANCE = 'MAINTENANCE',
	DISMANTLE = 'DISMANTLE'
}

export type ChargerFormCreate = z.infer<typeof chargerFormCreateSchema>;

export type ChargerFormUpdate = z.infer<typeof chargerFormUpdateSchema>;
