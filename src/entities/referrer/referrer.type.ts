import { z } from 'zod';

import { PaymentMethodEnum } from '../partner/partner.type';
import {
	referrerFormCreateSchema,
	referrerFormUpdateSchema
} from './referrer.zod';

export interface IReferrer {
	id: number;
	name: string;
	email?: string;
	phone: string;
	tariffId: number;
	comment?: string;
	active: boolean;
	paymentMethod: PaymentMethodEnum;
	bankAccounts?: Array<{
		id: number;
		name: string;
		inn: string;
		kpp: string;
		bik: string;
		bankName: string;
		paymentAccount: string;
		legalAddress: string;
		active: boolean;
	}>;
}

export type ReferrerFormCreate = z.infer<typeof referrerFormCreateSchema>;

export type ReferrerFormUpdate = z.infer<typeof referrerFormUpdateSchema>;
