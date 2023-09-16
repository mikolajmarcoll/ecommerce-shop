import { type ReactNode } from "react";

export const generateStaticParams = async () => {
	return [{ category: "T-shirts" }, { category: "Boots" }];
};

export default function CategoryProductLayout({ children }: { children: ReactNode }) {
	return children;
}
