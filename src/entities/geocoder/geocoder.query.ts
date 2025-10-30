import { useMutation } from '@/shared/hooks/useMutation';

import { geocoderService } from './geocoder.service';
import { GeocodeFormByCoordinates } from './geocoder.type';

export const useGeocodeByCoordinatesMutation = () => {
	return useMutation({
		mutationKey: ['geocode-by-coordinates'],
		mutationFn: (data: GeocodeFormByCoordinates) =>
			geocoderService.byCoordinates(data),
		gcTime: 0
	});
};
