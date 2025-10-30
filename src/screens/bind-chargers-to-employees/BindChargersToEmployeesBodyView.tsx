'use client';

import Link from 'next/link';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IEmployee } from '@/entities/employee/employee.type';

import { ROUTES } from '@/shared/config/routes/routes';
import { getCountItemsView } from '@/shared/utils/views/count-items-view';
import { getYesNoView } from '@/shared/utils/views/yes-no-view';

interface Props {
	employees: IEmployee[];
}

export const BindChargersToEmployeesBodyView = ({ employees }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Имя</TableCell>
							<TableCell>Кол-во зарядных устройств</TableCell>
							<TableCell>Активный</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{employees.map(item => (
							<Link
								key={item.id}
								href={ROUTES.bindChargersToEmployeeUpdate(item.id)}
								passHref
								legacyBehavior
							>
								<TableRow hover>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.name}</TableCell>
									<TableCell>
										{getCountItemsView(item.servicingChargers.length)}
									</TableCell>
									<TableCell>{getYesNoView(item.active)}</TableCell>
								</TableRow>
							</Link>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
