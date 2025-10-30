import { z } from 'zod';

import { zTemplate } from '@/shared/utils/validation/z-template';

import { REPORT_BY_PARTNER_NAMES } from './report-by-partner.const';

export const reportByPartnerFormFiltersSchema = z.object({
	[REPORT_BY_PARTNER_NAMES.id]: zTemplate.numberFromString(z.number()),
	[REPORT_BY_PARTNER_NAMES.startDate]: zTemplate.date(),
	[REPORT_BY_PARTNER_NAMES.endDate]: zTemplate.date()
});
