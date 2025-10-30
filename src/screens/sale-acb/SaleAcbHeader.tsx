'use server';

import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

export const SaleAcbHeader = () => (
	<Paper className='flex items-center justify-between' component='header'>
		<Typography variant='h2'>Аренды</Typography>
	</Paper>
);
