'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { IChargerType } from '@/entities/charger-type/charger-type.type';
import { useUpdatePartnerTariffMutation } from '@/entities/partner-tariff/partner-tariff.query';
import {
	IPartnerTariff,
	PartnerTariffFormUpdate
} from '@/entities/partner-tariff/partner-tariff.type';

import { PartnerTariffUpdateFormHeader } from './PartnerTariffUpdateFormHeader';
import { PartnerTariffUpdateFormSchema } from './PartnerTariffUpdateFormSchema';

interface Props {
	partnerTariff: IPartnerTariff;
	chargerTypes: IChargerType[];
}

export const PartnerTariffUpdateForm = ({
	partnerTariff,
	chargerTypes
}: Props) => {
	const formId = useId();

	const router = useRouter();

	const partnerTariffMutation = useUpdatePartnerTariffMutation(
		partnerTariff.id
	);

	const handleSubmit = (form: PartnerTariffFormUpdate) => {
		partnerTariffMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<PartnerTariffUpdateFormHeader
				partnerTariffName={partnerTariff.name}
				formId={formId}
				loading={partnerTariffMutation.isPending}
			/>
			<PartnerTariffUpdateFormSchema
				partnerTariff={partnerTariff}
				chargerTypes={chargerTypes}
				formId={formId}
				disabled={partnerTariffMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
