module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				landing: "url('./assets/background.jpg')"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('daisyui')]
}
