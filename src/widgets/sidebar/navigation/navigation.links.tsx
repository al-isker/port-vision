import { Equalizer } from '@mui/icons-material';

import { ROUTES } from '@/shared/config/routes/routes';

export const SIDEBAR_NAVIGATION_LINKS = [
	{
		title: 'Мониториг',
		matchValue: ROUTES.port(),
		href: ROUTES.port(),
		icon: <Equalizer />
	}
	// {
	// 	title: 'Аренды',
	// 	matchValue: ROUTES.saleAcb(),
	// 	href: ROUTES.saleAcbPagination(),
	// 	icon: <MoveUp />
	// },
	// {
	// 	title: 'Партнёры',
	// 	matchValue: ROUTES.partners(),
	// 	href: ROUTES.partnersPagination(),
	// 	icon: <Group />
	// },
	// {
	// 	title: 'Сотрудники',
	// 	matchValue: ROUTES.employees(),
	// 	href: ROUTES.employeesPagination(),
	// 	icon: <Engineering />
	// },
	// {
	// 	title: 'Реферреры',
	// 	matchValue: ROUTES.referrers(),
	// 	href: ROUTES.referrersPagination(),
	// 	icon: <AccessibilityNew />
	// },
	// {
	// 	title: 'Клиенты',
	// 	matchValue: ROUTES.clients(),
	// 	href: ROUTES.clientsPagination(),
	// 	icon: <Groups />
	// },
	// {
	// 	title: 'Тарифы',
	// 	icon: <RequestPage />,
	// 	sublinks: [
	// 		{
	// 			title: 'Партнёров',
	// 			matchValue: ROUTES.partnerTariffs(),
	// 			href: ROUTES.partnerTariffsPagination()
	// 		},
	// 		{
	// 			title: 'Реферреров',
	// 			matchValue: ROUTES.referrerTariffs(),
	// 			href: ROUTES.referrerTariffsPagination()
	// 		},
	// 		{
	// 			title: 'Клиентов',
	// 			matchValue: ROUTES.clientTariffs(),
	// 			href: ROUTES.clientTariffsPagination()
	// 		}
	// 	]
	// },
	// {
	// 	title: 'Зарядные устройства',
	// 	matchValue: ROUTES.chargers(),
	// 	href: ROUTES.chargersPagination(),
	// 	icon: <Power />
	// },
	// {
	// 	title: 'Карта зарядных устройств',
	// 	matchValue: ROUTES.chargersOnMap(),
	// 	href: ROUTES.chargersOnMap(),
	// 	icon: <FmdGood />
	// },
	// {
	// 	title: 'Типы зарядных устройств',
	// 	matchValue: ROUTES.chargerTypes(),
	// 	href: ROUTES.chargerTypesPagination(),
	// 	icon: <SettingsInputComponent />
	// },
	// {
	// 	title: 'Группы зарядных устройств',
	// 	matchValue: ROUTES.exchangeGroups(),
	// 	href: ROUTES.exchangeGroupsPagination(),
	// 	icon: <AccountTreeRounded />
	// },
	// {
	// 	title: 'Точки зарядных устройств',
	// 	matchValue: ROUTES.chargerPlaces(),
	// 	href: ROUTES.chargerPlacesPagination(),
	// 	icon: <SouthAmerica />
	// },
	// {
	// 	title: 'Привязки',
	// 	icon: <Link />,
	// 	sublinks: [
	// 		{
	// 			title: 'Зарядные устройства - сотрудники',
	// 			matchValue: ROUTES.bindChargersToEmployees(),
	// 			href: ROUTES.bindChargersToEmployeesPagination()
	// 		}
	// 	]
	// },
	// {
	// 	title: 'Расчётные счета',
	// 	matchValue: ROUTES.bankAccounts(),
	// 	href: ROUTES.bankAccountsPagination(),
	// 	icon: <AssuredWorkload />
	// },
	// {
	// 	title: 'Отчёты',
	// 	icon: <TextSnippet />,
	// 	sublinks: [
	// 		{
	// 			title: 'Где повербанк?',
	// 			matchValue: ROUTES.reportWherePowerbank(),
	// 			href: ROUTES.reportWherePowerbank()
	// 		},
	// 		{
	// 			title: 'По зарядному устройству',
	// 			matchValue: ROUTES.reportByCharger(),
	// 			href: ROUTES.reportByChargerToday()
	// 		},
	// 		{
	// 			title: 'Взаиморасчёты партнёра',
	// 			matchValue: ROUTES.reportByPartner(),
	// 			href: ROUTES.reportByPartnerToday()
	// 		},
	// 		{
	// 			title: 'Взаиморасчёты реферрера',
	// 			matchValue: ROUTES.reportByReferrer(),
	// 			href: ROUTES.reportByReferrerToday()
	// 		}
	// 	]
	// },
	// {
	// 	title: 'Роли',
	// 	matchValue: ROUTES.roles(),
	// 	href: ROUTES.rolesPagination(),
	// 	icon: <LockPerson />
	// }
];
