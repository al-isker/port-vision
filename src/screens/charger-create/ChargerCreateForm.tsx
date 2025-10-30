'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { IChargerType } from '@/entities/charger-type/charger-type.type';
import { useCreateChargerMutation } from '@/entities/charger/charger.query';
import { ChargerFormCreate } from '@/entities/charger/charger.type';
import { IClientTariff } from '@/entities/client-tariff/client-tariff.type';
import { IExchangeGroup } from '@/entities/exchange-group/exchange-group.type';
import { IPartner } from '@/entities/partner/partner.type';
import { IReferrer } from '@/entities/referrer/referrer.type';

import { ChargerCreateFormHeader } from './ChargerCreateFormHeader';
import { ChargerCreateFormSchema } from './ChargerCreateFormSchema';

interface Props {
	chargerTypes: IChargerType[];
	partners: IPartner[];
	referrers: IReferrer[];
	clientTariffs: IClientTariff[];
	exchangeGroups: IExchangeGroup[];
}

export const ChargerCreateForm = ({
	chargerTypes,
	partners,
	referrers,
	clientTariffs,
	exchangeGroups
}: Props) => {
	const formId = useId();

	const router = useRouter();

	const chargerMutation = useCreateChargerMutation();

	const handleSubmit = (form: ChargerFormCreate) => {
		chargerMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='h-full space-y-space'>
			<ChargerCreateFormHeader
				formId={formId}
				loading={chargerMutation.isPending}
			/>
			<ChargerCreateFormSchema
				chargerTypes={chargerTypes}
				partners={partners}
				referrers={referrers}
				clientTariffs={clientTariffs}
				exchangeGroups={exchangeGroups}
				formId={formId}
				disabled={chargerMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
