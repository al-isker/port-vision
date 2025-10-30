import { z } from 'zod';

import { validationMessage } from '@/shared/constants/messages/validation';

export const bankAccountSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	inn: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() })
		.refine(val => val.length === 10 || val.length === 12, {
			message: validationMessage.length(10, 12)
		}),
	kpp: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() })
		.length(9, { message: validationMessage.length(9) }),
	bik: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() })
		.length(9, { message: validationMessage.length(9) }),
	bankName: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	paymentAccount: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() })
		.length(20, { message: validationMessage.length(20) }),
	legalAddress: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	active: z.boolean({ required_error: validationMessage.required() })
});
