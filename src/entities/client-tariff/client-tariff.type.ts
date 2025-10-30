import { z } from 'zod';

import {
	clientTariffFormCreateSchema,
	clientTariffFormUpdateSchema
} from './client-tariff.zod';

export interface IClientTariff {
	id: number;
	name: string;
	priceFirstHour: number;
	priceNext: number;
	penalty: number;
}

export type ClientTariffFormCreate = z.infer<
	typeof clientTariffFormCreateSchema
>;

export type ClientTariffFormUpdate = z.infer<
	typeof clientTariffFormUpdateSchema
>;
