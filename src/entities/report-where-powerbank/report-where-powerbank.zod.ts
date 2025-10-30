import { z } from 'zod';

import { validationMessage } from '@/shared/constants/messages/validation';
import { allOption } from '@/shared/constants/options/all';

import { REPORT_WHERE_POWERBANK_NAMES } from './report-where-powerbank.const';
import { ReportWherePowerbankLocatorEnum } from './report-where-powerbank.type';

export const reportWherePowerbankFormFiltersSchema = z.object({
	[REPORT_WHERE_POWERBANK_NAMES.locator]: z.union([
		z.nativeEnum(ReportWherePowerbankLocatorEnum, {
			message: validationMessage.required()
		}),
		z.literal(allOption.value)
	])
});
