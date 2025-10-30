'use client';

import { ChangeEvent } from 'react';

import { Pagination as UIPagination } from '@/ui/Pagination';
import { Paper } from '@/ui/Paper';

import { PAGINATION_PAGE_NAME } from '@/shared/config/search-params/search-params.names';
import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useRouterSearchParams } from '@/shared/hooks/useRouterSearchParams';

interface Props {
	totalPages: number;
	disabled?: boolean;
}

export const Pagination = ({ totalPages, disabled }: Props) => {
	const { page } = usePaginationParams();

	const routerSearchParams = useRouterSearchParams();

	const handleChange = (_: ChangeEvent<unknown>, page: number) => {
		routerSearchParams.set(PAGINATION_PAGE_NAME, String(page - 1));
	};

	return (
		<Paper disableMinHeight>
			<UIPagination
				className='mx-auto w-fit'
				variant='outlined'
				shape='rounded'
				color='primary'
				count={totalPages}
				page={page! + 1}
				onChange={handleChange}
				disabled={disabled}
			/>
		</Paper>
	);
};
