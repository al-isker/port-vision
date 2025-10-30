import { isEmpty } from '../checks/is-empty';
import { DateConverter } from '../converters/date-converter';

export const getDateView = (strDate: string | undefined, template: string) => {
	if (!isEmpty(strDate)) {
		const date = DateConverter.JSONToDayjs(strDate!);

		return date.format(template);
	}
};
