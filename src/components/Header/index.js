import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Header = (props) => {
	const { isLoginSignup } = props;
	const textCenter = isLoginSignup ? 'center' : 'space-between';
	const display = isLoginSignup ? 'none' : 'flex';
	return (
		<div className="header">
			<div className="header__content" style={{ justifyContent: textCenter }}>
				<div className="header__content--title">
					<Link to="/">
						<h1 className="heading-primary">Tokoflix</h1>
					</Link>
				</div>
				<div className="header__content--login" style={{ display: display }}>
					<Link to="/login">
						<span className="header__content--text heading-tertiary">Login</span>
						<FontAwesomeIcon icon="sign-in-alt" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
