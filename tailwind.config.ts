import type { Config } from "tailwindcss"

export default {
	darkMode: "media",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		// fontFamily: {
		// 	mono: ["Berkeley Mono", "monospace"],
		// },
		colors: {
			gray: {
				1: "var(--gray-1)",
				2: "var(--gray-2)",
				3: "var(--gray-3)",
				4: "var(--gray-4)",
				5: "var(--gray-5)",
				6: "var(--gray-6)",
				7: "var(--gray-7)",
				8: "var(--gray-8)",
				9: "var(--gray-9)",
				10: "var(--gray-10)",
				11: "var(--gray-11)",
				12: "var(--gray-12)",
			},
			primary: {
				1: "var(--primary-1)",
				2: "var(--primary-2)",
				3: "var(--primary-3)",
				4: "var(--primary-4)",
				5: "var(--primary-5)",
				6: "var(--primary-6)",
				7: "var(--primary-7)",
				8: "var(--primary-8)",
				9: "var(--primary-9)",
				10: "var(--primary-10)",
				11: "var(--primary-11)",
				12: "var(--primary-12)",
			},
		},
	},
	plugins: [],
} satisfies Config
