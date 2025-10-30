import { Collapse } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';

import { Divider } from '@/ui/Divider';
import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';
import { List } from '@/ui/List';

import { ICharger } from '@/entities/charger/charger.type';

import { BindChargersToEmployeeUpdateFormSchemaListItem } from './BindChargersToEmployeeUpdateFormSchemaListItem';

interface Props {
	servicingChargers: ICharger[];
	onChange: (id: number, checked: boolean) => void;
	disabled?: boolean;
}

export const BindChargersToEmployeeUpdateFormSchemaServicing = ({
	servicingChargers,
	onChange,
	disabled
}: Props) => {
	return (
		<FormSection className='w-full'>
			<FormHeader title='Обслуживаемые' />

			<FormBody>
				<List disablePadding>
					<TransitionGroup>
						{servicingChargers.map((item, index) => (
							<Collapse key={item.id}>
								<BindChargersToEmployeeUpdateFormSchemaListItem
									primaryText={item.name}
									secondaryText={item.address}
									checked={true}
									onChange={(_, checked) => onChange(item.id, checked)}
									disabled={disabled}
								/>

								{index !== servicingChargers.length - 1 && <Divider />}
							</Collapse>
						))}
					</TransitionGroup>
				</List>
			</FormBody>
		</FormSection>
	);
};
