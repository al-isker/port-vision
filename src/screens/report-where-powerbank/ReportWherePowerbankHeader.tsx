'use server';

import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

export const ReportWherePowerbankHeader = () => (
	<Paper className='flex items-center justify-between' component='header'>
		<Typography variant='h2'>Где повербанк?</Typography>
	</Paper>
);
