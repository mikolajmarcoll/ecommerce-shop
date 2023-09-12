import { type ReactNode } from "react";

export default function StaticPagesLayout({ children }: { children: ReactNode }) {
	return <div className="mx-auto max-w-md text-center">{children}</div>;
}
