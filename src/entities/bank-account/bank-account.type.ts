export interface IBankAccount {
	id: number;
	name: string;
	inn: string;
	kpp: string;
	bik: string;
	bankName: string;
	paymentAccount: string;
	legalAddress: string;
	active: boolean;
	ownerType: BankAccountOwnerTypeEnum;
	ownerId: number;
}

export enum BankAccountOwnerTypeEnum {
	PARTNER = 'PARTNER',
	REFERRER = 'REFERRER'
}
