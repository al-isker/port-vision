import { isEmpty } from '../checks/is-empty';
import { DateConverter } from '../converters/date-converter';

export const getDurationView = (
	strDuration: string | undefined,
	template: string
) => {
	if (!isEmpty(strDuration)) {
		const duration = DateConverter.JSONToDayjsDuration(strDuration!);

		const durationWithoutMilliseconds = duration.subtract(
			duration.milliseconds()
		);

		return durationWithoutMilliseconds.format(template);
	}
};
