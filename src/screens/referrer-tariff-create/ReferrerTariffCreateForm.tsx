'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { useCreateReferrerTariffMutation } from '@/entities/referrer-tariff/referrer-tariff.query';
import { ReferrerTariffFormCreate } from '@/entities/referrer-tariff/referrer-tariff.type';

import { ReferrerTariffCreateFormHeader } from './ReferrerTariffCreateFormHeader';
import { ReferrerTariffCreateFormSchema } from './ReferrerTariffCreateFormSchema';

export const ReferrerTariffCreateForm = () => {
	const formId = useId();

	const router = useRouter();

	const referrerTariffMutation = useCreateReferrerTariffMutation();

	const handleSubmit = (form: ReferrerTariffFormCreate) => {
		referrerTariffMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<ReferrerTariffCreateFormHeader
				formId={formId}
				loading={referrerTariffMutation.isPending}
			/>
			<ReferrerTariffCreateFormSchema
				formId={formId}
				disabled={referrerTariffMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
