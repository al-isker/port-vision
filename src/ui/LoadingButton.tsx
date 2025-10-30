'use client';

import { ButtonProps, CircularProgress } from '@mui/material';

import { Button } from './Button';
import { SaveWidthContainer } from './SaveWidthContainer';

interface Props extends ButtonProps {
	loading?: boolean;
}

export const LoadingButton = ({
	children,
	loading,
	disabled,
	...restProps
}: Props) => {
	return (
		<Button {...restProps} disabled={loading || disabled}>
			<SaveWidthContainer
				showFront={loading}
				frontSlot={
					<div className='flex items-center justify-center'>
						<CircularProgress size={20} color='inherit' />
					</div>
				}
			>
				{children}
			</SaveWidthContainer>
		</Button>
	);
};
