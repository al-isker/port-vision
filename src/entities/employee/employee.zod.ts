import { z } from 'zod';

import { validationMessage } from '@/shared/constants/messages/validation';

export const employeeFormCreateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	login: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() })
		.min(3, { message: validationMessage.minLength(3) }),
	password: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() })
		.min(6, { message: validationMessage.minLength(6) }),
	active: z.boolean({ required_error: validationMessage.required() }),
	roleId: z.number({ required_error: validationMessage.required() })
});

export const employeeFormUpdateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	active: z.boolean({ required_error: validationMessage.required() }),
	roleId: z.number({ required_error: validationMessage.required() }),
	servicingChargerIds: z.array(z.number())
});
