import { BankAccountOwnerTypeEnum } from './bank-account.type';

const bankAccountOwnerTypeMapView = {
	[BankAccountOwnerTypeEnum.PARTNER]: 'Партнёр',
	[BankAccountOwnerTypeEnum.REFERRER]: 'Реферрер'
};

export const getBankAccountOwnerTypeView = (
	bankAccountOwnerType: BankAccountOwnerTypeEnum
) => {
	return bankAccountOwnerType
		? bankAccountOwnerTypeMapView[bankAccountOwnerType]
		: null;
};
