'use server';

import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

import { ChargersOnMapHeaderFilterActive } from './ChargersOnMapHeaderFilterActive';

export const ChargersOnMapHeader = () => (
	<Paper className='flex items-center justify-between' component='header'>
		<Typography variant='h2'>Карта зарядных устройств</Typography>

		<ChargersOnMapHeaderFilterActive />
	</Paper>
);
