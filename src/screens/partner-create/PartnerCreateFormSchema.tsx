'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IPartnerTariff } from '@/entities/partner-tariff/partner-tariff.type';
import {
	PartnerFormCreate,
	PaymentMethodEnum
} from '@/entities/partner/partner.type';
import { partnerFormCreateSchema } from '@/entities/partner/partner.zod';
import { IReferrer } from '@/entities/referrer/referrer.type';

import { PartnerCreateFormSchemaBankAccounts } from './PartnerCreateFormSchemaBankAccounts';
import { PartnerCreateFormSchemaMain } from './PartnerCreateFormSchemaMain';

interface Props {
	partnerTariffs: IPartnerTariff[];
	referrers: IReferrer[];
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<PartnerFormCreate>;
}

export const PartnerCreateFormSchema = ({
	partnerTariffs,
	referrers,
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit, watch } = useForm<PartnerFormCreate>({
		resolver: zodResolver(partnerFormCreateSchema)
	});

	const paymentMethod = watch('paymentMethod');

	return (
		<form
			id={formId}
			className='space-y-space'
			onSubmit={handleSubmit(onSubmit)}
		>
			<PartnerCreateFormSchemaMain
				number={1}
				partnerTariffs={partnerTariffs}
				referrers={referrers}
				control={control}
				disabled={disabled}
			/>

			{paymentMethod === PaymentMethodEnum.BANK_ACCOUNT && (
				<PartnerCreateFormSchemaBankAccounts
					number={2}
					control={control}
					disabled={disabled}
				/>
			)}
		</form>
	);
};
