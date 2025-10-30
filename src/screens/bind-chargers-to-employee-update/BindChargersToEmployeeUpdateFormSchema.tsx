'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ICharger } from '@/entities/charger/charger.type';
import {
	EmployeeFormUpdate,
	IEmployee
} from '@/entities/employee/employee.type';
import { employeeFormUpdateSchema } from '@/entities/employee/employee.zod';

import { BindChargersToEmployeeUpdateFormSchemaRest } from './BindChargersToEmployeeUpdateFormSchemaRest';
import { BindChargersToEmployeeUpdateFormSchemaServicing } from './BindChargersToEmployeeUpdateFormSchemaServicing';
import { mapServicingAndRestChargers } from './model/mapServicingAndRestChargers';

interface Props {
	employee: IEmployee;
	chargers: ICharger[];
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<EmployeeFormUpdate>;
}

export const BindChargersToEmployeeUpdateFormSchema = ({
	employee,
	chargers,
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { handleSubmit, getValues, setValue, watch } =
		useForm<EmployeeFormUpdate>({
			defaultValues: {
				...employee,
				servicingChargerIds: employee.servicingChargers.map(item => item.id)
			},
			resolver: zodResolver(employeeFormUpdateSchema)
		});

	const servicingChargerIds = watch('servicingChargerIds');

	const { servicingChargers, restChargers } = mapServicingAndRestChargers(
		chargers,
		servicingChargerIds
	);

	const handleChange = (chargerId: number, checked: boolean) => {
		const chargerIdsSet = new Set(getValues('servicingChargerIds'));

		if (checked) {
			chargerIdsSet.add(chargerId);
		} else {
			chargerIdsSet.delete(chargerId);
		}

		setValue('servicingChargerIds', Array.from(chargerIdsSet));
	};

	return (
		<form
			id={formId}
			className='flex gap-x-6'
			onSubmit={handleSubmit(onSubmit)}
		>
			<BindChargersToEmployeeUpdateFormSchemaServicing
				servicingChargers={servicingChargers}
				onChange={handleChange}
				disabled={disabled}
			/>
			<BindChargersToEmployeeUpdateFormSchemaRest
				restChargers={restChargers}
				onChange={handleChange}
				disabled={disabled}
			/>
		</form>
	);
};
