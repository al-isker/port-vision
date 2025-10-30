import { z } from 'zod';

import { validationMessage } from '@/shared/constants/messages/validation';
import { zTemplate } from '@/shared/utils/validation/z-template';

export const chargerTypeFormCreateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	slotCount: zTemplate.numberFromString(
		z.number().min(1, { message: validationMessage.min(1) })
	),
	options: zTemplate.optionalString(z.string())
});

export const chargerTypeFormUpdateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	slotCount: zTemplate.numberFromString(
		z.number().min(1, { message: validationMessage.min(1) })
	),
	options: zTemplate.optionalString(z.string())
});
