import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { ProviderContext as SnackbarInstance } from 'notistack';

import { authService } from '@/entities/auth/auth.service';

import { api } from '@/shared/api/api';
import { REFRESH_TOKEN_KEY } from '@/shared/config/local-storage/local-storage.keys';
import { ROUTES } from '@/shared/config/routes/routes';
import { httpMessage } from '@/shared/constants/messages/http';

type Hooks = {
	router: AppRouterInstance;
	snackbar: SnackbarInstance;
};

export const responseOnReject = (error: any, hooks: Hooks) => {
	const { status } = error.response;

	const { method } = error.response.config;

	if (status === 401) {
		unauthorizedErrorHandler(error, hooks);
	} else if (method !== 'get') {
		if (status >= 500 && status < 600) {
			serverErrorHandler(error, hooks);
		} else {
			anyErrorHandler(error, hooks);
		}
	}

	throw error;
};

const unauthorizedErrorHandler = async (error: any, hooks: Hooks) => {
	const { router } = hooks;

	const originalRequest = error.config;

	const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

	if (refreshToken) {
		try {
			await authService.refresh({ refreshToken });

			return api.request(originalRequest);
		} catch {}
	}

	router.push(ROUTES.signIn());
};

const serverErrorHandler = (error: any, hooks: Hooks) => {
	const { snackbar } = hooks;

	snackbar.enqueueSnackbar(httpMessage.unknown(), {
		variant: 'error'
	});
};

const anyErrorHandler = (error: any, hooks: Hooks) => {
	const { snackbar } = hooks;

	const { message } = error.response.data;

	snackbar.enqueueSnackbar(message ?? httpMessage.unknown(), {
		variant: 'error'
	});
};
