import { useGetSearchParams } from '@/shared/hooks/useGetSearchParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { REPORT_BY_PARTNER_NAMES } from './report-by-partner.const';
import { reportByPartnerService } from './report-by-partner.service';

export const useGetReportByPartnerQuery = () => {
	const params = useGetSearchParams(...Object.values(REPORT_BY_PARTNER_NAMES));

	return useQuery({
		enabled: !isEmpty(...Object.values(params)),
		queryKey: ['report-by-partner', params],
		queryFn: () => reportByPartnerService.getByParams(params)
	});
};
