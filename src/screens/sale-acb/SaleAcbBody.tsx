'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetPaginationSaleAcbQuery } from '@/entities/sale-acb/sale-acb.query';

import { SaleAcbBodyView } from './SaleAcbBodyView';

export const SaleAcbBody = () => {
	const saleAcbQuery = useGetPaginationSaleAcbQuery();

	if (saleAcbQuery.isPending) {
		return <LoadingView />;
	}

	if (saleAcbQuery.isError) {
		return <ErrorView error={saleAcbQuery.error} />;
	}

	return (
		<>
			<SaleAcbBodyView saleAcb={saleAcbQuery.data.content} />
			<Pagination totalPages={saleAcbQuery.data.totalPages} />
		</>
	);
};
