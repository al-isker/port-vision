import { ReactNode } from 'react';

export interface Option<Value = unknown> {
	label: ReactNode;
	value: Value;
}
