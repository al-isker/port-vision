'use client';

import { TableCell as MUITableCell, styled } from '@mui/material';

export const TableCell = styled(MUITableCell)(({ children }) => {
	const textLength = children?.toString().length;

	return {
		textWrap: textLength && textLength <= 36 ? 'nowrap' : undefined
	};
});
