import { Table as MUITable, TableProps } from '@mui/material';
import { deepmerge } from '@mui/utils';

interface Props extends TableProps {
	disablePadding?: boolean;
}

export const Table = ({ sx, disablePadding, ...restProps }: Props) => {
	return (
		<MUITable
			sx={deepmerge(
				sx ?? {},
				disablePadding && {
					'& td:first-child, & th:first-child': {
						paddingLeft: 0
					},
					'& td:last-child, & th:last-child': {
						paddingRight: 0
					}
				}
			)}
			{...restProps}
		/>
	);
};
