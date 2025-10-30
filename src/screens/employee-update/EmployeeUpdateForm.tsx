'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { useUpdateEmployeeMutation } from '@/entities/employee/employee.query';
import {
	EmployeeFormUpdate,
	IEmployee
} from '@/entities/employee/employee.type';
import { IRole } from '@/entities/role/role.type';

import { EmployeeUpdateFormHeader } from './EmployeeUpdateFormHeader';
import { EmployeeUpdateFormSchema } from './EmployeeUpdateFormSchema';

interface Props {
	employee: IEmployee;
	roles: IRole[];
}

export const EmployeeUpdateForm = ({ employee, roles }: Props) => {
	const formId = useId();

	const router = useRouter();

	const employeeMutation = useUpdateEmployeeMutation(employee.id);

	const handleSubmit = (form: EmployeeFormUpdate) => {
		employeeMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<EmployeeUpdateFormHeader
				employeeName={employee.name}
				formId={formId}
				loading={employeeMutation.isPending}
			/>
			<EmployeeUpdateFormSchema
				employee={employee}
				roles={roles}
				formId={formId}
				disabled={employeeMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
