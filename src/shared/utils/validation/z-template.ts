import { ZodTypeAny, z } from 'zod';

import { validationMessage } from '@/shared/constants/messages/validation';

import { isEmpty } from '../checks/is-empty';

class ZTemplate {
	numberFromString<T extends ZodTypeAny>(target: T) {
		return z
			.string({
				required_error: validationMessage.required(),
				message: validationMessage.required()
			})
			.nonempty({ message: validationMessage.required() })
			.transform(Number)
			.or(z.number())
			.pipe(target);
	}

	optionalString<T extends ZodTypeAny>(target: T) {
		const optionalPreprocess = (val?: unknown) => {
			if (!isEmpty(val)) {
				const stringVal = String(val);

				if (stringVal.length > 0) {
					return stringVal;
				}
			}
		};

		return z.preprocess(optionalPreprocess, z.optional(target));
	}

	optionalNumber<T extends ZodTypeAny>(target: T) {
		return this.optionalString(z.coerce.number().pipe(target));
	}

	phone() {
		return z
			.string({ required_error: validationMessage.required() })
			.nonempty({ message: validationMessage.required() })
			.length(12, { message: validationMessage.format() });
	}

	date() {
		return z
			.string({
				required_error: validationMessage.required(),
				message: validationMessage.required()
			})
			.nonempty({ message: validationMessage.required() });
	}

	optionalDate() {
		return this.optionalString(this.date());
	}
}

export const zTemplate = new ZTemplate();
