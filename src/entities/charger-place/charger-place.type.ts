import { z } from 'zod';

import { Weekday } from '@/shared/constants/date/weekday';

import {
	chargerPlaceFormCreateSchema,
	chargerPlaceFormUpdateSchema
} from './charger-place.zod';

export interface IChargerPlace {
	id: number;
	rentAmount: number;
	address: string;
	locationHint: string;
}

export interface IChargerPlaceById {
	id: number;
	ownerPartnerId: number;
	rentAmount: number;
	address: string;
	locationHint: string;
	longitude: number;
	latitude: number;
	schedule: Array<{
		weekday: Weekday;
		working: boolean;
		openAt?: string;
		closeAt?: string;
	}>;
	images: Array<{
		id: number;
		url: string;
		orderPosition: number;
	}>;
}

export type ChargerPlaceFormCreate = z.infer<
	typeof chargerPlaceFormCreateSchema
>;

export type ChargerPlaceFormUpdate = z.infer<
	typeof chargerPlaceFormUpdateSchema
>;
