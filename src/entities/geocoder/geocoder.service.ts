import { geocoderApi } from '@/shared/api/geocoder-api';

import {
	GeocodeFormByCoordinates,
	IGeocodeByCoordinates
} from './geocoder.type';

class GeocoderService {
	async byCoordinates(data: GeocodeFormByCoordinates) {
		return geocoderApi
			.get<IGeocodeByCoordinates>('', {
				params: {
					geocode: data.join(',')
				}
			})
			.then(d => d.data.response.GeoObjectCollection.featureMember);
	}
}

export const geocoderService = new GeocoderService();
