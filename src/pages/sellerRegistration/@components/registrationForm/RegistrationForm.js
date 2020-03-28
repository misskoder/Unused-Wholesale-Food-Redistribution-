import React from 'react'
import { Form, Field } from 'react-final-form'
import {Grid, Label, Button, Input} from 'semantic-ui-react'

const RegistrationForm = ({onSubmit}) => {
    const {Column, Row} = Grid
    return (
		<Grid relaxed textAlign="center">
			<Form onSubmit={onSubmit}>
				{({ handleSubmit }) => {
					return (
						<form style={{ width: "100%" }} onSubmit={handleSubmit}>
							<Row style={{ marginBottom: 14 }} verticalAlign="middle" textAlign="center">
								<Column style={{ marginBottom: 14 }}>
									<Label ribbon color="teal">
										Name
									</Label>
								</Column>
								<Column>
									<Field name="name" component={Input} />
								</Column>
							</Row>
							<Row verticalAlign="middle" textAlign="center">
								<Column style={{ marginBottom: 14 }}>
									<Label ribbon color="red">
										Address
									</Label>
								</Column>
								<Column>
									<Field name="address" component={Input} />
								</Column>
							</Row>
							<Row verticalAlign="middle" textAlign="center">
								<Column style={{ marginBottom: 14 }}>
									<Label ribbon color="green">
										Phone
									</Label>
								</Column>
								<Column>
									<Field name="phone" component={Input} />
								</Column>
							</Row>
							<Row verticalAlign="middle" textAlign="center">
								<Column floated="right">
									<Button color="teal">Submit</Button>
								</Column>
							</Row>
						</form>
					);
				}}
			</Form>
		</Grid>
	);
}

export default RegistrationForm