'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RHFSelect } from '@/smart-ui/select/RHFSelect';
import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import { ICharger } from '@/entities/charger/charger.type';
import { ExchangeGroupFormCreate } from '@/entities/exchange-group/exchange-group.type';
import { exchangeGroupFormCreateSchema } from '@/entities/exchange-group/exchange-group.zod';

interface Props {
	chargers: ICharger[];
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<ExchangeGroupFormCreate>;
}

export const ExchangeGroupCreateFormSchema = ({
	chargers,
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit } = useForm<ExchangeGroupFormCreate>({
		resolver: zodResolver(exchangeGroupFormCreateSchema)
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
						<RHFSelect
							fullWidth
							label='Зарядные устройства'
							name='chargerIds'
							slotProps={{ select: { multiple: true } }}
							options={chargers.map(item => ({
								value: item.id,
								label: item.name
							}))}
							control={control}
							disabled={disabled}
						/>
					</div>
				</FormBody>
			</FormSection>
		</form>
	);
};
