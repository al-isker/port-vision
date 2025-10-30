import { Search } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import { useForm } from 'react-hook-form';
import { TransitionGroup } from 'react-transition-group';

import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { Divider } from '@/ui/Divider';
import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';
import { List } from '@/ui/List';

import { ICharger } from '@/entities/charger/charger.type';

import { BindChargersToEmployeeUpdateFormSchemaListItem } from './BindChargersToEmployeeUpdateFormSchemaListItem';
import { BindChargersToEmployeeUpdateFormSchemaRestFilterActive } from './BindChargersToEmployeeUpdateFormSchemaRestFilterActive';
import { getFilteredChargers } from './model/getFilteredChargers';

interface Props {
	restChargers: ICharger[];
	onChange: (id: number, checked: boolean) => void;
	disabled?: boolean;
}

export const BindChargersToEmployeeUpdateFormSchemaRest = ({
	restChargers,
	onChange,
	disabled
}: Props) => {
	const { control, watch } = useForm<{ search: string }>();

	const searchValue = watch('search');

	const searchChargers = getFilteredChargers(restChargers, searchValue, 10);

	return (
		<FormSection className='w-full overflow-hidden'>
			<FormHeader title='Остальные' />

			<div className='flex gap-x-4'>
				<RHFTextField
					fullWidth
					label='Поиск'
					slotProps={{
						input: { endAdornment: <Search className='text-black/40' /> }
					}}
					name='search'
					control={control}
				/>

				<BindChargersToEmployeeUpdateFormSchemaRestFilterActive />
			</div>

			<FormBody>
				<List disablePadding>
					<TransitionGroup>
						{searchChargers.map((item, index) => (
							<Collapse key={item.id}>
								<BindChargersToEmployeeUpdateFormSchemaListItem
									primaryText={item.name}
									secondaryText={item.address}
									checked={false}
									onChange={(_, checked) => onChange(item.id, checked)}
									disabled={disabled}
								/>

								{index !== restChargers.length - 1 && <Divider />}
							</Collapse>
						))}
					</TransitionGroup>
				</List>
			</FormBody>
		</FormSection>
	);
};
