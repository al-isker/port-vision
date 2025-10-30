'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import { ClientTariffFormCreate } from '@/entities/client-tariff/client-tariff.type';
import { clientTariffFormCreateSchema } from '@/entities/client-tariff/client-tariff.zod';

interface Props {
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<ClientTariffFormCreate>;
}

export const ClientTariffCreateFormSchema = ({
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit } = useForm<ClientTariffFormCreate>({
		resolver: zodResolver(clientTariffFormCreateSchema)
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
							label='Цена за первый час'
							type='number'
							name='priceFirstHour'
							control={control}
							disabled={disabled}
						/>

						<RHFTextField
							fullWidth
							label='Цена после первого часа'
							type='number'
							name='priceNext'
							control={control}
							disabled={disabled}
						/>

						<RHFTextField
							fullWidth
							label='Штраф'
							type='number'
							name='penalty'
							control={control}
							disabled={disabled}
						/>
					</div>
				</FormBody>
			</FormSection>
		</form>
	);
};
