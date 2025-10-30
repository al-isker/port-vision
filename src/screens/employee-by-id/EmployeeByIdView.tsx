'use client';

import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';

import { IEmployee } from '@/entities/employee/employee.type';
import { IRole } from '@/entities/role/role.type';

import { getCountItemsView } from '@/shared/utils/views/count-items-view';
import { getYesNoView } from '@/shared/utils/views/yes-no-view';

import { EmployeeByIdViewHeader } from './EmployeeByIdViewHeader';

interface Props {
	employee: IEmployee;
	role?: IRole;
}

export const EmployeeByIdView = ({ employee, role }: Props) => {
	return (
		<div className='h-full space-y-space'>
			<EmployeeByIdViewHeader
				employeeId={employee.id}
				employeeName={employee.name}
			/>

			<div className='grid grid-cols-2 gap-6'>
				<Paper>
					<MapView title='Основные данные'>
						<MapViewRow label='ID'>{employee.id}</MapViewRow>
						<MapViewRow label='Имя'>{employee.name}</MapViewRow>
						<MapViewRow label='Роль'>{role?.label}</MapViewRow>
						<MapViewRow label='Кол-во зарядных устройств'>
							{getCountItemsView(employee.servicingChargers.length)}
						</MapViewRow>
						<MapViewRow label='Активный'>
							{getYesNoView(employee.active)}
						</MapViewRow>
					</MapView>
				</Paper>
			</div>
		</div>
	);
};
