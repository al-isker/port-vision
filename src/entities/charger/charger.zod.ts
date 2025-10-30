import { z } from 'zod';

import { validationMessage } from '@/shared/constants/messages/validation';
import { zTemplate } from '@/shared/utils/validation/z-template';

import { ChargerStatusEnum } from './charger.type';

export const chargerFormCreateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	model: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	typeId: z.number({ required_error: validationMessage.required() }),
	status: z.nativeEnum(ChargerStatusEnum, {
		required_error: validationMessage.required()
	}),
	partnerId: z.number({ required_error: validationMessage.required() }),
	referrerId: zTemplate.optionalNumber(z.number()),
	clientTariffId: zTemplate.optionalNumber(z.number()),
	exchangeGroupIds: z.optional(z.array(z.number())).transform(val => val ?? [])
});

export const chargerFormUpdateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	model: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	typeId: z.number({ required_error: validationMessage.required() }),
	status: z.nativeEnum(ChargerStatusEnum, {
		required_error: validationMessage.required()
	}),
	partnerId: z.number({ required_error: validationMessage.required() }),
	referrerId: zTemplate.optionalNumber(z.number()),
	clientTariffId: zTemplate.optionalNumber(z.number()),
	exchangeGroupIds: z.optional(z.array(z.number())).transform(val => val ?? []),
	chargerPlaceId: z.number({ message: validationMessage.required() })
});
