'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { IReferrerTariff } from '@/entities/referrer-tariff/referrer-tariff.type';
import { useUpdateReferrerMutation } from '@/entities/referrer/referrer.query';
import {
	IReferrer,
	ReferrerFormUpdate
} from '@/entities/referrer/referrer.type';

import { ReferrerUpdateFormHeader } from './ReferrerUpdateFormHeader';
import { ReferrerUpdateFormSchema } from './ReferrerUpdateFormSchema';

interface Props {
	referrer: IReferrer;
	referrerTariffs: IReferrerTariff[];
}

export const ReferrerUpdateForm = ({ referrer, referrerTariffs }: Props) => {
	const formId = useId();

	const router = useRouter();

	const referrerMutation = useUpdateReferrerMutation(referrer.id);

	const handleSubmit = (form: ReferrerFormUpdate) => {
		referrerMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<ReferrerUpdateFormHeader
				referrerName={referrer.name}
				formId={formId}
				loading={referrerMutation.isPending}
			/>
			<ReferrerUpdateFormSchema
				referrer={referrer}
				referrerTariffs={referrerTariffs}
				formId={formId}
				disabled={referrerMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
