import { z } from 'zod';

import { clientFormCreateSchema, clientFormUpdateSchema } from './client.zod';

export interface IClient {
	id: number;
	name: string;
	phone: string;
}

export type ClientFormCreate = z.infer<typeof clientFormCreateSchema>;

export type ClientFormUpdate = z.infer<typeof clientFormUpdateSchema>;
