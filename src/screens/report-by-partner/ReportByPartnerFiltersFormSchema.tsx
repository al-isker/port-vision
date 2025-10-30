'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { RHFDateRangePickerWithShortcuts } from '@/smart-ui/date-range-picker/RHFDateRangePickerWithShortcuts';
import { RHFSelect } from '@/smart-ui/select/RHFSelect';

import { Button } from '@/ui/Button';
import { PaperLoading } from '@/ui/PaperLoading';

import { useGetAllPartnerQuery } from '@/entities/partner/partner.query';
import { REPORT_BY_PARTNER_NAMES } from '@/entities/report-by-partner/report-by-partner.const';
import { ReportByPartnerFormFilters } from '@/entities/report-by-partner/report-by-partner.type';
import { reportByPartnerFormFiltersSchema } from '@/entities/report-by-partner/report-by-partner.zod';

import { useGetSearchParams } from '@/shared/hooks/useGetSearchParams';

interface Props {
	onSubmit: SubmitHandler<ReportByPartnerFormFilters>;
}

export const ReportByPartnerFiltersFormSchema = ({ onSubmit }: Props) => {
	const partnerQuery = useGetAllPartnerQuery();

	const params = useGetSearchParams(...Object.values(REPORT_BY_PARTNER_NAMES));

	const { control, handleSubmit } = useForm<ReportByPartnerFormFilters>({
		mode: 'onSubmit',
		defaultValues: params,
		resolver: zodResolver(reportByPartnerFormFiltersSchema)
	});

	if (partnerQuery.isError) {
		return <ErrorView error={partnerQuery.error} />;
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<PaperLoading
				className='flex items-center justify-between'
				component='header'
				loading={partnerQuery.isPending}
			>
				<RHFSelect
					className='flex-[0.3]'
					label='Партнёр'
					name='id'
					options={
						partnerQuery.data?.map(item => ({
							value: item.id,
							label: item.name
						})) ?? []
					}
					control={control}
				/>

				<RHFDateRangePickerWithShortcuts
					dateRangePickerProps={{ className: 'flex-[0.4]' }}
					selectProps={{ className: 'flex-[0.3]' }}
					nameStart='start_date'
					nameEnd='end_date'
					control={control}
				/>

				<Button className='basis-36' variant='contained' type='submit'>
					Сформировать
				</Button>
			</PaperLoading>
		</form>
	);
};
