'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { useUpdateClientTariffMutation } from '@/entities/client-tariff/client-tariff.query';
import {
	ClientTariffFormUpdate,
	IClientTariff
} from '@/entities/client-tariff/client-tariff.type';

import { ClientTariffUpdateFormHeader } from './ClientTariffUpdateFormHeader';
import { ClientTariffUpdateFormSchema } from './ClientTariffUpdateFormSchema';

interface Props {
	clientTariff: IClientTariff;
}

export const ClientTariffUpdateForm = ({ clientTariff }: Props) => {
	const formId = useId();

	const router = useRouter();

	const clientTariffMutation = useUpdateClientTariffMutation(clientTariff.id);

	const handleSubmit = (form: ClientTariffFormUpdate) => {
		clientTariffMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<ClientTariffUpdateFormHeader
				formId={formId}
				loading={clientTariffMutation.isPending}
				clientTariffName={clientTariff.name}
			/>
			<ClientTariffUpdateFormSchema
				clientTariff={clientTariff}
				formId={formId}
				disabled={clientTariffMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
