import { isEmpty } from '../checks/is-empty';
import { DateConverter } from '../converters/date-converter';

interface Formats {
	years?: (val: number) => string;
	months?: (val: number) => string;
	days?: (val: number) => string;
	hours?: (val: number) => string;
	minutes?: (val: number) => string;
	seconds?: (val: number) => string;
}

const defaultFormats: Required<Formats> = {
	years: val => val + 'г',
	months: val => val + 'мес',
	days: val => val + 'д',
	hours: val => val + 'ч',
	minutes: val => val + 'м',
	seconds: val => val + 'c'
};

export const getDynamicDurationView = (
	strDuration: string | undefined,
	formats: Formats = {}
) => {
	if (!isEmpty(strDuration)) {
		const duration = DateConverter.JSONToDayjsDuration(strDuration!);

		const years = duration.years();
		const months = duration.months();
		const days = duration.days();
		const hours = duration.hours();
		const minutes = duration.minutes();
		const seconds = Math.trunc(duration.seconds());

		const durationArr = [];

		if (years > 0) {
			durationArr.push((formats.years ?? defaultFormats.years)(years));
		}
		if (months > 0) {
			durationArr.push((formats.months ?? defaultFormats.months)(months));
		}
		if (days > 0) {
			durationArr.push((formats.days ?? defaultFormats.days)(days));
		}
		if (hours > 0) {
			durationArr.push((formats.hours ?? defaultFormats.hours)(hours));
		}
		if (minutes > 0) {
			durationArr.push((formats.minutes ?? defaultFormats.minutes)(minutes));
		}
		if (seconds > 0) {
			durationArr.push((formats.seconds ?? defaultFormats.seconds)(seconds));
		}

		return durationArr.join(' ');
	}
};
