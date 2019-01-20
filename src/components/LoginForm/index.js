import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import validate from '../../helpers/validator';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
	handleInput = (e) => {
		console.log(e.target.value);
	};

	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<Alert bsStyle="danger">
					<p>{error}</p>{' '}
				</Alert>
			);
		}
	}

	renderInput = ({ input, label, meta, type }) => {
		return (
			<FormGroup>
				<ControlLabel>{label}</ControlLabel>
				<FormControl {...input} type={type} autoComplete="off" placeholder={label} />
				{this.renderError(meta)}
			</FormGroup>
		);
	};

	render() {
		const { handleSubmit, valid } = this.props;
		const onSubmit = (formValues) => {
			console.log(formValues);
		};

		return (
			<React.Fragment>
				<form className="u-margin-top-small" onSubmit={handleSubmit(onSubmit)}>
					<Field type="text" name="username" label="Username" component={this.renderInput} />
					<Field type="password" name="password" label="Password" component={this.renderInput} />
					<Button type="submit" disabled={valid ? false : true} bsStyle="primary">
						Save
					</Button>
				</form>
				<p className="no-account u-margin-top-small">
					Don't have an account ? Please click{' '}
					<Link to="/signup" className="link">
						here
					</Link>{' '}
					to sign up
				</p>
			</React.Fragment>
		);
	}
}

export default reduxForm({
	form: 'login',
	validate
})(connect(null, null)(LoginForm));
