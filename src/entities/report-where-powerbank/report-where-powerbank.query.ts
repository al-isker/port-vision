import { useGetSearchParams } from '@/shared/hooks/useGetSearchParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { REPORT_WHERE_POWERBANK_NAMES } from './report-where-powerbank.const';
import { reportWherePowerbankService } from './report-where-powerbank.service';

export const useGetReportWherePowerbankQuery = () => {
	const params = useGetSearchParams(
		...Object.values(REPORT_WHERE_POWERBANK_NAMES)
	);

	return useQuery({
		enabled: !isEmpty(...Object.values(params)),
		queryKey: ['report-where-powerbank', params],
		queryFn: () => reportWherePowerbankService.getByParams(params)
	});
};
