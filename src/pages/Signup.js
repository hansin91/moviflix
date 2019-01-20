import React, { Component } from 'react';
import Header from '../components/Header';
import sceneBoard from '../assets/images/scene-board.jpeg';
import FormContainer from '../components/FormContainer';

class Signup extends Component {
	render() {
		return (
			<React.Fragment>
				<Header isLoginSignup={true} />
				<div className="form__container">
					<img src={sceneBoard} alt="Signup" className="img-medium" />
					<div className="form__container--signup">
						<FormContainer title="Signup" />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Signup;
