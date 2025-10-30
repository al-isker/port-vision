'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import { ClientFormUpdate, IClient } from '@/entities/client/client.type';
import { clientFormUpdateSchema } from '@/entities/client/client.zod';

interface Props {
	client: IClient;
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<ClientFormUpdate>;
}

export const ClientUpdateFormSchema = ({
	client,
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit } = useForm<ClientFormUpdate>({
		defaultValues: client,
		resolver: zodResolver(clientFormUpdateSchema)
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
					</div>
				</FormBody>
			</FormSection>
		</form>
	);
};
