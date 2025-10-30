'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { useCreateChargerPlaceMutation } from '@/entities/charger-place/charger-place.query';
import { ChargerPlaceFormCreate } from '@/entities/charger-place/charger-place.type';
import { IPartner } from '@/entities/partner/partner.type';

import { ChargerPlaceCreateFormHeader } from './ChargerPlaceCreateFormHeader';
import { ChargerPlaceCreateFormSchema } from './ChargerPlaceCreateFormSchema';

interface Props {
	partners: IPartner[];
}

export const ChargerPlaceCreateForm = ({ partners }: Props) => {
	const formId = useId();

	const router = useRouter();

	const chargerPlaceMutation = useCreateChargerPlaceMutation();

	const handleSubmit = (form: ChargerPlaceFormCreate) => {
		chargerPlaceMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='h-full space-y-space'>
			<ChargerPlaceCreateFormHeader
				formId={formId}
				loading={chargerPlaceMutation.isPending}
			/>
			<ChargerPlaceCreateFormSchema
				partners={partners}
				formId={formId}
				disabled={chargerPlaceMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
