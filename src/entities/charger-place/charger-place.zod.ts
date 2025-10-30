import { z } from 'zod';

import { Weekday } from '@/shared/constants/date/weekday';
import { validationMessage } from '@/shared/constants/messages/validation';
import { zTemplate } from '@/shared/utils/validation/z-template';

const ScheduleSchema = z
	.object({
		weekday: z.nativeEnum(Weekday),
		working: z.boolean(),
		openAt: zTemplate.date().nullable(),
		closeAt: zTemplate.date().nullable()
	})
	.refine(
		data => {
			return data.working ? !!data.openAt : true;
		},
		{
			message: validationMessage.required(),
			path: ['openAt']
		}
	)
	.refine(
		data => {
			return data.working ? !!data.closeAt : true;
		},
		{
			message: validationMessage.required(),
			path: ['closeAt']
		}
	);

export const chargerPlaceFormCreateSchema = z.object({
	ownerPartnerId: z.number({ required_error: validationMessage.required() }),
	rentAmount: zTemplate.numberFromString(
		z.number().min(0, { message: validationMessage.min(3) })
	),
	schedule: z.array(ScheduleSchema),
	longitude: zTemplate.numberFromString(z.number()),
	latitude: zTemplate.numberFromString(z.number()),
	address: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	locationHint: zTemplate.optionalString(z.string())
});

export const chargerPlaceFormUpdateSchema = z.object({
	ownerPartnerId: z.number({ required_error: validationMessage.required() }),
	rentAmount: zTemplate.numberFromString(
		z.number().min(0, { message: validationMessage.min(0) })
	),
	schedule: z.array(ScheduleSchema),
	longitude: zTemplate.numberFromString(z.number()),
	latitude: zTemplate.numberFromString(z.number()),
	address: z
		.string({ required_error: validationMessage.required() })
		.nonempty({ message: validationMessage.required() }),
	locationHint: zTemplate.optionalString(z.string())
});
