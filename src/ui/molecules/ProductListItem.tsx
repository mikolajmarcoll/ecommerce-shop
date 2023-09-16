import Link from "next/link";

import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductItemType } from "@/ui/types";

export const ProductListItem = ({
	productItem: { id, name, price, category, coverImage },
}: {
	productItem: ProductItemType;
}) => {
	return (
		<li>
			<Link href={`/product/${id}`}>
				<article className="flex flex-col items-center space-y-4">
					<ProductListItemCoverImage {...coverImage} />
					<ProductListItemDescription name={name} price={price} category={category} />
				</article>
			</Link>
		</li>
	);
};
