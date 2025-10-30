import { z } from 'zod';

import { zTemplate } from '@/shared/utils/validation/z-template';

export const mediaFormCreateSchema = z.object({
	orderPosition: zTemplate.numberFromString(z.number())
});
