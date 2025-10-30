import { z } from 'zod';

import { validationMessage } from '@/shared/constants/messages/validation';

export const exchangeGroupFormCreateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	chargerIds: z.optional(z.array(z.number())).transform(val => val ?? [])
});

export const exchangeGroupFormUpdateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	chargerIds: z.optional(z.array(z.number())).transform(val => val ?? [])
});
