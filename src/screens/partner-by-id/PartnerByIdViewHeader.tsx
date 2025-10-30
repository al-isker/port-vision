import Link from 'next/link';

import { Button } from '@/ui/Button';
import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

import { ROUTES } from '@/shared/config/routes/routes';

interface Props {
	partnerId: number;
	partnerName: string;
}

export const PartnerByIdViewHeader = ({ partnerId, partnerName }: Props) => {
	return (
		<Paper className='flex items-center justify-between' component='header'>
			<Typography variant='h2'>{partnerName}</Typography>

			<Link href={ROUTES.partnerUpdate(partnerId)} passHref legacyBehavior>
				<Button className='w-36' variant='contained'>
					Редактировать
				</Button>
			</Link>
		</Paper>
	);
};
