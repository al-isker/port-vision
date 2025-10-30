'use client';

import Link from 'next/link';

import { Button } from '@/ui/Button';
import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

import { ROUTES } from '@/shared/config/routes/routes';

import { ChargerByIdViewHeaderAttachMode } from './ChargerByIdViewHeaderAttachMode';

interface Props {
	chargerId: number;
	chargerName: string;
	remainingAttachModeDuration: string | null;
}

export const ChargerByIdViewHeader = ({
	chargerId,
	chargerName,
	remainingAttachModeDuration
}: Props) => (
	<Paper className='flex items-center' component='header'>
		<Typography variant='h2'>{chargerName}</Typography>

		<ChargerByIdViewHeaderAttachMode
			className='ml-auto'
			chargerId={chargerId}
			remainingAttachModeDuration={remainingAttachModeDuration}
		/>

		<Link href={ROUTES.chargerUpdate(chargerId)} passHref legacyBehavior>
			<Button className='w-36' variant='contained'>
				Редактировать
			</Button>
		</Link>
	</Paper>
);
