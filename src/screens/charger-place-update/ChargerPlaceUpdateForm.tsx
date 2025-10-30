'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { useUpdateChargerPlaceMutation } from '@/entities/charger-place/charger-place.query';
import {
	ChargerPlaceFormUpdate,
	IChargerPlaceById
} from '@/entities/charger-place/charger-place.type';
import { IPartner } from '@/entities/partner/partner.type';

import { ChargerPlaceUpdateFormHeader } from './ChargerPlaceUpdateFormHeader';
import { ChargerPlaceUpdateFormSchema } from './ChargerPlaceUpdateFormSchema';

interface Props {
	chargerPlace: IChargerPlaceById;
	partners: IPartner[];
}

export const ChargerPlaceUpdateForm = ({ chargerPlace, partners }: Props) => {
	const formId = useId();

	const router = useRouter();

	const chargerPlaceMutation = useUpdateChargerPlaceMutation(chargerPlace.id);

	const handleSubmit = (form: ChargerPlaceFormUpdate) => {
		chargerPlaceMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='h-full space-y-space'>
			<ChargerPlaceUpdateFormHeader
				formId={formId}
				loading={chargerPlaceMutation.isPending}
				chargerPlaceName={chargerPlace.address}
			/>
			<ChargerPlaceUpdateFormSchema
				chargerPlace={chargerPlace}
				partners={partners}
				formId={formId}
				disabled={chargerPlaceMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
