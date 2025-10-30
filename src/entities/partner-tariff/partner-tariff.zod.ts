'use client';

import { z } from 'zod';

import { validationMessage } from '@/shared/constants/messages/validation';
import { zTemplate } from '@/shared/utils/validation/z-template';

export const partnerTariffFormCreateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	percentage: zTemplate.numberFromString(
		z.number().min(0, { message: validationMessage.min(0) })
	),
	chargerTypeId: z.number({ required_error: validationMessage.required() })
});

export const partnerTariffFormUpdateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	percentage: zTemplate.numberFromString(
		z.number().min(0, { message: validationMessage.min(0) })
	),
	chargerTypeId: z.number({ required_error: validationMessage.required() })
});
