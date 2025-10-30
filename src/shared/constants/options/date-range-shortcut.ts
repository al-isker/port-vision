import { Option } from '@/shared/types/base';

import { dateShortcut } from '../date/date-shortcut';

type DateRangeShortcutOption = Option<'none' | string[]>;

export const dateRangeShortcutOptions: DateRangeShortcutOption[] = [
	{
		label: 'Пользовательский',
		value: 'none'
	},
	{
		label: 'Сегодня',
		value: dateShortcut.rangeToday().JSON
	},
	{
		label: 'Вчера',
		value: dateShortcut.rangeYesterday().JSON
	},
	{
		label: 'Текущая неделя',
		value: dateShortcut.rangeCurrentWeek().JSON
	},
	{
		label: 'Прошлая неделя',
		value: dateShortcut.rangeLastWeek().JSON
	},
	{
		label: 'Текущий месяц',
		value: dateShortcut.rangeCurrentMonth().JSON
	},
	{
		label: 'Прошлый месяц',
		value: dateShortcut.rangeLastMonth().JSON
	}
];
