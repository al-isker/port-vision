import { z } from 'zod';

import { validationMessage } from '@/shared/constants/messages/validation';

const rolePermissionsSchema = z.object({
	name: z.string(),
	readable: z.boolean(),
	writeable: z.boolean(),
	deletable: z.boolean()
});

export const roleFormCreateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() })
		.min(4, { message: validationMessage.minLength(4) }),
	description: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	label: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	permissions: z.array(rolePermissionsSchema)
});

export const roleFormUpdateSchema = z.object({
	name: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() })
		.min(4, { message: validationMessage.minLength(4) }),
	description: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	label: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	permissions: z.array(rolePermissionsSchema)
});
