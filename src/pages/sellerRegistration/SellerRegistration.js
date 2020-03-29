import React from "react";
import { Grid, Container, Icon, Card } from "semantic-ui-react";
import { RegistrationForm } from "./@components";
import api from "../../api/api";

const SellerRegistration = () => {
	const { Row, Column } = Grid;
	const onSubmit = values => {
		const { name, address, phone } = values
		api.sellers.insert({
			name,
			address,
			phone
		}).then(response => {
			console.log(response)

			api.sellers.get().then(response => {
				console.log(response)
			});
		});
	};
	return (
		<Container>
			<Card centered fluid>
				<Grid textAlign="center" divided stackable relaxed container>
					<Row textAlign="center">
						<Column>
							<h1>Seller Registration</h1>
						</Column>
					</Row>
					<Row>
						<Column verticalAlign="middle" width={8}>
							<Icon circular color="green" size="massive" name="dollar sign" />
						</Column>
						<Column verticalAlign="middle" width={8}>
							<RegistrationForm onSubmit={onSubmit} />
						</Column>
					</Row>
				</Grid>
			</Card>
		</Container>
	);
};

export default SellerRegistration;
