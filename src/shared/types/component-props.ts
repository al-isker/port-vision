import { Component, ComponentType } from 'react';

export type ComponentProps<T> = T extends
	| ComponentType<infer P>
	| Component<infer P>
	? P
	: never;
