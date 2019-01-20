import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../Loader';

class MovieCarousel extends Component {
	render() {
		const { movies, carousel } = this.props;
		return (
			<React.Fragment>
				{movies && movies.length === 0 ? (
					<Loader />
				) : (
					<Carousel>
						{carousel && carousel.length > 0 ? (
							carousel.map((c, i) => {
								return (
									<Carousel.Item tag="div" key={i}>
										<img
											alt={c.title}
											src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}` + c.backdrop_path}
										/>
										<Carousel.Caption>
											<div className="carousel-caption__content">
												<h3>{c.title}</h3>
												<p>{c.overview}</p>
											</div>
										</Carousel.Caption>
									</Carousel.Item>
								);
							})
						) : (
							''
						)}
					</Carousel>
				)}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	const { movie: { movies, numberOfCarousel } } = state;
	return {
		movies: movies,
		numberOfCarousel: numberOfCarousel,
		carousel: movies.slice(0, numberOfCarousel)
	};
};

MovieCarousel.propTypes = {
	movies: PropTypes.array.isRequired,
	numberOfCarousel: PropTypes.number.isRequired,
	carousel: PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(MovieCarousel);
