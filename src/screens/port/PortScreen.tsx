'use server';

import { PortBody } from './PortBody';
import { PortHeader } from './PortHeader';

export const PortScreen = () => (
	<div className='h-full space-y-space'>
		<PortHeader />
		<PortBody />
	</div>
);
