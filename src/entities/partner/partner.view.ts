import { PaymentMethodEnum } from './partner.type';

const paymentMethodMapView = {
	[PaymentMethodEnum.BANK_ACCOUNT]: 'Расчётный счёт',
	[PaymentMethodEnum.ANOTHER]: 'Другой'
};

export const getPaymentMethodView = (paymentMethod?: PaymentMethodEnum) => {
	return paymentMethod ? paymentMethodMapView[paymentMethod] : null;
};
