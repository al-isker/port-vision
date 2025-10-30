'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { useUpdateReferrerTariffMutation } from '@/entities/referrer-tariff/referrer-tariff.query';
import {
	IReferrerTariff,
	ReferrerTariffFormUpdate
} from '@/entities/referrer-tariff/referrer-tariff.type';

import { ReferrerTariffUpdateFormHeader } from './ReferrerTariffUpdateFormHeader';
import { ReferrerTariffUpdateFormSchema } from './ReferrerTariffUpdateFormSchema';

interface Props {
	referrerTariff: IReferrerTariff;
}

export const ReferrerTariffUpdateForm = ({ referrerTariff }: Props) => {
	const formId = useId();

	const router = useRouter();

	const referrerTariffMutation = useUpdateReferrerTariffMutation(
		referrerTariff.id
	);

	const handleSubmit = (form: ReferrerTariffFormUpdate) => {
		referrerTariffMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<ReferrerTariffUpdateFormHeader
				referrerTariffName={referrerTariff.name}
				formId={formId}
				loading={referrerTariffMutation.isPending}
			/>
			<ReferrerTariffUpdateFormSchema
				referrerTariff={referrerTariff}
				formId={formId}
				disabled={referrerTariffMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
