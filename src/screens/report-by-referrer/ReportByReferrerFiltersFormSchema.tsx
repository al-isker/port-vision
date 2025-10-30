'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { RHFDateRangePickerWithShortcuts } from '@/smart-ui/date-range-picker/RHFDateRangePickerWithShortcuts';
import { RHFSelect } from '@/smart-ui/select/RHFSelect';

import { Button } from '@/ui/Button';
import { PaperLoading } from '@/ui/PaperLoading';

import { useGetAllReferrerQuery } from '@/entities/referrer/referrer.query';
import { REPORT_BY_REFERRER_NAMES } from '@/entities/report-by-referrer/report-by-referrer.const';
import { ReportByReferrerFormFilters } from '@/entities/report-by-referrer/report-by-referrer.type';
import { reportByReferrerFormFiltersSchema } from '@/entities/report-by-referrer/report-by-referrer.zod';

import { useGetSearchParams } from '@/shared/hooks/useGetSearchParams';

interface Props {
	onSubmit: SubmitHandler<ReportByReferrerFormFilters>;
}

export const ReportByReferrerFiltersFormSchema = ({ onSubmit }: Props) => {
	const referrerQuery = useGetAllReferrerQuery();

	const params = useGetSearchParams(...Object.values(REPORT_BY_REFERRER_NAMES));

	const { control, handleSubmit } = useForm<ReportByReferrerFormFilters>({
		mode: 'onSubmit',
		defaultValues: params,
		resolver: zodResolver(reportByReferrerFormFiltersSchema)
	});

	if (referrerQuery.isError) {
		return <ErrorView error={referrerQuery.error} />;
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<PaperLoading
				className='flex items-center justify-between'
				component='header'
				loading={referrerQuery.isPending}
			>
				<RHFSelect
					className='flex-[0.3]'
					label='Реферрер'
					name='id'
					options={
						referrerQuery.data?.map(item => ({
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
