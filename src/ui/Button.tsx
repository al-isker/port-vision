'use client';

import { Button as MUIButton, buttonClasses, styled } from '@mui/material';

export const Button = styled(MUIButton)({
	[`&.${buttonClasses.contained}`]: {
		boxShadow: 'none'
	}
});
