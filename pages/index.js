import path from "path";
import fs from "fs/promises";

function HomePage(props) {
	const { products } = props;
	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>{product.title}</li>
			))}
		</ul>
	);
}

export default HomePage;

export async function getStaticProps(context) {
	const filePath = path.join(process.cwd(), "Data", "dummy-backend.json");
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	return {
		props: {
			products: data.products,
		},
	};
}