import { LngLat } from '@yandex/ymaps3-types';

export interface IGeocodeByCoordinates {
	response: {
		GeoObjectCollection: {
			featureMember: Array<{
				GeoObject: {
					name: string;
					metaDataProperty: {
						GeocoderMetaData: {
							kind: string;
							text: string;
						};
						Address: {
							Components: Array<{
								kind: string;
								name: string;
							}>;
						};
					};
				};
			}>;
		};
	};
}

export interface GeocodeFormByCoordinates extends LngLat {}
