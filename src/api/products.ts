import { type ProductItemType } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

type Rating = {
	rate: number;
	count: number;
};

const apiUrl = "https://naszsklep-api.vercel.app/api/products";

const productResponseItemToProductItemType = ({
	id,
	title,
	category,
	price,
	image,
	description,
}: ProductResponseItem): ProductItemType => {
	return {
		id,
		name: title,
		category,
		price,
		coverImage: {
			src: image,
			alt: title,
		},
		description,
	};
};

export const getProductsList = async () => {
	const res = await fetch(apiUrl);
	const productResponse = (await res.json()) as ProductResponseItem[];

	const products = productResponse.map(productResponseItemToProductItemType);

	return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(`${apiUrl}/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem;

	return productResponseItemToProductItemType(productResponse);
};
