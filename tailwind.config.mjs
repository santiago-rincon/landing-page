/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// #5e89cf base color
			colors: {
				'havelock-blue': {
					'50': '#f2f6fc',
					'100': '#e2ebf7',
					'200': '#ccdcf1',
					'300': '#a9c6e7',
					'400': '#7fa8db',
					'500': '#5e89cf',
					'600': '#4d72c3',
					'700': '#4360b2',
					'800': '#3c5091',
					'900': '#344574',
					'950': '#232c48',
				},
				'primary': '#a9c6e7',
				'primary-dark': '#232c48',
			}
		},
	},
	darkMode: 'class',
	plugins: [require('tailwindcss-animated')],
}
