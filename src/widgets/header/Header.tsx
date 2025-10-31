'use server';

import { AppBar, Toolbar } from '@mui/material';

import { HeaderRootLink } from './HeaderRootLink';

export const Header = () => (
	<AppBar className='z-10' position='static'>
		<Toolbar className='px-space-sm max-md:-my-0.5' disableGutters>
			<HeaderRootLink />
		</Toolbar>
	</AppBar>
);
