'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { IChargerType } from '@/entities/charger-type/charger-type.type';
import { useCreatePartnerTariffMutation } from '@/entities/partner-tariff/partner-tariff.query';
import { PartnerTariffFormCreate } from '@/entities/partner-tariff/partner-tariff.type';

import { PartnerTariffCreateFormHeader } from './PartnerTariffCreateFormHeader';
import { PartnerTariffCreateFormSchema } from './PartnerTariffCreateFormSchema';

interface Props {
	chargerTypes: IChargerType[];
}

export const PartnerTariffCreateForm = ({ chargerTypes }: Props) => {
	const formId = useId();

	const router = useRouter();

	const partnerTariffMutation = useCreatePartnerTariffMutation();

	const handleSubmit = (form: PartnerTariffFormCreate) => {
		partnerTariffMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='h-full space-y-space'>
			<PartnerTariffCreateFormHeader
				formId={formId}
				loading={partnerTariffMutation.isPending}
			/>
			<PartnerTariffCreateFormSchema
				chargerTypes={chargerTypes}
				formId={formId}
				disabled={partnerTariffMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
