import React from "react";
import { Form, Field } from "react-final-form";
import { Input, Label } from "semantic-ui-react";

const ConsumerRegistration = () => {
	const onSubmit = values => {
		console.log(values);
	};
	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => {
				return (
					<form onSubmit={handleSubmit}>
						<Field
							name="name"
							render={() => {
								return (
									<>
										<Label>Name</Label>
										<Input />
									</>
								);
							}}
						/>
					</form>
				);
			}}
		</Form>
	);
};

export default ConsumerRegistration;
