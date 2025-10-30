'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { IPartnerTariff } from '@/entities/partner-tariff/partner-tariff.type';
import { useCreatePartnerMutation } from '@/entities/partner/partner.query';
import { PartnerFormCreate } from '@/entities/partner/partner.type';
import { IReferrer } from '@/entities/referrer/referrer.type';

import { PartnerCreateFormHeader } from './PartnerCreateFormHeader';
import { PartnerCreateFormSchema } from './PartnerCreateFormSchema';

interface Props {
	partnerTariffs: IPartnerTariff[];
	referrers: IReferrer[];
}

export const PartnerCreateForm = ({ partnerTariffs, referrers }: Props) => {
	const formId = useId();

	const router = useRouter();

	const partnerMutation = useCreatePartnerMutation();

	const handleSubmit = (form: PartnerFormCreate) => {
		partnerMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<PartnerCreateFormHeader
				formId={formId}
				loading={partnerMutation.isPending}
			/>
			<PartnerCreateFormSchema
				partnerTariffs={partnerTariffs}
				referrers={referrers}
				formId={formId}
				disabled={partnerMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
