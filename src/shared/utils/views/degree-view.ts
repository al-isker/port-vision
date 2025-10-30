import { isEmpty } from '../checks/is-empty';

const degreeNumberFormat = new Intl.NumberFormat('ru', {
	style: 'unit',
	unit: 'degree'
});

export const getDegreeView = (value?: number) => {
	if (!isEmpty(value)) {
		return degreeNumberFormat.format(value!);
	}
};
