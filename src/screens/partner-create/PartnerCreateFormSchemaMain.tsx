import { Control } from 'react-hook-form';

import { RHFSelect } from '@/smart-ui/select/RHFSelect';
import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';
import { RHFTextMaskField } from '@/smart-ui/text-mask-field/RHFTextMaskField';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import { IPartnerTariff } from '@/entities/partner-tariff/partner-tariff.type';
import { paymentMethodOptions } from '@/entities/partner/partner.options';
import { PartnerFormCreate } from '@/entities/partner/partner.type';
import { IReferrer } from '@/entities/referrer/referrer.type';

import { yesNoOptions } from '@/shared/constants/options/yes-no';
import { withNullOption } from '@/shared/utils/options/with-null-option';
import { phoneMask } from '@/shared/utils/validation/mask';

interface Props {
	number: number;
	partnerTariffs: IPartnerTariff[];
	referrers: IReferrer[];
	control: Control<PartnerFormCreate>;
	disabled?: boolean;
}

export const PartnerCreateFormSchemaMain = ({
	number,
	partnerTariffs,
	referrers,
	control,
	disabled
}: Props) => {
	return (
		<FormSection>
			<FormHeader number={number} title='Основные данные' />

			<FormBody>
				<div className='grid grid-cols-3 gap-4'>
					<RHFTextField
						fullWidth
						label='Имя'
						name='name'
						control={control}
						disabled={disabled}
					/>
					<RHFTextField
						fullWidth
						label='Email'
						name='email'
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
					<RHFTextField
						fullWidth
						label='Комментарий'
						name='comment'
						control={control}
						disabled={disabled}
					/>
					<RHFSelect
						fullWidth
						label='Тариф'
						name='tariffId'
						options={partnerTariffs.map(item => ({
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
						label='Активный'
						name='active'
						options={yesNoOptions}
						control={control}
						disabled={disabled}
					/>
					<RHFSelect
						fullWidth
						label='Метод оплаты'
						name='paymentMethod'
						options={paymentMethodOptions}
						control={control}
						disabled={disabled}
					/>
				</div>
			</FormBody>
		</FormSection>
	);
};
