'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdBankAccountQuery } from '@/entities/bank-account/bank-account.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { BankAccountByIdView } from './BankAccountByIdView';

export const BankAccountById = () => {
	const bankAccountId = useIdParam();

	const bankAccountQuery = useGetByIdBankAccountQuery(bankAccountId);

	if (bankAccountQuery.isPending) {
		return <LoadingView />;
	}

	if (bankAccountQuery.isError) {
		return <ErrorView error={bankAccountQuery.error} />;
	}

	return <BankAccountByIdView bankAccount={bankAccountQuery.data} />;
};
