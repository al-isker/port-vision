'use client';

import { useRouter } from 'next/navigation';

import { IReferrerTariff } from '@/entities/referrer-tariff/referrer-tariff.type';
import { useCreateReferrerMutation } from '@/entities/referrer/referrer.query';
import { ReferrerFormCreate } from '@/entities/referrer/referrer.type';

import { ReferrerCreateFormHeader } from './ReferrerCreateFormHeader';
import { ReferrerCreateFormSchema } from './ReferrerCreateFormSchema';

interface Props {
	formId: string;
	referrerTariffs: IReferrerTariff[];
}

export const ReferrerCreateForm = ({ formId, referrerTariffs }: Props) => {
	const router = useRouter();

	const referrerMutation = useCreateReferrerMutation();

	const handleSubmit = (form: ReferrerFormCreate) => {
		referrerMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<ReferrerCreateFormHeader
				formId={formId}
				loading={referrerMutation.isPending}
			/>
			<ReferrerCreateFormSchema
				formId={formId}
				disabled={referrerMutation.isPending}
				onSubmit={handleSubmit}
				referrerTariffs={referrerTariffs}
			/>
		</div>
	);
};
