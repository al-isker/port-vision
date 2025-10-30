import { ReactNode } from 'react';

export const Main = ({ children }: { children: ReactNode }) => {
	return (
		<main className='min-h-full overflow-hidden bg-primary/10 p-space'>
			{children}
		</main>
	);
};
