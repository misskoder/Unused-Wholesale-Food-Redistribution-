import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage, SellerRegistration, ConsumerRegistration, DeliveryAgentRegistration, ProductsCreation, ProductsTable } from "./pages";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Container>
				<Router>
					<Switch>
						<Route path="/register/seller">
							<SellerRegistration />
						</Route>
						<Route path="/register/consumers">
							<ConsumerRegistration />
						</Route>
						<Route path="/register/delivery">
							<DeliveryAgentRegistration />
						</Route>
						<Route path="/products/create">
							<ProductsCreation />
						</Route>
						<Route path="/products">
							<ProductsTable />
						</Route>
						<Route exact path="/">
							<LandingPage />
						</Route>
					</Switch>
				</Router>
			</Container>
		</div>
	);
}

export default App;
