'use client';

import Link from 'next/link';

import { Button } from '@/ui/Button';
import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

import { ROUTES } from '@/shared/config/routes/routes';

interface Props {
	chargerPlaceId: number;
	chargerPlaceName: string;
}

export const ChargerPlaceByIdViewHeader = ({
	chargerPlaceId,
	chargerPlaceName
}: Props) => {
	return (
		<Paper className='flex items-center justify-between' component='header'>
			<Typography variant='h2'>{chargerPlaceName}</Typography>

			<Link
				href={ROUTES.chargerPlaceUpdate(chargerPlaceId)}
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
