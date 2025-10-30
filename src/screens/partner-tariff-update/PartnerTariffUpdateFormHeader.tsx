'use client';

import { LoadingButton } from '@/ui/LoadingButton';
import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

interface Props {
	partnerTariffName: string;
	formId: string;
	loading?: boolean;
}

export const PartnerTariffUpdateFormHeader = ({
	partnerTariffName,
	formId,
	loading
}: Props) => (
	<Paper className='flex items-center justify-between' component='header'>
		<Typography variant='h2'>{partnerTariffName}</Typography>

		<LoadingButton
			className='w-36'
			variant='contained'
			type='submit'
			form={formId}
			loading={loading}
		>
			Сохранить
		</LoadingButton>
	</Paper>
);
