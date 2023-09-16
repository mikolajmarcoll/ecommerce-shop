"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import clsx from "clsx";

export const ActiveLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	// TODO: add typeRoutes to href
	return (
		<Link
			href={href}
			className={clsx(`text-blue-400 hover:text-blue-600`, { underline: isActive })}
		>
			{children}
		</Link>
	);
};
