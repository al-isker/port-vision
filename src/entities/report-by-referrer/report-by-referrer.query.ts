import { useGetSearchParams } from '@/shared/hooks/useGetSearchParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { REPORT_BY_REFERRER_NAMES } from './report-by-referrer.const';
import { reportByReferrerService } from './report-by-referrer.service';

export const useGetReportByReferrerQuery = () => {
	const params = useGetSearchParams(...Object.values(REPORT_BY_REFERRER_NAMES));

	return useQuery({
		enabled: !isEmpty(...Object.values(params)),
		queryKey: ['report-by-referrer', params],
		queryFn: () => reportByReferrerService.getByParams(params)
	});
};
