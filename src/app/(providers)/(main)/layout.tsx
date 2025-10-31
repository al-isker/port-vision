import { ReactNode, Suspense } from 'react';

import { Header } from '@/widgets/header/Header';

const MainLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
	<div className='flex h-full flex-col bg-primary/10'>
		<Header />
		<div className='scrollable flex-grow overflow-y-scroll'>
			<Suspense>{children}</Suspense>
		</div>
	</div>
);

export default MainLayout;
