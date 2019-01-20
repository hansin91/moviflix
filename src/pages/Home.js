import React, { Component } from 'react';
import Header from '../components/Header';
import MovieCarousel from '../components/Carousel';
import MovieInfo from '../components/MovieInfo';

import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movie';
import PropTypes from 'prop-types';
import ListContainer from '../components/ListContainer';

class Home extends Component {
	componentDidMount() {
		this.props.fetchMovies(1);
	}

	render() {
		const { movies, currentPage } = this.props;

		window.onscroll = () => {
			if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
				this.props.fetchMovies(currentPage + 1);
			}
		};

		return (
			<React.Fragment>
				<Header />
				<MovieCarousel />
				<ListContainer>
					{movies && movies.length > 0 ? (
						movies.map((movie, i) => {
							return <MovieInfo movie={movie} key={i} />;
						})
					) : (
						''
					)}
				</ListContainer>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	const { movie: { movies, currentPage } } = state;
	return {
		movies: movies,
		currentPage: currentPage
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchMovies: (page) => {
		dispatch(fetchMovies(page));
	}
});

Home.propTypes = {
	fetchMovies: PropTypes.func.isRequired,
	movies: PropTypes.array.isRequired,
	currentPage: PropTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
