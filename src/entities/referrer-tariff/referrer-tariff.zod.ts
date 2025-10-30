import { z } from 'zod';

import { validationMessage } from '@/shared/constants/messages/validation';
import { zTemplate } from '@/shared/utils/validation/z-template';

export const referrerTariffFormCreateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	percentage: zTemplate.numberFromString(
		z.number().min(0, { message: validationMessage.min(0) })
	),
	active: z.boolean({ required_error: validationMessage.required() })
});

export const referrerTariffFormUpdateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	percentage: zTemplate.numberFromString(
		z.number().min(0, { message: validationMessage.min(0) })
	),
	active: z.boolean({ required_error: validationMessage.required() })
});
