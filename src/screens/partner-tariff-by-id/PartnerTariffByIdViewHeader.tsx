import Link from 'next/link';

import { Button } from '@/ui/Button';
import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

import { ROUTES } from '@/shared/config/routes/routes';

interface Props {
	partnerTariffId: number;
	partnerTariffName: string;
}

export const PartnerTariffByIdViewHeader = ({
	partnerTariffId,
	partnerTariffName
}: Props) => {
	return (
		<Paper className='flex items-center justify-between' component='header'>
			<Typography variant='h2'>{partnerTariffName}</Typography>

			<Link
				href={ROUTES.partnerTariffUpdate(partnerTariffId)}
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
