'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RHFSelect } from '@/smart-ui/select/RHFSelect';
import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import { ReferrerTariffFormCreate } from '@/entities/referrer-tariff/referrer-tariff.type';
import { referrerTariffFormCreateSchema } from '@/entities/referrer-tariff/referrer-tariff.zod';

import { yesNoOptions } from '@/shared/constants/options/yes-no';

interface Props {
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<ReferrerTariffFormCreate>;
}

export const ReferrerTariffCreateFormSchema = ({
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit } = useForm<ReferrerTariffFormCreate>({
		resolver: zodResolver(referrerTariffFormCreateSchema)
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
