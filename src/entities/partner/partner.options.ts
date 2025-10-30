import { PaymentMethodEnum } from './partner.type';
import { getPaymentMethodView } from './partner.view';

export const paymentMethodOptions = [
	{
		value: PaymentMethodEnum.BANK_ACCOUNT,
		label: getPaymentMethodView(PaymentMethodEnum.BANK_ACCOUNT)
	},
	{
		value: PaymentMethodEnum.ANOTHER,
		label: getPaymentMethodView(PaymentMethodEnum.ANOTHER)
	}
];
