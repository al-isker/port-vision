'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RHFSelect } from '@/smart-ui/select/RHFSelect';
import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import { IChargerPlace } from '@/entities/charger-place/charger-place.type';
import { IChargerType } from '@/entities/charger-type/charger-type.type';
import { chargerStatusOptions } from '@/entities/charger/charger.options';
import { ChargerFormUpdate, ICharger } from '@/entities/charger/charger.type';
import { chargerFormUpdateSchema } from '@/entities/charger/charger.zod';
import { IClientTariff } from '@/entities/client-tariff/client-tariff.type';
import { IExchangeGroup } from '@/entities/exchange-group/exchange-group.type';
import { IPartner } from '@/entities/partner/partner.type';
import { IReferrer } from '@/entities/referrer/referrer.type';

import { withNullOption } from '@/shared/utils/options/with-null-option';

interface Props {
	charger: ICharger;
	chargerTypes: IChargerType[];
	partners: IPartner[];
	referrers: IReferrer[];
	clientTariffs: IClientTariff[];
	exchangeGroups: IExchangeGroup[];
	chargerPlaces: IChargerPlace[];
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<ChargerFormUpdate>;
}

export const ChargerUpdateFormSchema = ({
	charger,
	chargerTypes,
	partners,
	referrers,
	clientTariffs,
	exchangeGroups,
	chargerPlaces,
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit } = useForm<ChargerFormUpdate>({
		defaultValues: charger,
		resolver: zodResolver(chargerFormUpdateSchema)
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
						<RHFSelect
							fullWidth
							label='Точка'
							name='chargerPlaceId'
							options={chargerPlaces.map(item => ({
								value: item.id,
								label: clsx(item.address, {
									[`(${item.locationHint})`]: item.locationHint
								})
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
