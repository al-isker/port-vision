import { useGetSearchParams } from '@/shared/hooks/useGetSearchParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { REPORT_BY_CHARGER_NAMES } from './report-by-charger.const';
import { reportByChargerService } from './report-by-charger.service';

export const useGetReportByChargerQuery = () => {
	const params = useGetSearchParams(...Object.values(REPORT_BY_CHARGER_NAMES));

	return useQuery({
		enabled: !isEmpty(...Object.values(params)),
		queryKey: ['report-by-charger', params],
		queryFn: () => reportByChargerService.getByParams(params)
	});
};
