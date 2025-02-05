import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
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
			sans: ["Inter", ...fontFamily.sans], // Default sans-serif font
			secondary: ["Roboto", ...fontFamily.sans], // Secondary font
		},
		fontSize: {
			lg: [
				"26px",
				{
					lineHeight: "35.1px",
					letterSpacing: "0.52px",
					// fontWeight: "700",
				},
			],
			md: [
				"20px",
				{
					lineHeight: "26.92px",
					letterSpacing: "0.4px",
					// fontWeight: "700",
				},
			],
			sm: [
				"15px",
				{
					lineHeight: "normal",
					letterSpacing: "0.36px",
				},
			],
		},
		extend: {
			padding: {
				navigationBarBlock: '1.575rem',
				navigationBarInline: '2.1rem',
				navigationBarMobile: '1.406rem',
			},
			colors: {
				bodyBg: "#ffffff", // Default body background color
				bodyText: "#000000", // Default text color
				navBg: '#e5d0ff',
				navLinkActive: '#0e1111'
			},
			lineHeight: {
				navLink: '41.952px',
				logo: '31.2832px',
			},
			letterSpacing: {
				navLink: '-0.13984px',
				logo: '-0.48128px',
			},
			fontSize: {
				navLink: '0.874rem',
				logo: '1.504rem'
			},
			fontWeight: {
				navigation: '400',
			}
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".text-lg": {
					"@screen sm": {
						fontSize: "45px",
						lineHeight: "60.75px",
						letterSpacing: "0.9px",
						// fontWeight: "700",
					},
				},
				".text-md": {
					"@screen sm": {
						fontSize: "28px",
						lineHeight: "40px",
						letterSpacing: "0.56px",
						// fontWeight: "700",
					},
				},
				".text-sm": {
					"@screen sm": {
						fontSize: "17px",
						lineHeight: "normal",
					},
				},
			});
		}),
	],
};

export default config;
