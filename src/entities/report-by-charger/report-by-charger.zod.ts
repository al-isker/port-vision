import { z } from 'zod';

import { validationMessage } from '@/shared/constants/messages/validation';
import { allOption } from '@/shared/constants/options/all';
import { zTemplate } from '@/shared/utils/validation/z-template';

import { REPORT_BY_CHARGER_NAMES } from './report-by-charger.const';

export const reportByChargerFormFiltersSchema = z.object({
	[REPORT_BY_CHARGER_NAMES.id]: z.union([
		z.number({ message: validationMessage.required() }),
		z.string({ message: validationMessage.required() }),
		z.literal(allOption.value)
	]),
	[REPORT_BY_CHARGER_NAMES.startDate]: zTemplate.date(),
	[REPORT_BY_CHARGER_NAMES.endDate]: zTemplate.date()
});
