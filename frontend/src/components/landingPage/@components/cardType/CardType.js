import React from "react";
import { Card, Divider, Button } from "semantic-ui-react";

const CardType = ({ title }) => {
	return (
		<Card centered>
			<Card.Content>
				<Card.Header textAlign="center">{title}</Card.Header>
				<Divider />
				<Button floated="left" color="teal">
					Register
				</Button>
				<Button floated="right">Login</Button>
			</Card.Content>
		</Card>
	);
};

export default CardType;
