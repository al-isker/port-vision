import Link from 'next/link';

import { Button } from '@/ui/Button';
import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

import { ROUTES } from '@/shared/config/routes/routes';

interface Props {
	clientId: number;
	clientName: string;
}

export const ClientByIdViewHeader = ({ clientId, clientName }: Props) => {
	return (
		<Paper className='flex items-center justify-between' component='header'>
			<Typography variant='h2'>{clientName}</Typography>

			<Link href={ROUTES.clientUpdate(clientId)} passHref legacyBehavior>
				<Button className='w-36' variant='contained'>
					Редактировать
				</Button>
			</Link>
		</Paper>
	);
};
