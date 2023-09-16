import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";

// export const generateStaticParams = async () => {
// 	const products = await getProductsList();
// 	return products.map((product) => ({
// 		productId: product.id,
// 	}));
// };

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	const metadata = {
		title: product.name,
		description: product.description,
		images: { url: product.coverImage.src },
	};
	return {
		title: metadata.title,
		description: metadata.description,
		openGraph: metadata,
	};
};

export default async function ProductDetailsPage({ params }: { params: { productId: string } }) {
	const { name, category, price, coverImage } = await getProductById(params.productId);

	return (
		<>
			<article className="max-w-xs">
				<h1>{name}</h1>
				<ProductListItemCoverImage {...coverImage} />
				<ProductListItemDescription name={name} category={category} price={price} />
			</article>
			<aside>
				<Suspense>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
