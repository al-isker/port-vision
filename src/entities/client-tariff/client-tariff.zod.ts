import { z } from 'zod';

import { validationMessage } from '@/shared/constants/messages/validation';
import { zTemplate } from '@/shared/utils/validation/z-template';

export const clientTariffFormCreateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	priceFirstHour: zTemplate.numberFromString(
		z.number().min(0, { message: validationMessage.min(0) })
	),
	priceNext: zTemplate.numberFromString(
		z.number().min(0, { message: validationMessage.min(0) })
	),
	penalty: zTemplate.numberFromString(
		z.number().min(0, { message: validationMessage.min(0) })
	)
});

export const clientTariffFormUpdateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	priceFirstHour: zTemplate.numberFromString(
		z.number().min(0, { message: validationMessage.min(0) })
	),
	priceNext: zTemplate.numberFromString(
		z.number().min(0, { message: validationMessage.min(0) })
	),
	penalty: zTemplate.numberFromString(
		z.number().min(0, { message: validationMessage.min(0) })
	)
});
