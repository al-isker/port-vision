'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ChargerPlaceFormCreate } from '@/entities/charger-place/charger-place.type';
import { chargerPlaceFormCreateSchema } from '@/entities/charger-place/charger-place.zod';
import { IPartner } from '@/entities/partner/partner.type';

import { weekdayOrder } from '@/shared/constants/date/weekday';

import { ChargerPlaceCreateFormSchemaAddress } from './ChargerPlaceCreateFormSchemaAddress';
import { ChargerPlaceCreateFormSchemaMain } from './ChargerPlaceCreateFormSchemaMain';
import { ChargerPlaceCreateFormSchemaSchedule } from './ChargerPlaceCreateFormSchemaSchedule';

interface Props {
	partners: IPartner[];
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<ChargerPlaceFormCreate>;
}

export const ChargerPlaceCreateFormSchema = ({
	partners,
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit, setValue, watch } =
		useForm<ChargerPlaceFormCreate>({
			resolver: zodResolver(chargerPlaceFormCreateSchema),
			defaultValues: {
				schedule: weekdayOrder.map(weekday => ({
					weekday,
					working: true,
					openAt: null,
					closeAt: null
				}))
			}
		});

	return (
		<form
			id={formId}
			className='space-y-space'
			onSubmit={handleSubmit(onSubmit)}
		>
			<ChargerPlaceCreateFormSchemaMain
				number={1}
				partners={partners}
				control={control}
				disabled={disabled}
			/>

			<ChargerPlaceCreateFormSchemaSchedule
				number={2}
				control={control}
				setValue={setValue}
				watch={watch}
				disabled={disabled}
			/>

			<ChargerPlaceCreateFormSchemaAddress
				number={3}
				control={control}
				setValue={setValue}
				watch={watch}
				disabled={disabled}
			/>
		</form>
	);
};
