import { createTheme } from '@mui/material';
import { ruRU } from '@mui/x-date-pickers/locales';

import {
	BORDER_RADIUS,
	BREAKPOINTS,
	COLORS,
	FONT_FAMILY
} from '@/shared/styles/tokens';

export const theme = createTheme(
	{
		cssVariables: {
			colorSchemeSelector: 'class'
		},
		breakpoints: {
			values: BREAKPOINTS
		},
		palette: {
			primary: {
				main: COLORS.primary
			},
			secondary: {
				main: COLORS.secondary ?? COLORS.primary
			}
		},
		typography: {
			fontFamily: FONT_FAMILY.primary
		},
		shape: {
			borderRadius: BORDER_RADIUS
		}
	},
	ruRU
);
