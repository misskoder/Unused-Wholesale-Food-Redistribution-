import React from "react";
import { Form, Field } from "react-final-form";
import { Input, Label, Button, Card, Grid, Header } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const ConsumerRegistration = () => {
	const history = useHistory();
	const onSubmit = values => {
		return values.name && history.push("/products");
	};

	const { Column, Row } = Grid;

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => {
				return (
					<form onSubmit={handleSubmit}>
						<Card style={{ height: "350px" }} centered fluid>
							<Header style={{ margin: 14 }} textAlign="center" as="h1">
								Buyer Registration
							</Header>
							<Grid style={{ margin: 14 }} relaxed textAlign="center">
								<Row>
									<Column>
										<Label ribbon color="teal">
											Name
										</Label>
										<Field name="name" component={Input} />
									</Column>
								</Row>
								<Row>
									<Column>
										<Button color="teal" onClick={handleSubmit}>
											Submit
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

export default ConsumerRegistration;
