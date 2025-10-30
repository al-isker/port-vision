import { z } from 'zod';

import {
	partnerFormCreateSchema,
	partnerFormUpdateSchema
} from './partner.zod';

export interface IPartner {
	id: number;
	name: string;
	email?: string;
	phone: string;
	comment?: string;
	tariffId: number;
	referrerId?: number;
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

export type PartnerFormCreate = z.infer<typeof partnerFormCreateSchema>;

export type PartnerFormUpdate = z.infer<typeof partnerFormUpdateSchema>;

export enum PaymentMethodEnum {
	BANK_ACCOUNT = 'BANK_ACCOUNT',
	ANOTHER = 'ANOTHER'
}
