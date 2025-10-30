import { isEmpty } from '../checks/is-empty';

const rublesNumberFormat = new Intl.NumberFormat('ru', {
	style: 'currency',
	currency: 'RUB'
});

export const getRublesView = (value?: number) => {
	if (!isEmpty(value)) {
		return rublesNumberFormat.format(value!);
	}
};
