import React, { useState, useEffect } from "react";
import { Table, Menu, Icon, Header } from "semantic-ui-react";
import api from "../../api/api";

const ProductsTable = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const data = await api.products.get();
				setProducts(data.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProducts();
	}, []);

	console.log(products);

	return (
        <>
            <Header as='h1' textAlign='center'>Available Products</Header>
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Price</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{products.map(product => {
						return (
							<Table.Row key={product.id}>
								<Table.Cell>{product.name}</Table.Cell>
								<Table.Cell>{product.price}</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>

				<Table.Footer>
					<Table.Row>
						<Table.HeaderCell colSpan="3">
							<Menu floated="right" pagination>
								<Menu.Item as="a" icon>
									<Icon name="chevron left" />
								</Menu.Item>
								<Menu.Item as="a">1</Menu.Item>
								<Menu.Item as="a">2</Menu.Item>
								<Menu.Item as="a">3</Menu.Item>
								<Menu.Item as="a">4</Menu.Item>
								<Menu.Item as="a" icon>
									<Icon name="chevron right" />
								</Menu.Item>
							</Menu>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Footer>
			</Table>
		</>
	);
};

export default ProductsTable;
