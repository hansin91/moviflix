import React from 'react';

const FormContainer = (props) => {
	const { title, children } = props;
	return (
		<React.Fragment>
			<h1 className="heading-primary no-margin-top">{title ? title : ''}</h1>
			{children}
		</React.Fragment>
	);
};

export default FormContainer;
