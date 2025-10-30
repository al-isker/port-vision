'use client';

import Link from 'next/link';

import { Button } from '@/ui/Button';
import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

import { ROUTES } from '@/shared/config/routes/routes';

interface Props {
	clientTariffId: number;
	clientTariffName: string;
}

export const ClientTariffByIdViewHeader = ({
	clientTariffId,
	clientTariffName
}: Props) => {
	return (
		<Paper className='flex items-center justify-between' component='header'>
			<Typography variant='h2'>{clientTariffName}</Typography>

			<Link
				href={ROUTES.clientTariffUpdate(clientTariffId)}
				passHref
				legacyBehavior
			>
				<Button className='w-36' variant='contained'>
					Редактировать
				</Button>
			</Link>
		</Paper>
	);
};
