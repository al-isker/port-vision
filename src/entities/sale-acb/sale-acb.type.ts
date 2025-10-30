export interface ISaleAcbItem {
	uuid: string;
	clientName: string;
	clientPhone: string;
	partnerName: string;
	referrerName: string;
	acbUuid: string;
	status: SaleAcbStatusEnum;
	clientTariffName: string;
	startChargerName: string;
	stopChargerName: string;
	startTime: string;
	stopTime: string;
	totalSum: number;
}

export interface ISaleAcbByUuid {
	uuid: string;
	clientId: number;
	partnerId: number;
	referrerId: number;
	acbUuid: string;
	status: SaleAcbStatusEnum;
	clientTariffId: number;
	startChargerId: number;
	stopChargerId: number;
	startTime: string;
	stopTime: string;
	startAcbPercentage: number;
	stopAcbPercentage: number;
	totalSum: number;
	payments: ISaleAcbPayment[];
}

export interface ISaleAcbPayment {
	id: number;
	paymentUrl: string;
	status: PaymentStatusEnum;
	completedAt: string;
	reason: PaymentReasonEnum;
	sum: number;
}

export enum SaleAcbStatusEnum {
	CREATED = 'CREATED',
	IN_PROGRESS = 'IN_PROGRESS',
	PAYED = 'PAYED',
	FINISHED = 'FINISHED',
	CANCELED = 'CANCELED'
}

export enum PaymentStatusEnum {
	CREATED = 'CREATED',
	IN_PROGRESS = 'IN_PROGRESS',
	SUCCESS = 'SUCCESS',
	FAILED = 'FAILED'
}

// удалить, если не нужен
export enum PaymentReasonEnum {
	LINK_PAYMENT_METHOD = 'LINK_PAYMENT_METHOD',
	RECURRENT = 'RECURRENT',
	REFUND = 'REFUND'
}
