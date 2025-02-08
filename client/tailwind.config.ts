import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config: Config = {
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		fontFamily: {
			sans: ["Poppins", ...fontFamily.sans],
		},
		extend: {
			colors: {
				dark: "#171D3A",
				light: "#E5E9FD",
			}
		}
	},
};

export default config;
