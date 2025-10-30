'use client';

import { LoadingButton } from '@/ui/LoadingButton';
import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

interface Props {
	formId: string;
	loading?: boolean;
}

export const ChargerCreateFormHeader = ({ formId, loading }: Props) => (
	<Paper className='flex items-center justify-between' component='header'>
		<Typography variant='h2'>Новое зарядное устройство</Typography>

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
