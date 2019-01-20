const validate = (formValues) => {
	const errors = {};

	if (!formValues.username) {
		errors.username = 'You must enter the username';
	}

	if (!formValues.password) {
		errors.password = 'You must enter the password';
	}

	return errors;
};

export default validate;
