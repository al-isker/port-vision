import dayjs, { Dayjs } from 'dayjs';

export class DateConverter {
	static dayjsToJSON(dayjsInstance: Dayjs) {
		return dayjsInstance.format();
	}

	static dayjsToJSONTime(dayjsInstance: Dayjs) {
		return dayjsInstance.format().split('T')[1];
	}

	static JSONToDayjs(str: string) {
		return dayjs(new Date(str));
	}

	static JSONTimeToDayjs(str: string) {
		return dayjs(new Date(`1970-01-01T${str}`));
	}

	static JSONToDayjsDuration(str: string) {
		return dayjs.duration(str);
	}
}
