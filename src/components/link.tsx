"use client"
import { cn } from "@/utils"
import NextLink, { type LinkProps } from "next/link"
import { usePathname, useRouter } from "next/navigation"

type Props = LinkProps & {
	children: React.ReactNode
	className?: string
	exact?: boolean
}

export function Link({
	children,
	className,
	exact = false,
	href,
	...props
}: Props) {
	const router = useRouter()
	const pathname = usePathname()
	const isActive = exact
		? pathname === href
		: pathname.startsWith(href.toString())

	return (
		<NextLink
			{...props}
			className={cn("hover:underline", isActive && "font-medium", className)}
			href={href}
		>
			{children}
		</NextLink>
	)
}
