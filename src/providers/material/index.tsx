'use client';

import { ReactNode } from 'react';

import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import { LocalizationProvider } from './localization';
import { theme } from './theme';

export const MaterialProvider = ({ children }: { children: ReactNode }) => {
	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>
				<LocalizationProvider>{children}</LocalizationProvider>
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
};
