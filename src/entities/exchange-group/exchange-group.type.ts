import { z } from 'zod';

import { ICharger } from '../charger/charger.type';
import {
  exchangeGroupFormCreateSchema,
  exchangeGroupFormUpdateSchema
} from './exchange-group.zod';

export interface IExchangeGroup {
	id: number;
	name: string;
	chargers: ICharger[];
}

export type ExchangeGroupFormCreate = z.infer<
	typeof exchangeGroupFormCreateSchema
>;

export type ExchangeGroupFormUpdate = z.infer<
	typeof exchangeGroupFormUpdateSchema
>;
