import { isEmpty } from '../checks/is-empty';

const percentNumberFormat = new Intl.NumberFormat('ru', {
	style: 'unit',
	unit: 'percent'
});

export const getPercentView = (value?: number) => {
	if (!isEmpty(value)) {
		return percentNumberFormat.format(value!);
	}
};
