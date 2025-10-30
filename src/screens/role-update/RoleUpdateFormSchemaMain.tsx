import { Control } from 'react-hook-form';

import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import { RoleFormUpdate } from '@/entities/role/role.type';

interface Props {
	number: number;
	control: Control<RoleFormUpdate>;
	disabled?: boolean;
}

export const RoleUpdateFormSchemaMain = ({
	number,
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
						label='Название'
						name='name'
						control={control}
						disabled={disabled}
					/>
					<RHFTextField
						fullWidth
						label='Метка'
						name='label'
						control={control}
						disabled={disabled}
					/>
					<RHFTextField
						fullWidth
						label='Описание'
						name='description'
						control={control}
						disabled={disabled}
					/>
				</div>
			</FormBody>
		</FormSection>
	);
};
