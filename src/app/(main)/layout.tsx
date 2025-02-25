import logo from "@/assets/images/logo.svg"
import { Link } from "@/components/link"
import Image from "next/image"

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="max-w-3xl mx-auto p-6 bg-gray-1 border m-6">
			<div className="flex items-center justify-between gap-4">
				<h1 className="font-bold">Ravensburg Technologies</h1>

				<Image src={logo} alt="Ravensburg Technologies" className="w-12 h-12" />
			</div>

			<div className="flex gap-4 items-center">
				<Link href="/" exact>
					Home
				</Link>
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
			</div>

			<div className="mt-6">{children}</div>
		</div>
	)
}
