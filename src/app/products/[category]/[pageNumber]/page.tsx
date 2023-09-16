export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	if (params.category === "T-shirts") return [{ pageNumber: "1" }, { pageNumber: "2" }];
	else return [{ pageNumber: "1" }];
};

export default function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	return <h1>{`Products category: ${params.category}, products page: ${params.pageNumber}`}</h1>;
}
