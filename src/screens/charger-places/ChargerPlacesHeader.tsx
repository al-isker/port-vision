'use server';

import Link from 'next/link';

import { Button } from '@/ui/Button';
import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

import { ROUTES } from '@/shared/config/routes/routes';

export const ChargerPlacesHeader = () => (
	<Paper className='flex items-center justify-between' component='header'>
		<Typography variant='h2'>Точки зарядных устройств</Typography>

		<Link href={ROUTES.chargerPlaceCreate()} passHref legacyBehavior>
			<Button className='w-36' variant='contained'>
				Создать
			</Button>
		</Link>
	</Paper>
);
