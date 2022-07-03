import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import path from "path";
import fs from "fs/promises";

const ProductDetailPage = (props) => {
	const { loadedProduct } = props;

	if (!loadedProduct) {
		return <PropagateLoader color="#00FF" />;
	}

	return (
		<React.Fragment>
			<h1>{loadedProduct.title}</h1>
			<p>{loadedProduct.description}</p>
		</React.Fragment>
	);
};

export default ProductDetailPage;


export async function getStaticProps(context) {
	const { params } = context;
	const productId = params.pid;
    const filePath = path.join(process.cwd(), "Data", "dummy-backend.json");
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	const product = data.products.find((product) => product.id === productId);
	return {
		props: {
			loadedProduct: product,
		},
	};
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { pid: "p1" } },
			// { params: { pid: "p2" } },
			// { params: { pid: "p3" } },
		],
		fallback: true,
	};
}
