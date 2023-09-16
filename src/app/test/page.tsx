"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

import { ProductCounter } from "@/ui/atoms/ProductCounter";
// TODO: to remove
export default function Page() {
	const router = useRouter();
	const params = useParams();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	console.log({ router, params, searchParams, pathname });
	return (
		<>
			<ProductCounter />
			<Link href="/products" className="hover:underline">
				Products
			</Link>
		</>
	);
}
