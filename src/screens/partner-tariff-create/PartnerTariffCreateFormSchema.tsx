'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RHFSelect } from '@/smart-ui/select/RHFSelect';
import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import { IChargerType } from '@/entities/charger-type/charger-type.type';
import { PartnerTariffFormCreate } from '@/entities/partner-tariff/partner-tariff.type';
import { partnerTariffFormCreateSchema } from '@/entities/partner-tariff/partner-tariff.zod';

interface Props {
	chargerTypes: IChargerType[];
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<PartnerTariffFormCreate>;
}

export const PartnerTariffCreateFormSchema = ({
	chargerTypes,
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit } = useForm<PartnerTariffFormCreate>({
		resolver: zodResolver(partnerTariffFormCreateSchema)
	});

	return (
		<form
			id={formId}
			className='space-y-space'
			onSubmit={handleSubmit(onSubmit)}
		>
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
							label='Тип зарядного устройства'
							name='chargerTypeId'
							options={chargerTypes.map(item => ({
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
