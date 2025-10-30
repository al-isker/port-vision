import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import { match } from 'path-to-regexp';

import { SIDEBAR_NAVIGATION_LINKS } from './navigation.links';

const isMatch = (pathname: string, matchValue: string) => {
	const matcher = match(matchValue, {
		end: false
	});

	return !!matcher(pathname);
};

const getActiveLink = (pathname: string) => {
	for (let i = 0; i < SIDEBAR_NAVIGATION_LINKS.length; i++) {
		const link = SIDEBAR_NAVIGATION_LINKS[i];

		if (link.sublinks) {
			for (const sublink of link.sublinks) {
				if (isMatch(pathname, sublink.matchValue)) {
					return {
						href: sublink.href,
						collapsibleLinkIndex: i
					};
				}
			}
		} else {
			if (isMatch(pathname, link.matchValue)) {
				return {
					href: link.href
				};
			}
		}
	}

	return {};
};

export const useActiveLink = () => {
	const pathname = usePathname();

	return useMemo(() => getActiveLink(pathname), [pathname]);
};
