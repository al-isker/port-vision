'use client';

import styled from '@emotion/styled';
import { Typography as MUITypography, typographyClasses } from '@mui/material';

export const Typography = styled(MUITypography)({
	[`&.${typographyClasses.h1}`]: {
		fontSize: '2rem',
		fontWeight: 700
	},
	[`&.${typographyClasses.h2}`]: {
		fontSize: '1.6rem',
		fontWeight: 600
	},
	[`&.${typographyClasses.h3}`]: {
		fontSize: '1.3rem',
		fontWeight: 500
	},
	[`&.${typographyClasses.h4}`]: {},
	[`&.${typographyClasses.h5}`]: {},
	[`&.${typographyClasses.h6}`]: {}
});
