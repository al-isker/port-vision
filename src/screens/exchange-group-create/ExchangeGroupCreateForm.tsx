'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { ICharger } from '@/entities/charger/charger.type';
import { useCreateExchangeGroupMutation } from '@/entities/exchange-group/exchange-group.query';
import { ExchangeGroupFormCreate } from '@/entities/exchange-group/exchange-group.type';

import { ExchangeGroupCreateFormHeader } from './ExchangeGroupCreateFormHeader';
import { ExchangeGroupCreateFormSchema } from './ExchangeGroupCreateFormSchema';

interface Props {
	chargers: ICharger[];
}

export const ExchangeGroupCreateForm = ({ chargers }: Props) => {
	const formId = useId();

	const router = useRouter();

	const exchangeGroupMutation = useCreateExchangeGroupMutation();

	const handleSubmit = (form: ExchangeGroupFormCreate) => {
		exchangeGroupMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<ExchangeGroupCreateFormHeader
				formId={formId}
				loading={exchangeGroupMutation.isPending}
			/>
			<ExchangeGroupCreateFormSchema
				chargers={chargers}
				formId={formId}
				disabled={exchangeGroupMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
