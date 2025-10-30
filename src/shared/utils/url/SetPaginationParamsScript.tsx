'use client';

import { Fragment, useEffect } from 'react';

import { PAGINATION_PAGE_NAME } from '@/shared/config/search-params/search-params.names';
import { PAGINATION_PAGE_DEFAULT } from '@/shared/config/search-params/search-params.values';
import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useRouterSearchParams } from '@/shared/hooks/useRouterSearchParams';

import { isEmpty } from '../checks/is-empty';

export const SetPaginationParamsScript = () => {
	const { page } = usePaginationParams();

	const routerSearchParams = useRouterSearchParams();

	useEffect(() => {
		if (isEmpty(page)) {
			routerSearchParams.set(
				PAGINATION_PAGE_NAME,
				String(PAGINATION_PAGE_DEFAULT)
			);
		}
	}, []);

	return <Fragment />;
};
