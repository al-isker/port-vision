import { z } from 'zod';

import { zTemplate } from '@/shared/utils/validation/z-template';

import { REPORT_BY_REFERRER_NAMES } from './report-by-referrer.const';

export const reportByReferrerFormFiltersSchema = z.object({
	[REPORT_BY_REFERRER_NAMES.id]: zTemplate.numberFromString(z.number()),
	[REPORT_BY_REFERRER_NAMES.startDate]: zTemplate.date(),
	[REPORT_BY_REFERRER_NAMES.endDate]: zTemplate.date()
});
