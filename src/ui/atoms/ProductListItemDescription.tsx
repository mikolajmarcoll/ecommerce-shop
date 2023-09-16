import { getFormattedPrice } from "@/utils/formattedPrice";

export const ProductListItemDescription = ({
	name,
	price,
	category,
}: {
	name: string;
	price: number;
	category: string;
}) => {
	const formattedPrice = getFormattedPrice(price, "USD");

	return (
		<div className="flex w-full flex-col">
			<div className="flex items-center justify-between gap-2">
				<h3 className="text-lg font-medium text-gray-800">{name}</h3>
				<p className="text-sm font-bold text-gray-800">{formattedPrice}</p>
			</div>
			<p className="text-sm font-medium text-gray-500">{category}</p>
		</div>
	);
};
