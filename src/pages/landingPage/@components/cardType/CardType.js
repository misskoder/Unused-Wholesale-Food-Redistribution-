import React from 'react'
import { Card, Divider, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const CardType = ({title, color, navigationRoute}) => {
    return (
		<Card color={color} centered>
			<Card.Content>
				<Card.Header>{title}</Card.Header>
				<Divider />
				<Button color='teal'>
					<Link style={{ color: "white" }} to={`/register/${navigationRoute}`}>
						Register
					</Link>
				</Button>
				<Button floated="right">Login</Button>
			</Card.Content>
		</Card>
	);
}

export default CardType