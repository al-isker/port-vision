'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';
import { RHFTextMaskField } from '@/smart-ui/text-mask-field/RHFTextMaskField';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import { ClientFormCreate } from '@/entities/client/client.type';
import { clientFormCreateSchema } from '@/entities/client/client.zod';

import { phoneMask } from '@/shared/utils/validation/mask';

interface Props {
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<ClientFormCreate>;
}

export const ClientCreateFormSchema = ({
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit } = useForm<ClientFormCreate>({
		resolver: zodResolver(clientFormCreateSchema)
	});

	return (
		<form id={formId} onSubmit={handleSubmit(onSubmit)}>
			<FormSection>
				<FormHeader title='Основные данные' />

				<FormBody>
					<div className='grid grid-cols-3 gap-4'>
						<RHFTextField
							fullWidth
							label='Имя'
							name='name'
							control={control}
							disabled={disabled}
						/>

						<RHFTextMaskField
							fullWidth
							label='Номер телефона'
							name='phone'
							mask={phoneMask}
							control={control}
							disabled={disabled}
						/>
					</div>
				</FormBody>
			</FormSection>
		</form>
	);
};
