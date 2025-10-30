import { ReactNode, Suspense } from 'react';

import { Header } from '@/widgets/header/Header';
import { Main } from '@/widgets/main/Main';

const MainLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
	<>
		<Header />
		<Main>
			<Suspense>{children}</Suspense>
		</Main>
	</>
);

export default MainLayout;
