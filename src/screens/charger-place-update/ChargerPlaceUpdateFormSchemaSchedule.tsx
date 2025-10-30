import { useEffect } from 'react';

import {
	Control,
	UseFormSetValue,
	UseFormWatch,
	useFieldArray
} from 'react-hook-form';

import { RHFSwitch } from '@/smart-ui/switch/RHFSwitch';
import { RHFTimePicker } from '@/smart-ui/time-picker/RHFTimePicker';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import { ChargerPlaceFormCreate } from '@/entities/charger-place/charger-place.type';

import {
	Weekday,
	getWeekdayView,
	weekdayOrder
} from '@/shared/constants/date/weekday';
import { sortByEnumOrder } from '@/shared/utils/sort/sort-by-enum';

interface Props {
	number: number;
	control: Control<ChargerPlaceFormCreate>;
	setValue: UseFormSetValue<ChargerPlaceFormCreate>;
	watch: UseFormWatch<ChargerPlaceFormCreate>;
	disabled?: boolean;
}

export const ChargerPlaceUpdateFormSchemaSchedule = ({
	number,
	control,
	setValue,
	watch,
	disabled
}: Props) => {
	const { fields } = useFieldArray<ChargerPlaceFormCreate>({
		control,
		name: 'schedule'
	});

	const sortedFields = sortByEnumOrder(
		fields,
		weekdayOrder,
		item => item.weekday
	);

	return (
		<FormSection>
			<FormHeader number={number} title='Расписание' />

			<FormBody>
				<div className='flex gap-4'>
					{sortedFields.map((item, index) => (
						<FieldItem
							key={item.id}
							index={index}
							weekday={item.weekday}
							control={control}
							setValue={setValue}
							watch={watch}
							disabled={disabled}
						/>
					))}
				</div>
			</FormBody>
		</FormSection>
	);
};

interface FieldItemProps {
	index: number;
	weekday: Weekday;
	control: Control<ChargerPlaceFormCreate>;
	setValue: UseFormSetValue<ChargerPlaceFormCreate>;
	watch: UseFormWatch<ChargerPlaceFormCreate>;
	disabled?: boolean;
}

const FieldItem = ({
	index,
	weekday,
	control,
	setValue,
	watch,
	disabled
}: FieldItemProps) => {
	const isWorking = watch(`schedule.${index}.working`);

	useEffect(() => {
		if (!isWorking) {
			setValue(`schedule.${index}.openAt`, null);
			setValue(`schedule.${index}.closeAt`, null);
		}
	}, [isWorking]);

	return (
		<div className='space-y-4'>
			<RHFSwitch
				size='small'
				labelPlacement='start'
				label={getWeekdayView(weekday)}
				name={`schedule.${index}.working`}
				control={control}
				disabled={disabled}
			/>

			<RHFTimePicker
				fullWidth
				label='От'
				name={`schedule.${index}.openAt`}
				onlyTime
				timeSteps={{ minutes: 15 }}
				control={control}
				disabled={disabled || !isWorking}
			/>
			<RHFTimePicker
				fullWidth
				label='До'
				name={`schedule.${index}.closeAt`}
				onlyTime
				timeSteps={{ minutes: 15 }}
				control={control}
				disabled={disabled || !isWorking}
			/>
		</div>
	);
};
