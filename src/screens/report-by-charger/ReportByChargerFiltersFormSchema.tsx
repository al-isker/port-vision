'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { RHFDateRangePickerWithShortcuts } from '@/smart-ui/date-range-picker/RHFDateRangePickerWithShortcuts';
import { RHFSelect } from '@/smart-ui/select/RHFSelect';

import { Button } from '@/ui/Button';
import { PaperLoading } from '@/ui/PaperLoading';

import { useGetAllChargerQuery } from '@/entities/charger/charger.query';
import { REPORT_BY_CHARGER_NAMES } from '@/entities/report-by-charger/report-by-charger.const';
import { ReportByChargerFormFilters } from '@/entities/report-by-charger/report-by-charger.type';
import { reportByChargerFormFiltersSchema } from '@/entities/report-by-charger/report-by-charger.zod';

import { allOption } from '@/shared/constants/options/all';
import { useGetSearchParams } from '@/shared/hooks/useGetSearchParams';
import { Option } from '@/shared/types/base';

interface Props {
	onSubmit: SubmitHandler<ReportByChargerFormFilters>;
}

export const ReportByChargerFiltersFormSchema = ({ onSubmit }: Props) => {
	const chargerQuery = useGetAllChargerQuery();

	const params = useGetSearchParams(...Object.values(REPORT_BY_CHARGER_NAMES));

	const { control, handleSubmit } = useForm<ReportByChargerFormFilters>({
		mode: 'onSubmit',
		defaultValues: params,
		resolver: zodResolver(reportByChargerFormFiltersSchema)
	});

	if (chargerQuery.isError) {
		return <ErrorView error={chargerQuery.error} />;
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<PaperLoading
				className='flex items-center justify-between'
				component='header'
				loading={chargerQuery.isPending}
			>
				<RHFSelect
					className='flex-[0.3]'
					label='Зарядное устройство'
					name='id'
					options={Array<Option>(
						allOption,
						...(chargerQuery.data?.map(item => ({
							value: item.id,
							label: item.name
						})) ?? [])
					)}
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
