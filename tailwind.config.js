/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				sm: '320px',
				md: '768px',
				lg: '1024px',
				xl: '1440px',
				'2xl': '2560px'
			}
		}
	},
	plugins: [require('tailwind-scrollbar')]
};
