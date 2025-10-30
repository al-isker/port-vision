'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { PaymentMethodEnum } from '@/entities/partner/partner.type';
import { IReferrerTariff } from '@/entities/referrer-tariff/referrer-tariff.type';
import { ReferrerFormCreate } from '@/entities/referrer/referrer.type';
import { referrerFormCreateSchema } from '@/entities/referrer/referrer.zod';

import { ReferrerCreateFormSchemaBankAccounts } from './ReferrerCreateFormSchemaBankAccounts';
import { ReferrerCreateFormSchemaMain } from './ReferrerCreateFormSchemaMain';

interface Props {
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<ReferrerFormCreate>;
	referrerTariffs: IReferrerTariff[];
}

export const ReferrerCreateFormSchema = ({
	formId,
	disabled,
	onSubmit,
	referrerTariffs
}: Props) => {
	const { control, handleSubmit, watch } = useForm<ReferrerFormCreate>({
		resolver: zodResolver(referrerFormCreateSchema)
	});

	const paymentMethod = watch('paymentMethod');

	return (
		<form
			id={formId}
			className='space-y-space'
			onSubmit={handleSubmit(onSubmit)}
		>
			<ReferrerCreateFormSchemaMain
				number={1}
				referrerTariffs={referrerTariffs}
				control={control}
				disabled={disabled}
			/>

			{paymentMethod === PaymentMethodEnum.BANK_ACCOUNT && (
				<ReferrerCreateFormSchemaBankAccounts
					number={2}
					control={control}
					disabled={disabled}
				/>
			)}
		</form>
	);
};
