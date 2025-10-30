import { ChangeEvent, useCallback } from 'react';

import { FmdGood } from '@mui/icons-material';
import {
	DomEvent,
	DomEventHandlerObject,
	SearchResponse,
	YMapLocationRequest
} from '@yandex/ymaps3-types';
import { Control, UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { YMapWithSavedZoom } from '@/widgets/y-map-with-saved-zoom/YMapWithSavedZoom';

import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';
import { MapMarker } from '@/ui/MapMarker';

import { ChargerPlaceFormCreate } from '@/entities/charger-place/charger-place.type';
import { useGeocodeByCoordinatesMutation } from '@/entities/geocoder/geocoder.query';

import { DEFAULT_LOCATION } from '@/shared/constants/map/default-location';
import { useYmapsStore } from '@/shared/store/ymaps/use-ymaps-store';
import { isEmpty } from '@/shared/utils/checks/is-empty';

interface Props {
	number: number;
	control: Control<ChargerPlaceFormCreate>;
	setValue: UseFormSetValue<ChargerPlaceFormCreate>;
	watch: UseFormWatch<ChargerPlaceFormCreate>;
	disabled?: boolean;
}

export const ChargerPlaceUpdateFormSchemaAddress = ({
	number,
	control,
	setValue,
	watch,
	disabled
}: Props) => {
	const Ymaps = useYmapsStore(state => state.Ymaps);

	const geocodeMutation = useGeocodeByCoordinatesMutation();

	const [longitude, latitude] = watch(['longitude', 'latitude']);

	const handleSearchResult = useCallback((searchResult: SearchResponse) => {
		const address = searchResult[0].properties.name;
		const [resultLongitude, resultLatitude] =
			searchResult[0].geometry?.coordinates ?? [];

		setValue('address', address);

		if (!isEmpty(resultLongitude)) {
			setValue('longitude', resultLongitude!);
		}

		if (!isEmpty(resultLatitude)) {
			setValue('latitude', resultLatitude!);
		}
	}, []);

	const handleMapClick = (_: DomEventHandlerObject, e: DomEvent) => {
		const [clickLongitude, clickLatitude] = e.coordinates;

		geocodeMutation.mutate([clickLongitude, clickLatitude], {
			onSuccess: data => {
				setValue('address', data[0].GeoObject.name);
			}
		});

		setValue('longitude', clickLongitude);
		setValue('latitude', clickLatitude);
	};

	const location: YMapLocationRequest =
		longitude && latitude
			? { center: [longitude, latitude] }
			: DEFAULT_LOCATION;

	const handleLongitudeChange = (e: ChangeEvent<HTMLInputElement>) => {
		const changeLongitude = e.target.value;

		geocodeMutation.mutate([Number(changeLongitude), latitude], {
			onSuccess: data => {
				setValue('address', data[0].GeoObject.name);
			}
		});
	};

	const handleLatitudeChange = (e: ChangeEvent<HTMLInputElement>) => {
		const changeLatitude = e.target.value;

		geocodeMutation.mutate([longitude, Number(changeLatitude)], {
			onSuccess: data => {
				setValue('address', data[0].GeoObject.name);
			}
		});
	};

	if (Ymaps) {
		return (
			<FormSection>
				<FormHeader number={number} title='Адрес' />

				<FormBody>
					<div className='grid grid-cols-3 gap-4'>
						<RHFTextField
							fullWidth
							label='Широта'
							type='number'
							name='latitude'
							control={control}
							onChange={handleLatitudeChange}
							disabled={disabled}
						/>

						<RHFTextField
							fullWidth
							label='Долгота'
							type='number'
							name='longitude'
							control={control}
							onChange={handleLongitudeChange}
							disabled={disabled}
						/>

						<RHFTextField
							fullWidth
							label='Адрес'
							name='address'
							control={control}
							loading={geocodeMutation.isPending}
							disabled
						/>

						<div className='col-span-3'>
							<YMapWithSavedZoom
								className='h-96 rounded-sm'
								location={{ duration: 500, ...location }}
							>
								<Ymaps.YMapDefaultSchemeLayer />
								<Ymaps.YMapDefaultFeaturesLayer />

								{!isEmpty(longitude, latitude) && (
									<Ymaps.YMapMarker coordinates={[longitude, latitude]}>
										<MapMarker>
											<FmdGood />
										</MapMarker>
									</Ymaps.YMapMarker>
								)}

								<Ymaps.YMapControls position='left top'>
									<Ymaps.YMapSearchControl searchResult={handleSearchResult} />
								</Ymaps.YMapControls>

								<Ymaps.YMapControls position='bottom'>
									<Ymaps.YMapZoomControl />
								</Ymaps.YMapControls>

								<Ymaps.YMapListener onClick={handleMapClick} />
							</YMapWithSavedZoom>
						</div>
					</div>
				</FormBody>
			</FormSection>
		);
	}
};
