'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { ChargerMonitoringBody } from './ChargerMonitoringBody';
import { ChargerMonitoringHeader } from './ChargerMonitoringHeader';

export const ChargerMonitoring = () => (
	<div className='h-full space-y-space'>
		<ChargerMonitoringHeader />
		<ChargerMonitoringBody />
		<SetPaginationParamsScript />
	</div>
);
