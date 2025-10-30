import { z } from 'zod';

import { validationMessage } from '@/shared/constants/messages/validation';
import { zTemplate } from '@/shared/utils/validation/z-template';

import { bankAccountSchema } from '../bank-account/bank-account.zod';
import { PaymentMethodEnum } from './partner.type';

export const partnerFormCreateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	email: zTemplate.optionalString(
		z
			.string({ required_error: validationMessage.required() })
			.email({ message: validationMessage.format() })
	),
	phone: zTemplate.phone(),
	comment: zTemplate.optionalString(
		z.string({ required_error: validationMessage.required() })
	),
	tariffId: z.number({ required_error: validationMessage.required() }),
	referrerId: zTemplate.optionalNumber(z.number()),
	active: z.boolean({ required_error: validationMessage.required() }),
	paymentMethod: z.nativeEnum(PaymentMethodEnum, {
		required_error: validationMessage.required()
	}),
	bankAccounts: z.optional(z.array(bankAccountSchema))
});

export const partnerFormUpdateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	email: zTemplate.optionalString(
		z
			.string({ required_error: validationMessage.required() })
			.email({ message: validationMessage.format() })
	),
	phone: zTemplate.phone(),
	comment: zTemplate.optionalString(
		z.string({ required_error: validationMessage.required() })
	),
	tariffId: z.number({ required_error: validationMessage.required() }),
	referrerId: zTemplate.optionalNumber(z.number()),
	active: z.boolean({ required_error: validationMessage.required() }),
	paymentMethod: z.nativeEnum(PaymentMethodEnum, {
		required_error: validationMessage.required()
	}),
	bankAccounts: z.optional(z.array(bankAccountSchema))
});
