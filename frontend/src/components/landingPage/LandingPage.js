import React from "react";
import { Grid, Card, Button, Container, Divider } from "semantic-ui-react";
import {CardType} from './@components'
import './landingPage.css'
const LandingPage = () => {
	return (
		<Container centered fluid>
			<Grid container centered verticalAlign="middle" textAlign="center" stackable fluid columns={3} divided>
				<Grid.Row>
					<Grid.Column>
						<CardType title="Wholesale Provider" />
					</Grid.Column>
					<Grid.Column>
						<CardType title="Consumer" />
					</Grid.Column>
					<Grid.Column>
						<CardType title="Delivery Agent" />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default LandingPage;
