import { z } from 'zod';

import { mediaFormCreateSchema } from './media.zod';

export interface IMedia {
	id: number;
}

export enum TargetTypeEnum {
	CHARGER_PLACE = 'CHARGER_PLACE'
}

export type MediaFormCreate = z.infer<typeof mediaFormCreateSchema>;

export type MediaBodyCreate = MediaFormCreate & {
	targetId: number;
	targetType: TargetTypeEnum;
	file: File;
};
