import { z } from 'zod';

import {
	referrerTariffFormCreateSchema,
	referrerTariffFormUpdateSchema
} from './referrer-tariff.zod';

export interface IReferrerTariff {
	id: number;
	name: string;
	percentage: number;
	active: boolean;
}

export type ReferrerTariffFormCreate = z.infer<
	typeof referrerTariffFormCreateSchema
>;

export type ReferrerTariffFormUpdate = z.infer<
	typeof referrerTariffFormUpdateSchema
>;
