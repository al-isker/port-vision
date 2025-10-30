'use client';

import { ReactNode } from 'react';

import { SnackbarProvider as NotistackSnackbarProvider } from 'notistack';

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
	return (
		<NotistackSnackbarProvider
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right'
			}}
			disableWindowBlurListener
		>
			{children}
		</NotistackSnackbarProvider>
	);
};
