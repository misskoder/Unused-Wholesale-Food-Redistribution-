import React from "react";
import { Header, Icon, Modal, Grid } from "semantic-ui-react";

const ContactSellerModal = ({ trigger, seller, product }) => {
	if (seller) {
		console.log(seller);
		console.log(product);
	}
	const { Column, Row } = Grid;
	return (
		<>
			{seller !== null ? (
				<Modal trigger={trigger}>
					<Modal.Header>SELLER NAME: {seller.name}</Modal.Header>
					<Modal.Content image>
						<Icon name="user" fitted color="teal" circular size="massive" />
						<Grid centered>
							<Row>
								<Column textAlign="center">
									<Modal.Description>
										<Header color="teal" as="h1">
											{product.name}: ${product.price}
										</Header>
									</Modal.Description>
								</Column>
							</Row>
							<Row>
								<Column textAlign='center'>
									<Modal.Description>
										<Header color="black" as="h1">
											Address: {seller.address}
										</Header>
										<Header color="black" as="h2">
											Phone: {seller.phone}
										</Header>
									</Modal.Description>
								</Column>
							</Row>
						</Grid>
					</Modal.Content>
				</Modal>
			) : null}
		</>
	);
};

export default ContactSellerModal;
