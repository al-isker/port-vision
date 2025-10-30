'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IPartnerTariff } from '@/entities/partner-tariff/partner-tariff.type';
import {
	IPartner,
	PartnerFormUpdate,
	PaymentMethodEnum
} from '@/entities/partner/partner.type';
import { partnerFormUpdateSchema } from '@/entities/partner/partner.zod';
import { IReferrer } from '@/entities/referrer/referrer.type';

import { PartnerUpdateFormSchemaBankAccounts } from './PartnerUpdateFormSchemaBankAccounts';
import { PartnerUpdateFormSchemaMain } from './PartnerUpdateFormSchemaMain';

interface Props {
	partner: IPartner;
	partnerTariffs: IPartnerTariff[];
	referrers: IReferrer[];
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<PartnerFormUpdate>;
}

export const PartnerUpdateFormSchema = ({
	partner,
	partnerTariffs,
	referrers,
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit, watch } = useForm<PartnerFormUpdate>({
		defaultValues: partner,
		resolver: zodResolver(partnerFormUpdateSchema)
	});

	const paymentMethod = watch('paymentMethod');

	return (
		<form
			id={formId}
			className='space-y-space'
			onSubmit={handleSubmit(onSubmit)}
		>
			<PartnerUpdateFormSchemaMain
				number={1}
				partnerTariffs={partnerTariffs}
				referrers={referrers}
				control={control}
				disabled={disabled}
			/>

			{paymentMethod === PaymentMethodEnum.BANK_ACCOUNT && (
				<PartnerUpdateFormSchemaBankAccounts
					number={2}
					control={control}
					disabled={disabled}
				/>
			)}
		</form>
	);
};
