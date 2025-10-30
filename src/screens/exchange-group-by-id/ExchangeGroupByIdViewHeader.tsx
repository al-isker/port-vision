'use client';

import Link from 'next/link';

import { Button } from '@/ui/Button';
import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

import { ROUTES } from '@/shared/config/routes/routes';

interface Props {
	exchangeGroupId: number;
	exchangeGroupName: string;
}

export const ExchangeGroupByIdViewHeader = ({
	exchangeGroupId,
	exchangeGroupName
}: Props) => {
	return (
		<Paper className='flex items-center justify-between' component='header'>
			<Typography variant='h2'>{exchangeGroupName}</Typography>

			<Link
				href={ROUTES.exchangeGroupUpdate(exchangeGroupId)}
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
