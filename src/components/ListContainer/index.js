import React from 'react';

const ListContainer = (props) => {
	const { title, children } = props;

	return (
		<div className="list__container">
			<div className="list__container--heading">{title ? title : ''}</div>
			<div className="list__container--content">{children}</div>
		</div>
	);
};

export default ListContainer;
