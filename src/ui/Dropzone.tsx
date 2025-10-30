import { forwardRef, useLayoutEffect, useRef } from 'react';

import { Photo } from '@mui/icons-material';
import { ButtonBase, ButtonBaseProps, useTheme } from '@mui/material';
import { composeRefs } from '@radix-ui/react-compose-refs';
import clsx from 'clsx';

import { Typography } from './Typography';

interface Props extends ButtonBaseProps {
	drag?: boolean;
	disabled?: boolean;
}

export const Dropzone = forwardRef<HTMLElement, Props>(function Dropzone(
	{ children, className, drag, disabled, ...restProps },
	ref
) {
	const theme = useTheme();

	const containerRef = useRef<HTMLElement>(null);
	const svgRef = useRef<SVGSVGElement>(null);
	const rectRef = useRef<SVGRectElement>(null);
	const styleRef = useRef<HTMLStyleElement>(null);

	useLayoutEffect(() => {
		const containerWidth = containerRef.current?.offsetWidth;
		const containerHeight = containerRef.current?.offsetHeight;

		svgRef.current!.viewBox.baseVal.x = 0;
		svgRef.current!.viewBox.baseVal.y = 0;
		svgRef.current!.viewBox.baseVal.width = containerWidth!;
		svgRef.current!.viewBox.baseVal.height = containerHeight!;

		rectRef.current!.width.baseVal.value = containerWidth! - 2;
		rectRef.current!.height.baseVal.value = containerHeight! - 2;

		const strokeDashFirst = containerWidth! / 70;
		const strokeDashSecond = containerWidth! / 120;

		rectRef.current!.style.strokeDasharray = `${strokeDashFirst} ${strokeDashSecond}`;

		styleRef.current!.textContent = `
			@keyframes march {
				to {
					stroke-dashoffset: -${strokeDashFirst + strokeDashSecond};
				}
			}
		`;
	}, []);

	return (
		<ButtonBase
			ref={composeRefs(containerRef, ref)}
			className={clsx(
				'relative flex flex-col items-center justify-center gap-y-1 overflow-hidden rounded p-space-sm',
				{
					'text-black/50': !drag,
					'text-primary': drag,
					'cursor-pointer': !disabled,
					'opacity-80': disabled
				},
				className
			)}
			{...restProps}
		>
			{children}

			<Photo className='transition-colors duration-200' fontSize='large' />
			<Typography className='transition-colors duration-200'>
				Перетащите файлы сюда или кликните для выбора
			</Typography>

			<style ref={styleRef} />

			<svg
				ref={svgRef}
				className='absolute left-0 top-0 size-full'
				preserveAspectRatio='none'
			>
				<rect
					ref={rectRef}
					className={clsx('transition-colors duration-200', {
						'stroke-black/40': !drag,
						'animate-[march_500ms_linear_infinite] stroke-primary': drag
					})}
					fill='none'
					x={1}
					y={1}
					strokeWidth={2}
					rx={theme.shape.borderRadius}
					ry={theme.shape.borderRadius}
				/>
			</svg>
		</ButtonBase>
	);
});
