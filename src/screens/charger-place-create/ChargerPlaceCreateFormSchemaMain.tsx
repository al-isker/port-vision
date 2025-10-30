import { Control } from 'react-hook-form';

import { RHFSelect } from '@/smart-ui/select/RHFSelect';
import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import { ChargerPlaceFormCreate } from '@/entities/charger-place/charger-place.type';
import { IPartner } from '@/entities/partner/partner.type';

interface Props {
	number: number;
	partners: IPartner[];
	control: Control<ChargerPlaceFormCreate>;
	disabled?: boolean;
}

export const ChargerPlaceCreateFormSchemaMain = ({
	number,
	partners,
	control,
	disabled
}: Props) => {
	return (
		<FormSection>
			<FormHeader number={number} title='Основные данные' />

			<FormBody>
				<div className='grid grid-cols-3 gap-4'>
					<RHFSelect
						fullWidth
						label='Владелец'
						name='ownerPartnerId'
						options={partners.map(item => ({
							value: item.id,
							label: item.name
						}))}
						control={control}
						disabled={disabled}
					/>

					<RHFTextField
						fullWidth
						label='Сумма аренды'
						type='number'
						name='rentAmount'
						control={control}
						disabled={disabled}
					/>

					<RHFTextField
						fullWidth
						label='Комментарий'
						name='locationHint'
						control={control}
						disabled={disabled}
					/>
				</div>
			</FormBody>
		</FormSection>
	);
};
