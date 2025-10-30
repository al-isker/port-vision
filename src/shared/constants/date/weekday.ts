export enum Weekday {
	MONDAY = 'MONDAY',
	TUESDAY = 'TUESDAY',
	WEDNESDAY = 'WEDNESDAY',
	THURSDAY = 'THURSDAY',
	FRIDAY = 'FRIDAY',
	SATURDAY = 'SATURDAY',
	SUNDAY = 'SUNDAY'
}

const weekdayMapView = {
	[Weekday.MONDAY]: 'Понедельник',
	[Weekday.TUESDAY]: 'Вторник',
	[Weekday.WEDNESDAY]: 'Среда',
	[Weekday.THURSDAY]: 'Четверг',
	[Weekday.FRIDAY]: 'Пятница',
	[Weekday.SATURDAY]: 'Суббота',
	[Weekday.SUNDAY]: 'Воскресенье'
};

export const weekdayOrder = Object.values(Weekday);

export const getWeekdayView = (weekday?: Weekday) => {
	return weekday ? weekdayMapView[weekday] : null;
};
