import { SidebarDesktop } from './SidebarDesktop';
import { SidebarMobile } from './SidebarMobile';

export const Sidebar = () => {
	const isDesktop = true;

	return isDesktop ? <SidebarDesktop /> : <SidebarMobile />;
};
