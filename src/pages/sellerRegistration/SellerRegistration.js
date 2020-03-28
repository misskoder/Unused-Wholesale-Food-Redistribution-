import React from "react";
import { Grid, Container, Icon, Card } from "semantic-ui-react";
import { RegistrationForm } from "./@components";

const SellerRegistration = () => {
	const { Row, Column } = Grid;
	const onSubmit = values => {
		console.log(values);
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
