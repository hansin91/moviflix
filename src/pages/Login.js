import React, { Component } from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import FormContainer from '../components/FormContainer';
import movieImage from '../assets/images/movie.jpeg';

class Login extends Component {
	render() {
		return (
			<React.Fragment>
				<Header isLoginSignup={true} />
				<div className="form__container">
					<img src={movieImage} alt="movie" className="img-medium" />
					<div className="form__container--login">
						<FormContainer title="Login">
							<LoginForm />
						</FormContainer>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Login;
