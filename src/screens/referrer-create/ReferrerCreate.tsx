'use client';

import { useId } from 'react';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllReferrerTariffQuery } from '@/entities/referrer-tariff/referrer-tariff.query';

import { ReferrerCreateForm } from './ReferrerCreateForm';

export const ReferrerCreate = () => {
	const formId = useId();

	const referrerTariffQuery = useGetAllReferrerTariffQuery();

	if (referrerTariffQuery.isPending) {
		return <LoadingView />;
	}

	if (referrerTariffQuery.isError) {
		return <ErrorView error={referrerTariffQuery.error} />;
	}

	return (
		<ReferrerCreateForm
			referrerTariffs={referrerTariffQuery.data}
			formId={formId}
		/>
	);
};
