import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import noImage from '../../assets/images/no_image.jpg';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../Loader';

class MovieInfo extends Component {
	constructor() {
		super();
		this.state = {
			imageLoad: false
		};
	}

	render() {
		const {
			lengthOfOverview,
			lengthOfTitle,
			movie,
			movie: { poster_path, title, overview, vote_average }
		} = this.props;
		const imageSize = '100%';

		const handleImageLoaded = () => {
			this.setState({
				imageLoad: true
			});
		};

		return (
			<React.Fragment>
				{movie ? (
					<div className="movie-info__container">
						{this.state.imageLoad ? (
							<img
								alt={title}
								width={imageSize}
								height={imageSize}
								onLoad={handleImageLoaded}
								src={poster_path !== null ? `${IMAGE_BASE_URL}${POSTER_SIZE}` + poster_path : noImage}
							/>
						) : (
							<img
								alt={title}
								width={imageSize}
								height={imageSize}
								onLoad={handleImageLoaded}
								src={noImage}
							/>
						)}

						<div className="movie-info--title">
							<h4>{title}</h4>
						</div>
						<div className="movie-info__rating">
							<FontAwesomeIcon icon="star" size="3x" style={{ color: '#ffdd75' }} />
							<span className="rating">{vote_average}</span>
							<Button bsStyle="success">Primary</Button>
						</div>
					</div>
				) : (
					<Loader />
				)}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	const { movie: { lengthOfOverview, lengthOfTitle } } = state;
	return {
		lengthOfOverview: lengthOfOverview,
		lengthOfTitle: lengthOfTitle
	};
};

MovieInfo.propTypes = {
	movie: PropTypes.object.isRequired,
	lengthOfOverview: PropTypes.number.isRequired
};

export default connect(mapStateToProps, null)(MovieInfo);
