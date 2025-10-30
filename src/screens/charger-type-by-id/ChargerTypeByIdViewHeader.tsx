'use client';

import Link from 'next/link';

import { Button } from '@/ui/Button';
import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

import { ROUTES } from '@/shared/config/routes/routes';

interface Props {
	chargerTypeId: number;
	chargerTypeName: string;
}

export const ChargerTypeByIdViewHeader = ({
	chargerTypeId,
	chargerTypeName
}: Props) => {
	return (
		<Paper className='flex items-center justify-between' component='header'>
			<Typography variant='h2'>{chargerTypeName}</Typography>

			<Link
				href={ROUTES.chargerTypeUpdate(chargerTypeId)}
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
