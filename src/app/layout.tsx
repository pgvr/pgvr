import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import localFont from "next/font/local"
import "./globals.css"

const berkeleyMono = localFont({
	src: [
		{
			path: "../assets/fonts/BerkeleyMono-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/BerkeleyMono-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../assets/fonts/BerkeleyMono-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
})

export const metadata: Metadata = {
	title: "Ravensburg Technologies",
	description:
		"Ravensburg Technologies is a small web development company based in Mannheim, Germany.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link
					rel="icon"
					type="image/png"
					href="/icons/favicon-96x96.png"
					sizes="96x96"
				/>
				<link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
				<link rel="shortcut icon" href="/icons/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/icons/apple-touch-icon.png"
				/>
				<meta name="apple-mobile-web-app-title" content="MyWebSite" />
				<link rel="manifest" href="/icons/site.webmanifest" />
			</head>
			<body className={`${berkeleyMono.className} antialiased`}>
				<ThemeProvider attribute="class" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
