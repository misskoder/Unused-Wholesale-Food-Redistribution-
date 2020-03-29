import React from "react";
import { Grid, Header, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { CardType } from "./@components";
import "./landingPage.css";

const LandingPage = () => {
	const { Column, Row } = Grid;
	const history = useHistory();
	return (
		<Grid relaxed stackable columns={3} divided verticalAlign="middle" textAlign="center">
			<Row>
				<Column>
					<Header as="h1">Who Are You?</Header>
				</Column>
			</Row>
			<Row>
				<Column>
					<CardType color="red" title="Seller" navigationRoute="seller" />
				</Column>
				<Column>
					<CardType color="green" title="Buyer" navigationRoute="consumers" />
				</Column>
				<Column>
					<CardType color="blue" title="Delivery Agent" navigationRoute="delivery" />
				</Column>
			</Row>
			<Button onClick={() => history.push("/products")} color="google plus">
				SEE ALL PRODUCTS
			</Button>
		</Grid>
	);
};

export default LandingPage;
