'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { useCreateClientTariffMutation } from '@/entities/client-tariff/client-tariff.query';
import { ClientTariffFormCreate } from '@/entities/client-tariff/client-tariff.type';

import { ClientTariffCreateFormHeader } from './ClientTariffCreateFormHeader';
import { ClientTariffCreateFormSchema } from './ClientTariffCreateFormSchema';

export const ClientTariffCreateForm = () => {
	const formId = useId();

	const router = useRouter();

	const clientTariffMutation = useCreateClientTariffMutation();

	const handleSubmit = (form: ClientTariffFormCreate) => {
		clientTariffMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<ClientTariffCreateFormHeader
				formId={formId}
				loading={clientTariffMutation.isPending}
			/>
			<ClientTariffCreateFormSchema
				formId={formId}
				disabled={clientTariffMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
