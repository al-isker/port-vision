'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RHFSelect } from '@/smart-ui/select/RHFSelect';
import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import { IChargerType } from '@/entities/charger-type/charger-type.type';
import { chargerStatusOptions } from '@/entities/charger/charger.options';
import { ChargerFormCreate } from '@/entities/charger/charger.type';
import { chargerFormCreateSchema } from '@/entities/charger/charger.zod';
import { IClientTariff } from '@/entities/client-tariff/client-tariff.type';
import { IExchangeGroup } from '@/entities/exchange-group/exchange-group.type';
import { IPartner } from '@/entities/partner/partner.type';
import { IReferrer } from '@/entities/referrer/referrer.type';

import { withNullOption } from '@/shared/utils/options/with-null-option';

interface Props {
	partners: IPartner[];
	referrers: IReferrer[];
	chargerTypes: IChargerType[];
	clientTariffs: IClientTariff[];
	exchangeGroups: IExchangeGroup[];
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<ChargerFormCreate>;
}

export const ChargerCreateFormSchema = ({
	chargerTypes,
	partners,
	referrers,
	clientTariffs,
	exchangeGroups,
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit } = useForm<ChargerFormCreate>({
		resolver: zodResolver(chargerFormCreateSchema)
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
							label='Модель'
							name='model'
							control={control}
							disabled={disabled}
						/>
						<RHFSelect
							fullWidth
							label='Тип'
							name='typeId'
							options={chargerTypes.map(item => ({
								value: item.id,
								label: item.name
							}))}
							control={control}
							disabled={disabled}
						/>
						<RHFSelect
							fullWidth
							label='Статус'
							name='status'
							options={chargerStatusOptions}
							control={control}
							disabled={disabled}
						/>
						<RHFSelect
							fullWidth
							label='Партнёр'
							name='partnerId'
							options={partners.map(item => ({
								value: item.id,
								label: item.name
							}))}
							control={control}
							disabled={disabled}
						/>
						<RHFSelect
							fullWidth
							label='Реферрер'
							name='referrerId'
							options={withNullOption(
								referrers.map(item => ({
									value: item.id,
									label: item.name
								}))
							)}
							control={control}
							disabled={disabled}
						/>
						<RHFSelect
							fullWidth
							label='Тариф клиента'
							name='clientTariffId'
							options={withNullOption(
								clientTariffs.map(item => ({
									value: item.id,
									label: item.name
								}))
							)}
							control={control}
							disabled={disabled}
						/>
						<RHFSelect
							fullWidth
							label='Группы'
							name='exchangeGroupIds'
							slotProps={{ select: { multiple: true } }}
							options={exchangeGroups.map(item => ({
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
