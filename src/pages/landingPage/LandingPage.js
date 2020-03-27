import React from "react";
import { Card, Button, Grid, Divider } from "semantic-ui-react";
import {CardType} from './@components'
import "./landingPage.css";

const LandingPage = () => {
	const { Column, Row } = Grid;
	return (
		<>
			<Grid className="container" stackable columns={3} divided verticalAlign="middle" textAlign="center">
				<Row>
					<Column>
						<CardType title="Wholesale Providers" />
					</Column>
					<Column>
						<CardType title="Consumers" />
					</Column>
					<Column>
						<CardType title="Delivery Agents" />
					</Column>
				</Row>
			</Grid>
		</>
	);
};

export default LandingPage;
