import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage, SellerRegistration, ConsumerRegistration, DeliveryAgentRegistration } from "./pages";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route  path='/register/seller'>
						<SellerRegistration />
					</Route>
					<Route  path='/register/consumers'>
						<ConsumerRegistration />
					</Route>
					<Route  path='/register/delivery'>
						<DeliveryAgentRegistration />
					</Route>
					<Route exact path='/'>
						<LandingPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
