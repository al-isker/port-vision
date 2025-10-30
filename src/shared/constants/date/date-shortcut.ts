import dayjs from 'dayjs';

import { DateConverter } from '@/shared/utils/converters/date-converter';

class DateShortcut {
	rangeToday() {
		const today = dayjs(new Date());
		const rangeToday = [today, today];

		return {
			dayjs: rangeToday,
			JSON: rangeToday.map(DateConverter.dayjsToJSON)
		};
	}

	rangeYesterday() {
		const yesterday = dayjs().subtract(1, 'day');
		const rangeYesterday = [yesterday, yesterday];

		return {
			dayjs: rangeYesterday,
			JSON: rangeYesterday.map(DateConverter.dayjsToJSON)
		};
	}

	rangeCurrentWeek() {
		const today = dayjs();
		const rangeCurrentWeek = [today.startOf('week'), today.endOf('week')];

		return {
			dayjs: rangeCurrentWeek,
			JSON: rangeCurrentWeek.map(DateConverter.dayjsToJSON)
		};
	}

	rangeLastWeek() {
		const prevWeek = dayjs().subtract(1, 'week');
		const rangeLastWeek = [prevWeek.startOf('week'), prevWeek.endOf('week')];

		return {
			dayjs: rangeLastWeek,
			JSON: rangeLastWeek.map(DateConverter.dayjsToJSON)
		};
	}

	rangeCurrentMonth() {
		const today = dayjs();
		const rangeCurrentMonth = [today.startOf('month'), today.endOf('month')];

		return {
			dayjs: rangeCurrentMonth,
			JSON: rangeCurrentMonth.map(DateConverter.dayjsToJSON)
		};
	}

	rangeLastMonth() {
		const prevMonth = dayjs().subtract(1, 'month');
		const rangeLastMonth = [
			prevMonth.startOf('month'),
			prevMonth.endOf('month')
		];

		return {
			dayjs: rangeLastMonth,
			JSON: rangeLastMonth.map(DateConverter.dayjsToJSON)
		};
	}
}

export const dateShortcut = new DateShortcut();
