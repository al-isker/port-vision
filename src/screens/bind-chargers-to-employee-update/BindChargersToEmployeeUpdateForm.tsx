'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { ICharger } from '@/entities/charger/charger.type';
import { useUpdateEmployeeMutation } from '@/entities/employee/employee.query';
import {
	EmployeeFormUpdate,
	IEmployee
} from '@/entities/employee/employee.type';

import { BindChargersToEmployeeUpdateFormHeader } from './BindChargersToEmployeeUpdateFormHeader';
import { BindChargersToEmployeeUpdateFormSchema } from './BindChargersToEmployeeUpdateFormSchema';

interface Props {
	employee: IEmployee;
	chargers: ICharger[];
}

export const BindChargersToEmployeeUpdateForm = ({
	employee,
	chargers
}: Props) => {
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
			<BindChargersToEmployeeUpdateFormHeader
				employeeName={employee.name}
				formId={formId}
				loading={employeeMutation.isPending}
			/>
			<BindChargersToEmployeeUpdateFormSchema
				employee={employee}
				chargers={chargers}
				formId={formId}
				disabled={employeeMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
