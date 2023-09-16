import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductItemType } from "@/ui/types";
// TODO: improve styling
export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<ul data-testid="products-list" className="flex gap-6">
			{products.map((product) => {
				return <ProductListItem key={product.id} productItem={product} />;
			})}
		</ul>
	);
};
