import { isEmpty } from '../checks/is-empty';

export const getCountItemsView = (items?: number) => {
	if (!isEmpty(items)) {
		return `${items} шт.`;
	}
};
