import React from "react";
import { Grid } from "semantic-ui-react";
import { CardType } from "./@components";
import "./landingPage.css";

const LandingPage = () => {
	const { Column, Row } = Grid;
	return (
		<Grid className="landing_page_container" stackable columns={3} divided verticalAlign="middle" textAlign="center">
			<Row>
				<Column>
					<CardType color="red" title="Sellers" navigationRoute="seller" />
				</Column>
				<Column>
					<CardType color="green" title="Buyers" navigationRoute="consumers" />
				</Column>
				<Column>
					<CardType color="blue" title="Delivery Agents" navigationRoute="delivery" />
				</Column>
			</Row>
		</Grid>
	);
};

export default LandingPage;
