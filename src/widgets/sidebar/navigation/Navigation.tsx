'use client';

import clsx from 'clsx';

import { NavigationItem } from '@/ui/NavigationItem';

import { SIDEBAR_NAVIGATION_LINKS } from './navigation.links';
import { useActiveLink } from './use-active-link';

interface Props {
	className?: string;
	open: boolean;
}

export const Navigation = ({ className, open }: Props) => {
	const activeLink = useActiveLink();

	return (
		<nav className={clsx('w-full space-y-0.5 p-space-sm', className)}>
			{SIDEBAR_NAVIGATION_LINKS.map((link, index) => (
				<NavigationItem
					key={index}
					title={link.title}
					startIcon={link.icon}
					href={link.href}
					active={link.href === activeLink.href}
					open={open}
				/>
			))}
		</nav>
	);
};
