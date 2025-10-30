import { PaymentStatusEnum, SaleAcbStatusEnum } from './sale-acb.type';

const saleAcbStatusMapView = {
	[SaleAcbStatusEnum.CREATED]: 'Создан',
	[SaleAcbStatusEnum.IN_PROGRESS]: 'Действует',
	[SaleAcbStatusEnum.PAYED]: 'Оплачен',
	[SaleAcbStatusEnum.FINISHED]: 'Завершён',
	[SaleAcbStatusEnum.CANCELED]: 'Отменён'
};

export const getSaleAcbStatusView = (saleAcbStatus?: SaleAcbStatusEnum) => {
	return saleAcbStatus ? saleAcbStatusMapView[saleAcbStatus] : null;
};

const paymentStatusMapView = {
	[PaymentStatusEnum.CREATED]: 'Создан',
	[PaymentStatusEnum.IN_PROGRESS]: 'Ожидает',
	[PaymentStatusEnum.SUCCESS]: 'Оплачен',
	[PaymentStatusEnum.FAILED]: 'Ошибка'
};

export const getPaymentStatusView = (paymentStatus?: PaymentStatusEnum) => {
	return paymentStatus ? paymentStatusMapView[paymentStatus] : null;
};
