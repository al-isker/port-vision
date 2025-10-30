'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { useCreateChargerTypeMutation } from '@/entities/charger-type/charger-type.query';
import { ChargerTypeFormCreate } from '@/entities/charger-type/charger-type.type';

import { ChargerTypeCreateFormHeader } from './ChargerTypeCreateFormHeader';
import { ChargerTypeCreateFormSchema } from './ChargerTypeCreateFormSchema';

export const ChargerTypeCreateForm = () => {
	const formId = useId();

	const router = useRouter();

	const chargerTypeMutation = useCreateChargerTypeMutation();

	const handleSubmit = (form: ChargerTypeFormCreate) => {
		chargerTypeMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<ChargerTypeCreateFormHeader
				formId={formId}
				loading={chargerTypeMutation.isPending}
			/>
			<ChargerTypeCreateFormSchema
				formId={formId}
				disabled={chargerTypeMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
