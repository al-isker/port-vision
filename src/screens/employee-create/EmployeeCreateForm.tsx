'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { useCreateEmployeeMutation } from '@/entities/employee/employee.query';
import { EmployeeFormCreate } from '@/entities/employee/employee.type';
import { IRole } from '@/entities/role/role.type';

import { EmployeeCreateFormHeader } from './EmployeeCreateFormHeader';
import { EmployeeCreateFormSchema } from './EmployeeCreateFormSchema';

interface Props {
	roles: IRole[];
}

export const EmployeeCreateForm = ({ roles }: Props) => {
	const formId = useId();

	const router = useRouter();

	const employeeMutation = useCreateEmployeeMutation();

	const handleSubmit = (form: EmployeeFormCreate) => {
		employeeMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<EmployeeCreateFormHeader
				formId={formId}
				loading={employeeMutation.isPending}
			/>
			<EmployeeCreateFormSchema
				roles={roles}
				formId={formId}
				disabled={employeeMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
