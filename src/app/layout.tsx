import { Metadata } from 'next';
import { Golos_Text } from 'next/font/google';
import { ReactNode } from 'react';

export const metadata: Metadata = {
	title: 'Port Vision',
	icons: '/favicon.png'
};

const fontPrimary = Golos_Text({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-primary'
});

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<html lang='ru'>
			<body className={fontPrimary.variable}>{children}</body>
		</html>
	);
};

export default RootLayout;
