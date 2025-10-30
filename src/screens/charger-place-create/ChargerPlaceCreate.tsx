'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllPartnerQuery } from '@/entities/partner/partner.query';

import { ChargerPlaceCreateForm } from './ChargerPlaceCreateForm';

export const ChargerPlaceCreate = () => {
	const partnerQuery = useGetAllPartnerQuery();

	if (partnerQuery.isPending) {
		return <LoadingView />;
	}

	if (partnerQuery.isError) {
		return <ErrorView error={partnerQuery.error} />;
	}

	return <ChargerPlaceCreateForm partners={partnerQuery.data} />;
};
