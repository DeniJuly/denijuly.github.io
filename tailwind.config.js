module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			container: {
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},
			colors: {
				primary: "#0779E4",
				secondary: "#FCBF1E",
				black: "#333333",
				"light-primary": "#EDF6FF",
				"light-secondary": "#FFF6DE",
				"dark-black": "#222831",
				"dark-black-light": "#393E46",
				"dark-black-light-2": "#73777C",
			},
			fontFamily: {
				quicksand: ["Quicksand"],
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
