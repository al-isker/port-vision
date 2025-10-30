'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { useUpdateChargerTypeMutation } from '@/entities/charger-type/charger-type.query';
import {
	ChargerTypeFormUpdate,
	IChargerType
} from '@/entities/charger-type/charger-type.type';

import { ChargerTypeUpdateFormHeader } from './ChargerTypeUpdateFormHeader';
import { ChargerTypeUpdateFormSchema } from './ChargerTypeUpdateFormSchema';

interface Props {
	chargerType: IChargerType;
}

export const ChargerTypeUpdateForm = ({ chargerType }: Props) => {
	const formId = useId();

	const router = useRouter();

	const chargerTypeMutation = useUpdateChargerTypeMutation(chargerType.id);

	const handleSubmit = (form: ChargerTypeFormUpdate) => {
		chargerTypeMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<ChargerTypeUpdateFormHeader
				formId={formId}
				loading={chargerTypeMutation.isPending}
				chargerTypeName={chargerType.name}
			/>
			<ChargerTypeUpdateFormSchema
				chargerType={chargerType}
				formId={formId}
				disabled={chargerTypeMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
