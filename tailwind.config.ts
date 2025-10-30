import type { Config } from 'tailwindcss';

// noinspection ES6PreferShortImport
import {
	BORDER_RADIUS,
	BREAKPOINTS,
	FONT_FAMILY
} from './src/shared/styles/tokens';

const config: Config = {
	important: 'html',

	content: ['./src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		screens: {
			xs: `${BREAKPOINTS.xs}px`,
			sm: `${BREAKPOINTS.sm}px`,
			md: `${BREAKPOINTS.md}px`,
			lg: `${BREAKPOINTS.lg}px`,
			xl: `${BREAKPOINTS.xl}px`
		},

		colors: {
			transparent: 'transparent',

			primary: 'rgb(var(--mui-palette-primary-mainChannel) / <alpha-value>)',
			'primary-light':
				'rgb(var(--mui-palette-primary-lightChannel) / <alpha-value>)',
			'primary-dark':
				'rgb(var(--mui-palette-primary-darkChannel) / <alpha-value>)',

			secondary:
				'rgb(var(--mui-palette-secondary-mainChannel) / <alpha-value>)',
			'secondary-light':
				'rgb(var(--mui-palette-secondary-lightChannel) / <alpha-value>)',
			'secondary-dark':
				'rgb(var(--mui-palette-secondary-darkChannel) / <alpha-value>)',

			white:
				'rgb(var(--mui-palette-background-defaultChannel) / <alpha-value>)',

			black: 'rgb(var(--mui-palette-text-primaryChannel) / <alpha-value>)',

			'always-white': 'rgb(255 255 255 / <alpha-value>)',
			'always-black': 'rgb(18 18 18 / <alpha-value>)',
			'always-blackest': 'rgb(0 0 0 / <alpha-value>)'
		},

		fontFamily: FONT_FAMILY,

		borderRadius: {
			none: '0',
			sm: `${BORDER_RADIUS / 1.5}px`,
			DEFAULT: `${BORDER_RADIUS}px`,
			lg: `${BORDER_RADIUS * 1.5}px`,
			full: '9999px'
		},

		extend: {
			spacing: {
				'space-sm': 'var(--space-sm)',
				space: 'var(--space)'
			},

			boxShadow: {
				'mui-0': 'var(--mui-shadows-0)',
				'mui-1': 'var(--mui-shadows-1)',
				'mui-2': 'var(--mui-shadows-2)',
				'mui-3': 'var(--mui-shadows-3)',
				'mui-4': 'var(--mui-shadows-4)',
				'mui-5': 'var(--mui-shadows-5)',
				'mui-6': 'var(--mui-shadows-6)',
				'mui-7': 'var(--mui-shadows-7)',
				'mui-8': 'var(--mui-shadows-8)',
				'mui-9': 'var(--mui-shadows-9)',
				'mui-10': 'var(--mui-shadows-10)',
				'mui-11': 'var(--mui-shadows-11)',
				'mui-12': 'var(--mui-shadows-12)',
				'mui-13': 'var(--mui-shadows-13)',
				'mui-14': 'var(--mui-shadows-14)',
				'mui-15': 'var(--mui-shadows-15)',
				'mui-16': 'var(--mui-shadows-16)',
				'mui-17': 'var(--mui-shadows-17)',
				'mui-18': 'var(--mui-shadows-18)',
				'mui-19': 'var(--mui-shadows-19)',
				'mui-20': 'var(--mui-shadows-20)',
				'mui-21': 'var(--mui-shadows-21)',
				'mui-22': 'var(--mui-shadows-22)',
				'mui-23': 'var(--mui-shadows-23)',
				'mui-24': 'var(--mui-shadows-24)'
			},

			backgroundImage: {
				'gradient-radial':
					'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},

	plugins: []
};
export default config;
