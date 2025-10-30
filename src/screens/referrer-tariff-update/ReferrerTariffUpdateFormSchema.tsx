'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RHFSelect } from '@/smart-ui/select/RHFSelect';
import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import {
	IReferrerTariff,
	ReferrerTariffFormUpdate
} from '@/entities/referrer-tariff/referrer-tariff.type';
import { referrerTariffFormUpdateSchema } from '@/entities/referrer-tariff/referrer-tariff.zod';

import { yesNoOptions } from '@/shared/constants/options/yes-no';

interface Props {
	referrerTariff: IReferrerTariff;
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<ReferrerTariffFormUpdate>;
}

export const ReferrerTariffUpdateFormSchema = ({
	referrerTariff,
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit } = useForm<ReferrerTariffFormUpdate>({
		defaultValues: referrerTariff,
		resolver: zodResolver(referrerTariffFormUpdateSchema)
	});

	return (
		<form id={formId} onSubmit={handleSubmit(onSubmit)}>
			<FormSection>
				<FormHeader title='Основные данные' />

				<FormBody>
					<div className='grid grid-cols-3 gap-4'>
						<RHFTextField
							fullWidth
							label='Название'
							name='name'
							control={control}
							disabled={disabled}
						/>
						<RHFTextField
							fullWidth
							label='Процент от продаж'
							type='number'
							name='percentage'
							control={control}
							disabled={disabled}
						/>
						<RHFSelect
							fullWidth
							label='Активный'
							name='active'
							options={yesNoOptions}
							control={control}
							disabled={disabled}
						/>
					</div>
				</FormBody>
			</FormSection>
		</form>
	);
};
