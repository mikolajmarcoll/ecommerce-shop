"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import clsx from "clsx";

type ActiveLinkProps = {
	href: string;
	children: ReactNode;
	exact?: boolean;
};

export const ActiveLink = ({ href, children, exact = false }: ActiveLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	// TODO: add typeRoutes to href
	return (
		<Link
			href={href}
			className={clsx(`text-blue-400 hover:text-blue-600`, {
				"border-b-2": isActive,
				"border-sky-400": isActive,
			})}
			exact={exact}
		>
			{children}
		</Link>
	);
};
