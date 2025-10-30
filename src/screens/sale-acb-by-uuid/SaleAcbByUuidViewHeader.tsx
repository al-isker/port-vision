'use client';

import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

interface Props {
	saleAcbAcbUuid: string;
}

export const SaleAcbByUuidViewHeader = ({ saleAcbAcbUuid }: Props) => (
	<Paper className='flex items-center justify-between' component='header'>
		<Typography variant='h2'>{saleAcbAcbUuid}</Typography>
	</Paper>
);
