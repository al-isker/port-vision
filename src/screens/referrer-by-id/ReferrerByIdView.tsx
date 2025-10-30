'use client';

import { Fragment } from 'react';

import { Divider } from '@mui/material';

import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';

import { getPaymentMethodView } from '@/entities/partner/partner.view';
import { IReferrerTariff } from '@/entities/referrer-tariff/referrer-tariff.type';
import { IReferrer } from '@/entities/referrer/referrer.type';

import { isFilledArray } from '@/shared/utils/checks/is-filled-array';
import { getPercentView } from '@/shared/utils/views/percentage-view';
import { getPhoneView } from '@/shared/utils/views/phone-view';
import { getWordBySingularOrPlural } from '@/shared/utils/views/word-by-singular-or-plural';
import { getYesNoView } from '@/shared/utils/views/yes-no-view';

import { ReferrerByIdViewHeader } from './ReferrerByIdViewHeader';

interface Props {
	referrer: IReferrer;
	referrerTariff?: IReferrerTariff;
}

export const ReferrerByIdView = ({ referrer, referrerTariff }: Props) => {
	return (
		<div className='h-full space-y-space'>
			<ReferrerByIdViewHeader
				referrerId={referrer.id}
				referrerName={referrer.name}
			/>

			<div className='grid grid-cols-2 gap-6'>
				<Paper>
					<MapView title='Основные данные'>
						<MapViewRow label='ID'>{referrer.id}</MapViewRow>
						<MapViewRow label='Имя'>{referrer.name}</MapViewRow>
						<MapViewRow label='Email'>{referrer.email}</MapViewRow>
						<MapViewRow label='Номер телефона'>
							{getPhoneView(referrer.phone)}
						</MapViewRow>
						<MapViewRow label='Комментарий'>{referrer.comment}</MapViewRow>
						<MapViewRow label='Метод оплаты'>
							{getPaymentMethodView(referrer.paymentMethod)}
						</MapViewRow>
						<MapViewRow label='Активный'>
							{getYesNoView(referrer.active)}
						</MapViewRow>
					</MapView>
				</Paper>

				{referrerTariff && (
					<Paper>
						<MapView title='Тариф'>
							<MapViewRow label='ID'>{referrerTariff.id}</MapViewRow>
							<MapViewRow label='Название'>{referrerTariff.name}</MapViewRow>
							<MapViewRow label='Процент от продаж'>
								{getPercentView(referrerTariff.percentage)}
							</MapViewRow>
						</MapView>
					</Paper>
				)}

				{isFilledArray(referrer.bankAccounts) && (
					<Paper>
						<MapView
							title={getWordBySingularOrPlural(referrer.bankAccounts!.length, [
								'Расчётный счёт',
								'Расчётные счета'
							])}
						>
							{referrer.bankAccounts!.map((item, index) => (
								<Fragment key={item.id}>
									<MapViewRow label='ID'>{item.id}</MapViewRow>
									<MapViewRow label='Название'>{item.name}</MapViewRow>
									<MapViewRow label='ИНН'>{item.inn}</MapViewRow>
									<MapViewRow label='КПП'>{item.kpp}</MapViewRow>
									<MapViewRow label='БИК'>{item.bik}</MapViewRow>
									<MapViewRow label='Название банка'>
										{item.bankName}
									</MapViewRow>
									<MapViewRow label='Расчетный счет'>
										{item.paymentAccount}
									</MapViewRow>
									<MapViewRow label='Юридический адрес'>
										{item.legalAddress}
									</MapViewRow>
									<MapViewRow label='Активный'>
										{getYesNoView(item.active)}
									</MapViewRow>

									{index !== referrer.bankAccounts!.length - 1 && <Divider />}
								</Fragment>
							))}
						</MapView>
					</Paper>
				)}
			</div>
		</div>
	);
};
