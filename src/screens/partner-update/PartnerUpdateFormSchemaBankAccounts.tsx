import { Delete } from '@mui/icons-material';
import { Control, useFieldArray } from 'react-hook-form';

import { RHFSelect } from '@/smart-ui/select/RHFSelect';
import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { Button } from '@/ui/Button';
import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import { PartnerFormUpdate } from '@/entities/partner/partner.type';

import { yesNoOptions } from '@/shared/constants/options/yes-no';

interface Props {
	number: number;
	control: Control<PartnerFormUpdate>;
	disabled?: boolean;
}

export const PartnerUpdateFormSchemaBankAccounts = ({
	number,
	control,
	disabled
}: Props) => {
	const { fields, append, remove } = useFieldArray<PartnerFormUpdate>({
		control,
		name: 'bankAccounts'
	});

	return (
		<FormSection>
			<FormHeader number={number} title='Расчётные счета'>
				<Button className='-my-2' onClick={() => append({} as any)}>
					Добавить
				</Button>
			</FormHeader>

			<FormBody>
				{fields.map((item, index) => (
					<div key={item.id} className='space-y-2'>
						<div className='grid w-full grid-cols-3 gap-4'>
							<RHFTextField
								fullWidth
								label='Название'
								name={`bankAccounts.${index}.name`}
								control={control}
								disabled={disabled}
							/>
							<RHFTextField
								fullWidth
								label='ИНН'
								type='number'
								name={`bankAccounts.${index}.inn`}
								control={control}
								disabled={disabled}
							/>
							<RHFTextField
								fullWidth
								label='КПП'
								type='number'
								name={`bankAccounts.${index}.kpp`}
								control={control}
								disabled={disabled}
							/>
							<RHFTextField
								fullWidth
								label='БИК'
								type='number'
								name={`bankAccounts.${index}.bik`}
								control={control}
								disabled={disabled}
							/>
							<RHFTextField
								fullWidth
								label='Название банка'
								name={`bankAccounts.${index}.bankName`}
								control={control}
								disabled={disabled}
							/>
							<RHFTextField
								fullWidth
								label='Расчетный счет'
								type='number'
								name={`bankAccounts.${index}.paymentAccount`}
								control={control}
								disabled={disabled}
							/>
							<RHFTextField
								fullWidth
								label='Юридический адрес'
								name={`bankAccounts.${index}.legalAddress`}
								control={control}
								disabled={disabled}
							/>
							<RHFSelect
								fullWidth
								label='Активный'
								name={`bankAccounts.${index}.active`}
								options={yesNoOptions}
								control={control}
								disabled={disabled}
							/>
						</div>

						<Button
							className='min-w-0'
							color='error'
							disableRipple
							onClick={() => remove(index)}
							disabled={disabled}
						>
							<Delete fontSize='small' />
						</Button>
					</div>
				))}
			</FormBody>
		</FormSection>
	);
};
