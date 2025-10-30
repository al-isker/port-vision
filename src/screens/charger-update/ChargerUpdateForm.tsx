'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { IChargerPlace } from '@/entities/charger-place/charger-place.type';
import { IChargerType } from '@/entities/charger-type/charger-type.type';
import { useUpdateChargerMutation } from '@/entities/charger/charger.query';
import { ChargerFormUpdate, ICharger } from '@/entities/charger/charger.type';
import { IClientTariff } from '@/entities/client-tariff/client-tariff.type';
import { IExchangeGroup } from '@/entities/exchange-group/exchange-group.type';
import { IPartner } from '@/entities/partner/partner.type';
import { IReferrer } from '@/entities/referrer/referrer.type';

import { ChargerUpdateFormHeader } from './ChargerUpdateFormHeader';
import { ChargerUpdateFormSchema } from './ChargerUpdateFormSchema';

interface Props {
	charger: ICharger;
	chargerTypes: IChargerType[];
	partners: IPartner[];
	referrers: IReferrer[];
	clientTariffs: IClientTariff[];
	exchangeGroups: IExchangeGroup[];
	chargerPlaces: IChargerPlace[];
}

export const ChargerUpdateForm = ({
	charger,
	chargerTypes,
	partners,
	referrers,
	clientTariffs,
	exchangeGroups,
	chargerPlaces
}: Props) => {
	const formId = useId();

	const router = useRouter();

	const chargerMutation = useUpdateChargerMutation(charger.id);

	const handleSubmit = (form: ChargerFormUpdate) => {
		chargerMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='h-full space-y-space'>
			<ChargerUpdateFormHeader
				formId={formId}
				loading={chargerMutation.isPending}
				chargerName={charger.name}
			/>
			<ChargerUpdateFormSchema
				charger={charger}
				chargerTypes={chargerTypes}
				partners={partners}
				referrers={referrers}
				clientTariffs={clientTariffs}
				exchangeGroups={exchangeGroups}
				chargerPlaces={chargerPlaces}
				formId={formId}
				disabled={chargerMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
