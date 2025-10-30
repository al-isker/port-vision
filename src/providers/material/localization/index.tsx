import { ReactNode } from 'react';

import { LocalizationProvider as MUILocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { language } from '@/shared/config/i18n/language';

import './dayjs.config';

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
	return (
		<MUILocalizationProvider
			dateAdapter={AdapterDayjs}
			adapterLocale={language}
		>
			{children}
		</MUILocalizationProvider>
	);
};
