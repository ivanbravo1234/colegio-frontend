/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				nav: '800px'
			},
			colors: {
				'primary-container': '#fbc02d',
				'on-surface': '#1b1b1c',
				surface: '#fcf9f8',
				'surface-container-low': '#f6f3f2',
				'surface-container-lowest': '#ffffff',
				'on-surface-variant': '#4f4633',
				'outline-variant': '#d3c5ad',
				'on-primary': '#ffffff',
				primary: '#795900'
			},
			fontFamily: {
				sans: ['Mona Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['ui-monospace', 'monospace']
			},
			keyframes: {
				'contact-pulse': {
					'0%, 100%': { backgroundColor: '#fbc02d', color: '#0a3144' },
					'50%': { backgroundColor: '#ffe566', color: '#0a3144' }
				}
			},
			animation: {
				'contact-pulse': 'contact-pulse 3s ease-in-out infinite'
			}
		}
	},
	plugins: []
}
