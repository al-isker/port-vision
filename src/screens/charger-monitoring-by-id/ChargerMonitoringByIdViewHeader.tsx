'use client';

import Link from 'next/link';

import { ArrowOutwardRounded } from '@mui/icons-material';

import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

import { ROUTES } from '@/shared/config/routes/routes';

interface Props {
	chargerMonitoringId: number;
	chargerMonitoringName: string;
}

export const ChargerMonitoringByIdViewHeader = ({
	chargerMonitoringId,
	chargerMonitoringName
}: Props) => (
	<Paper className='flex items-center justify-between' component='header'>
		<Link
			className='flex items-center gap-x-1.5'
			href={ROUTES.chargerById(chargerMonitoringId)}
		>
			<Typography variant='h2'>{chargerMonitoringName}</Typography>

			<ArrowOutwardRounded className='text-black/50' fontSize='small' />
		</Link>
	</Paper>
);
