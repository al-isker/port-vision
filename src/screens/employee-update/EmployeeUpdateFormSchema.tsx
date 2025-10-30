'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RHFSelect } from '@/smart-ui/select/RHFSelect';
import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import {
	EmployeeFormUpdate,
	IEmployee
} from '@/entities/employee/employee.type';
import { employeeFormUpdateSchema } from '@/entities/employee/employee.zod';
import { IRole } from '@/entities/role/role.type';

import { yesNoOptions } from '@/shared/constants/options/yes-no';

interface Props {
	employee: IEmployee;
	roles: IRole[];
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<EmployeeFormUpdate>;
}

export const EmployeeUpdateFormSchema = ({
	employee,
	roles,
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit } = useForm<EmployeeFormUpdate>({
		defaultValues: {
			...employee,
			servicingChargerIds: employee.servicingChargers.map(item => item.id)
		},
		resolver: zodResolver(employeeFormUpdateSchema)
	});

	return (
		<form id={formId} onSubmit={handleSubmit(onSubmit)}>
			<FormSection>
				<FormHeader title='Основные данные' />

				<FormBody>
					<div className='grid grid-cols-3 gap-4'>
						<RHFTextField
							fullWidth
							label='Имя'
							name='name'
							control={control}
							disabled={disabled}
						/>
						<RHFSelect
							fullWidth
							label='Роль'
							name='roleId'
							options={roles.map(item => ({
								value: item.id,
								label: item.label
							}))}
							control={control}
							disabled={disabled}
						/>
						<RHFSelect
							fullWidth
							label='Активный'
							name='active'
							options={yesNoOptions}
							control={control}
							disabled={disabled}
						/>
					</div>
				</FormBody>
			</FormSection>
		</form>
	);
};
