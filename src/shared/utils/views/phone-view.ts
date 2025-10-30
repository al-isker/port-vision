import { IMask } from 'react-imask';

import { phoneMask } from '../validation/mask';

const mask = IMask.createMask(phoneMask);

export const getPhoneView = (phone?: string) => {
	if (phone) {
		mask.resolve(phone);

		return mask.value;
	}
};
