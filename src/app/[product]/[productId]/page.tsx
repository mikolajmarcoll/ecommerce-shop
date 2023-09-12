export default function ProductDetailsPage({
	params,
	searchParams,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const referral = searchParams.referral;
	return (
		<div>
			<h1>Product details</h1>
			<p>{params.productId}</p>
			<p>{referral}</p>
		</div>
	);
}
