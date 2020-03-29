import React from "react";
import { Grid, Header } from "semantic-ui-react";
import { CardType } from "./@components";
import "./landingPage.css";

const LandingPage = () => {
	const { Column, Row } = Grid;
	return (
		<Grid relaxed stackable columns={3} divided verticalAlign="middle" textAlign="center">
			<Row>
				<Column>
					<Header as='h1'>Who Are You?</Header>
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
		</Grid>
	);
};

export default LandingPage;
