'use server';

import { ChargersOnMapBody } from './ChargersOnMapBody';
import { ChargersOnMapHeader } from './ChargersOnMapHeader';

export const ChargersOnMap = () => (
	<div className='h-full space-y-space'>
		<ChargersOnMapHeader />
		<ChargersOnMapBody />
	</div>
);
