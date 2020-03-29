import React from "react";
import { Grid, Header, Card, Label, Input, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useLocalStorage } from "../../hooks";
import api from "../../api/api";

const ProductsCreation = () => {
	const [seller] = useLocalStorage("seller");
	const { Column, Row } = Grid;
	const { id } = seller;
	const history = useHistory();
	const onSubmit = values => {
		const { name, price } = values;
		const seller = id; //Get from state
		api.products
			.insert({
				seller,
				name,
				price
			})
			.then(response => {
                console.log(response);
                history.push('/products')
			});
	};
	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => {
				return (
					<form onSubmit={handleSubmit}>
						<Card fluid>
							<Header as="h1" textAlign="center">
								Create A Product
							</Header>
							<Grid divided style={{ margin: 14 }} columns={2} centered stackable>
								<Row>
									<Column textAlign="center">
										<Label ribbon color="red">
											Name
										</Label>
										<Field name="name" component={Input} />
									</Column>
									<Column textAlign="center">
										<Label ribbon color="green">
											Price
										</Label>
										<Field name="price" component={Input} />
									</Column>
								</Row>
								<Row>
									<Column textAlign="center">
										<Button onClick={handleSubmit} color="teal">
											Create Product
										</Button>
									</Column>
								</Row>
							</Grid>
						</Card>
					</form>
				);
			}}
		</Form>
	);
};

export default ProductsCreation;
