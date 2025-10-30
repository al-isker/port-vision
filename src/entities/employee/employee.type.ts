import { z } from 'zod';

import { ICharger } from '../charger/charger.type';
import {
	employeeFormCreateSchema,
	employeeFormUpdateSchema
} from './employee.zod';

export interface IEmployee {
	id: number;
	name: string;
	active: boolean;
	roleId: number;
	servicingChargers: ICharger[];
}

export type EmployeeFormCreate = z.infer<typeof employeeFormCreateSchema>;

export type EmployeeFormUpdate = z.infer<typeof employeeFormUpdateSchema>;
