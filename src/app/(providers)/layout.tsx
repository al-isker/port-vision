import { ReactNode } from 'react';

import { CssBaseline } from '@mui/material';

import { MaterialProvider } from '@/providers/material';
import { QueryProvider } from '@/providers/query';
import { SnackbarProvider } from '@/providers/snackbar';
import { YmapsProvider } from '@/providers/ymaps';

import '@/shared/styles/globals.css';

const ProvidersLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
	<QueryProvider>
		<MaterialProvider>
			<SnackbarProvider>
				<YmapsProvider>
					<CssBaseline />
					{children}
				</YmapsProvider>
			</SnackbarProvider>
		</MaterialProvider>
	</QueryProvider>
);

export default ProvidersLayout;
