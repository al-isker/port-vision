'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { IPartnerTariff } from '@/entities/partner-tariff/partner-tariff.type';
import { useUpdatePartnerMutation } from '@/entities/partner/partner.query';
import { IPartner, PartnerFormUpdate } from '@/entities/partner/partner.type';
import { IReferrer } from '@/entities/referrer/referrer.type';

import { PartnerUpdateFormHeader } from './PartnerUpdateFormHeader';
import { PartnerUpdateFormSchema } from './PartnerUpdateFormSchema';

interface Props {
	partner: IPartner;
	partnerTariffs: IPartnerTariff[];
	referrers: IReferrer[];
}

export const PartnerUpdateForm = ({
	partner,
	partnerTariffs,
	referrers
}: Props) => {
	const formId = useId();

	const router = useRouter();

	const partnerMutation = useUpdatePartnerMutation(partner.id);

	const handleSubmit = (form: PartnerFormUpdate) => {
		partnerMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='h-full space-y-space'>
			<PartnerUpdateFormHeader
				partnerName={partner.name}
				formId={formId}
				loading={partnerMutation.isPending}
			/>
			<PartnerUpdateFormSchema
				partner={partner}
				partnerTariffs={partnerTariffs}
				referrers={referrers}
				formId={formId}
				disabled={partnerMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
