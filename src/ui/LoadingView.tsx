import { CircularProgress } from '@mui/material';

export const LoadingView = () => (
	<div className='w-full'>
		<CircularProgress className='mx-auto mt-12 block' size={32} />
	</div>
);
