'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { ICharger } from '@/entities/charger/charger.type';
import { useUpdateExchangeGroupMutation } from '@/entities/exchange-group/exchange-group.query';
import {
	ExchangeGroupFormUpdate,
	IExchangeGroup
} from '@/entities/exchange-group/exchange-group.type';

import { ExchangeGroupUpdateFormHeader } from './ExchangeGroupUpdateFormHeader';
import { ExchangeGroupUpdateFormSchema } from './ExchangeGroupUpdateFormSchema';

interface Props {
	exchangeGroup: IExchangeGroup;
	chargers: ICharger[];
}

export const ExchangeGroupUpdateForm = ({ exchangeGroup, chargers }: Props) => {
	const formId = useId();

	const router = useRouter();

	const exchangeGroupMutation = useUpdateExchangeGroupMutation(
		exchangeGroup.id
	);

	const handleSubmit = (form: ExchangeGroupFormUpdate) => {
		exchangeGroupMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<ExchangeGroupUpdateFormHeader
				exchangeGroupName={exchangeGroup.name}
				formId={formId}
				loading={exchangeGroupMutation.isPending}
			/>
			<ExchangeGroupUpdateFormSchema
				exchangeGroup={exchangeGroup}
				chargers={chargers}
				formId={formId}
				disabled={exchangeGroupMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
