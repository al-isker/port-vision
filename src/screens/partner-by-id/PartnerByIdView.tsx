'use client';

import { Fragment } from 'react';

import { Divider } from '@/ui/Divider';
import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';

import { IPartnerTariff } from '@/entities/partner-tariff/partner-tariff.type';
import { IPartner } from '@/entities/partner/partner.type';
import { getPaymentMethodView } from '@/entities/partner/partner.view';
import { IReferrer } from '@/entities/referrer/referrer.type';

import { isFilledArray } from '@/shared/utils/checks/is-filled-array';
import { getPercentView } from '@/shared/utils/views/percentage-view';
import { getPhoneView } from '@/shared/utils/views/phone-view';
import { getWordBySingularOrPlural } from '@/shared/utils/views/word-by-singular-or-plural';
import { getYesNoView } from '@/shared/utils/views/yes-no-view';

import { PartnerByIdViewHeader } from './PartnerByIdViewHeader';

interface Props {
	partner: IPartner;
	partnerTariff?: IPartnerTariff;
	referrer?: IReferrer;
}

export const PartnerByIdView = ({
	partner,
	partnerTariff,
	referrer
}: Props) => {
	return (
		<div className='h-full space-y-space'>
			<PartnerByIdViewHeader
				partnerId={partner.id}
				partnerName={partner.name}
			/>

			<div className='grid grid-cols-2 gap-6'>
				<Paper>
					<MapView title='Основные данные'>
						<MapViewRow label='ID'>{partner.id}</MapViewRow>
						<MapViewRow label='Имя'>{partner.name}</MapViewRow>
						<MapViewRow label='Email'>{partner.email}</MapViewRow>
						<MapViewRow label='Номер телефона'>
							{getPhoneView(partner.phone)}
						</MapViewRow>
						<MapViewRow label='Комментарий'>{partner.comment}</MapViewRow>
						<MapViewRow label='Метод оплаты'>
							{getPaymentMethodView(partner.paymentMethod)}
						</MapViewRow>
						<MapViewRow label='Активный'>
							{getYesNoView(partner.active)}
						</MapViewRow>
					</MapView>
				</Paper>

				{partnerTariff && (
					<Paper>
						<MapView title='Тариф'>
							<MapViewRow label='ID'>{partnerTariff.id}</MapViewRow>
							<MapViewRow label='Название'>{partnerTariff.name}</MapViewRow>
							<MapViewRow label='Процент от продаж'>
								{getPercentView(partnerTariff.percentage)}
							</MapViewRow>
						</MapView>
					</Paper>
				)}

				{referrer && (
					<Paper>
						<MapView title='Реферрер'>
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
				)}

				{isFilledArray(partner.bankAccounts) && (
					<Paper>
						<MapView
							title={getWordBySingularOrPlural(partner.bankAccounts!.length, [
								'Расчётный счёт',
								'Расчётные счета'
							])}
						>
							{partner.bankAccounts!.map((item, index) => (
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

									{index !== partner.bankAccounts!.length - 1 && <Divider />}
								</Fragment>
							))}
						</MapView>
					</Paper>
				)}
			</div>
		</div>
	);
};
