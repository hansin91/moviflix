import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignInAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import Home from './pages/Home';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Login from './pages/Login';
import Signup from './pages/Signup';

library.add(faSignInAlt, faStar);
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<React.Fragment>
					<Router>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/login" component={Login} />
							<Route path="/signup" component={Signup} />
						</Switch>
					</Router>
				</React.Fragment>
			</Provider>
		);
	}
}

export default App;
