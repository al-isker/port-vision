'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { PaymentMethodEnum } from '@/entities/partner/partner.type';
import { IReferrerTariff } from '@/entities/referrer-tariff/referrer-tariff.type';
import {
	IReferrer,
	ReferrerFormUpdate
} from '@/entities/referrer/referrer.type';
import { referrerFormUpdateSchema } from '@/entities/referrer/referrer.zod';

import { ReferrerUpdateFormSchemaBankAccounts } from './ReferrerUpdateFormSchemaBankAccounts';
import { ReferrerUpdateFormSchemaMain } from './ReferrerUpdateFormSchemaMain';

interface Props {
	referrer: IReferrer;
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<ReferrerFormUpdate>;
	referrerTariffs: IReferrerTariff[];
}

export const ReferrerUpdateFormSchema = ({
	referrer,
	formId,
	disabled,
	onSubmit,
	referrerTariffs
}: Props) => {
	const { control, handleSubmit, watch } = useForm<ReferrerFormUpdate>({
		defaultValues: referrer,
		resolver: zodResolver(referrerFormUpdateSchema)
	});

	const paymentMethod = watch('paymentMethod');

	return (
		<form
			id={formId}
			className='space-y-space'
			onSubmit={handleSubmit(onSubmit)}
		>
			<ReferrerUpdateFormSchemaMain
				number={1}
				referrerTariffs={referrerTariffs}
				control={control}
				disabled={disabled}
			/>

			{paymentMethod === PaymentMethodEnum.BANK_ACCOUNT && (
				<ReferrerUpdateFormSchemaBankAccounts
					number={2}
					control={control}
					disabled={disabled}
				/>
			)}
		</form>
	);
};
