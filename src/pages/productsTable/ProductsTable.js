import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Table, Menu, Icon, Header, Button } from "semantic-ui-react";
import { ContactSellerModal } from "./@components";
import api from "../../api/api";

const ProductsTable = () => {
	const [products, setProducts] = useState([]);
	const [sellerId, setSellerId] = useState(null);
	const [seller, setSeller] = useState(null);
	const history = useHistory();

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

	useEffect(() => {
		const fetchSeller = async () => {
			try {
				// There currently isn't a route in the server to return a single seller by its id, so for now I'm getting all sellers and filtering
				let sellerData = await api.sellers.getById(sellerId);
				sellerData = sellerData.data.results.filter(seller => seller.id === sellerId);
				setSeller(sellerData[0]);
			} catch (error) {
				//handle this error
				console.log(error);
			}
		};
		fetchSeller();
	}, [sellerId]);

	const handleRow = product => {
		setSellerId(product.seller);
	};
	return (
		<>
			<Header as="h1" textAlign="center">
				Available Products
			</Header>
			<Button onClick={() => history.push("/products/create")} circular icon="plus" color="teal" />

			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Price</Table.HeaderCell>
						<Table.HeaderCell>Contact</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{products.map(product => {
						return (
							<Table.Row onClick={handleRow.bind(this, product)} key={product.id}>
								<Table.Cell>{product.name}</Table.Cell>
								<Table.Cell>{product.price}</Table.Cell>
								<Table.Cell onClick={evt => console.log(evt.target)}>
									<ContactSellerModal product={product} seller={seller ? seller : {}} trigger={<Button color="teal">Contact</Button>} />
								</Table.Cell>
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
