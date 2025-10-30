'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
	ChargerPlaceFormUpdate,
	IChargerPlaceById
} from '@/entities/charger-place/charger-place.type';
import { chargerPlaceFormUpdateSchema } from '@/entities/charger-place/charger-place.zod';
import { IPartner } from '@/entities/partner/partner.type';

import { ChargerPlaceUpdateFormSchemaAddress } from './ChargerPlaceUpdateFormSchemaAddress';
import { ChargerPlaceUpdateFormSchemaImages } from './ChargerPlaceUpdateFormSchemaImages';
import { ChargerPlaceUpdateFormSchemaMain } from './ChargerPlaceUpdateFormSchemaMain';
import { ChargerPlaceUpdateFormSchemaSchedule } from './ChargerPlaceUpdateFormSchemaSchedule';

interface Props {
	chargerPlace: IChargerPlaceById;
	partners: IPartner[];
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<ChargerPlaceFormUpdate>;
}

export const ChargerPlaceUpdateFormSchema = ({
	chargerPlace,
	partners,
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit, setValue, watch } =
		useForm<ChargerPlaceFormUpdate>({
			defaultValues: chargerPlace,
			resolver: zodResolver(chargerPlaceFormUpdateSchema)
		});

	return (
		<form
			id={formId}
			className='space-y-space'
			onSubmit={handleSubmit(onSubmit)}
		>
			<ChargerPlaceUpdateFormSchemaMain
				number={1}
				partners={partners}
				control={control}
				disabled={disabled}
			/>

			<ChargerPlaceUpdateFormSchemaSchedule
				number={2}
				control={control}
				setValue={setValue}
				watch={watch}
				disabled={disabled}
			/>

			<ChargerPlaceUpdateFormSchemaImages
				number={3}
				chargerPlace={chargerPlace}
				disabled={disabled}
			/>

			<ChargerPlaceUpdateFormSchemaAddress
				number={4}
				control={control}
				setValue={setValue}
				watch={watch}
				disabled={disabled}
			/>
		</form>
	);
};
