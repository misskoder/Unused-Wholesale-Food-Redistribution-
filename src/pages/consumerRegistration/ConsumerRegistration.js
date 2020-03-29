import React from "react";
import { Form, Field } from "react-final-form";
import { Input, Label, Button } from "semantic-ui-react";

const ConsumerRegistration = () => {
	const onSubmit = values => {
		console.log(values);
	};
	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => {
				return (
                    <form onSubmit={handleSubmit}>
                        <Label>Name</Label>
						<Field
                            name="name"
                            component={Input}
                        />
                        <Button onClick={handleSubmit}>Submit</Button>
					</form>
				);
			}}
		</Form>
	);
};

export default ConsumerRegistration;
