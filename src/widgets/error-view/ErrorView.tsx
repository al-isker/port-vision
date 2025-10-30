import { useRouter } from 'next/navigation';

import { Error, KeyboardBackspace, Refresh } from '@mui/icons-material';

import { Button } from '@/ui/Button';
import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

import { httpMessage } from '@/shared/constants/messages/http';

interface Props {
	error: any;
	refresh?: () => void;
}

export const ErrorView = ({ error, refresh }: Props) => {
	const router = useRouter();

	const message = error.response?.data?.message;

	return (
		<Paper className='flex flex-col items-center justify-center'>
			<div className='flex items-center gap-x-1.5'>
				<Error color='error' />

				<Typography>
					{error.status >= 500 ? httpMessage.unknown() : message}
				</Typography>
			</div>

			<div className='flex gap-x-2'>
				<Button
					variant='contained'
					size='small'
					startIcon={<KeyboardBackspace />}
					onClick={router.back}
				>
					вернуться назад
				</Button>

				{refresh && (
					<Button
						variant='contained'
						size='small'
						endIcon={<Refresh />}
						onClick={refresh}
					>
						Повторить запрос
					</Button>
				)}
			</div>
		</Paper>
	);
};
