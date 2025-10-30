import { isEmpty } from '../checks/is-empty';
import { DateConverter } from '../converters/date-converter';

export const getOnlyTimeView = (
	strDate: string | undefined,
	template: string
) => {
	if (!isEmpty(strDate)) {
		const date = DateConverter.JSONTimeToDayjs(strDate!);

		return date.format(template);
	}
};
