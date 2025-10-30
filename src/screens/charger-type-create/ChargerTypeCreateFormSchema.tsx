'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import { ChargerTypeFormCreate } from '@/entities/charger-type/charger-type.type';
import { chargerTypeFormCreateSchema } from '@/entities/charger-type/charger-type.zod';

interface Props {
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<ChargerTypeFormCreate>;
}

export const ChargerTypeCreateFormSchema = ({
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit } = useForm<ChargerTypeFormCreate>({
		resolver: zodResolver(chargerTypeFormCreateSchema)
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
							label='Кол-во слотов'
							type='number'
							name='slotCount'
							control={control}
							disabled={disabled}
						/>

						<RHFTextField
							fullWidth
							label='Опции'
							name='options'
							control={control}
							disabled={disabled}
						/>
					</div>
				</FormBody>
			</FormSection>
		</form>
	);
};
