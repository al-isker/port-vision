import { z } from 'zod';

import { roleFormCreateSchema, roleFormUpdateSchema } from './role.zod';

export interface IRole {
	id: number;
	name: string;
	description: string;
	label: string;
	permissions: Array<{
		id: number;
		name: string;
		label: string;
		description: string;
		readable: boolean;
		writeable: boolean;
		deletable: boolean;
	}>;
}

export interface IPermissionName {
	id: number;
	name: string;
	label: string;
	description: string;
}

export type RoleFormCreate = z.infer<typeof roleFormCreateSchema>;

export type RoleFormUpdate = z.infer<typeof roleFormUpdateSchema>;
