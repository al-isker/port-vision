'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetPaginationBankAccountQuery } from '@/entities/bank-account/bank-account.query';

import { BankAccountsBodyView } from './BankAccountsBodyView';

export const BankAccountsBody = () => {
	const bankAccountQuery = useGetPaginationBankAccountQuery();

	if (bankAccountQuery.isPending) {
		return <LoadingView />;
	}

	if (bankAccountQuery.isError) {
		return <ErrorView error={bankAccountQuery.error} />;
	}

	return (
		<>
			<BankAccountsBodyView bankAccount={bankAccountQuery.data.content} />
			<Pagination totalPages={bankAccountQuery.data.totalPages} />
		</>
	);
};
