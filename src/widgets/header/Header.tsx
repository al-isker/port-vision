'use server';

import { AppBar, Toolbar } from '@mui/material';

import { HeaderRootLink } from './HeaderRootLink';

export const Header = () => (
	<AppBar position='static'>
		<Toolbar className='px-space-sm' disableGutters>
			<HeaderRootLink />
		</Toolbar>
	</AppBar>
);
