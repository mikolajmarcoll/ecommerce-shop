import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductListItemType } from "@/ui/types";

export const ProductListItem = ({
	productItem: { name, price, category, coverImage },
}: {
	productItem: ProductListItemType;
}) => {
	return (
		<article className="flex flex-col items-center space-y-4">
			<ProductListItemCoverImage {...coverImage} />
			<ProductListItemDescription name={name} price={price} category={category} />
		</article>
	);
};
