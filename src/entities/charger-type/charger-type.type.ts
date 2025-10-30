import { z } from 'zod';

import {
	chargerTypeFormCreateSchema,
	chargerTypeFormUpdateSchema
} from './charger-type.zod';

export interface IChargerType {
	id: number;
	name: string;
	slotCount: number;
	options?: string;
}

export type ChargerTypeFormCreate = z.infer<typeof chargerTypeFormCreateSchema>;

export type ChargerTypeFormUpdate = z.infer<typeof chargerTypeFormUpdateSchema>;
