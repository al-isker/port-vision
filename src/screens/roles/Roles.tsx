'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { RolesBody } from './RolesBody';
import { RolesHeader } from './RolesHeader';

export const Roles = () => (
	<div className='space-y-space h-full'>
		<RolesHeader />
		<RolesBody />
		<SetPaginationParamsScript />
	</div>
);
