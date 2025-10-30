'use client';

import Link from 'next/link';

import { Button } from '@/ui/Button';
import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

import { ROUTES } from '@/shared/config/routes/routes';

interface Props {
	employeeId: number;
	employeeName: string;
}

export const EmployeeByIdViewHeader = ({ employeeId, employeeName }: Props) => {
	return (
		<Paper className='flex items-center' component='header'>
			<Typography variant='h2'>{employeeName}</Typography>

			<Link
				href={ROUTES.bindChargersToEmployeeUpdate(employeeId)}
				passHref
				legacyBehavior
			>
				<Button className='ml-auto' variant='outlined'>
					Привязать зарядные устройства
				</Button>
			</Link>

			<Link href={ROUTES.employeeUpdate(employeeId)} passHref legacyBehavior>
				<Button className='w-36' variant='contained'>
					Редактировать
				</Button>
			</Link>
		</Paper>
	);
};
