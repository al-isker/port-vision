import { z } from 'zod';

import {
	partnerTariffFormCreateSchema,
	partnerTariffFormUpdateSchema
} from './partner-tariff.zod';

export interface IPartnerTariff {
	id: number;
	name: string;
	percentage: number;
	chargerTypeId: number;
}

export type PartnerTariffFormCreate = z.infer<
	typeof partnerTariffFormCreateSchema
>;

export type PartnerTariffFormUpdate = z.infer<
	typeof partnerTariffFormUpdateSchema
>;
