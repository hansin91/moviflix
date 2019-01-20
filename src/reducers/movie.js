import C from '../constants';

const initialState = {
	movies: [],
	carousel: [],
	numberOfCarousel: 3,
	lengthOfOverview: 100,
	lengthOfTitle: 25,
	currentPage: 0
};

const movie = (state = initialState, action) => {
	switch (action.type) {
		case C.FETCH_MOVIES:
			return {
				...state,
				movies: [ ...state.movies, ...action.payload.results ],
				currentPage: action.payload.page
			};
		default:
			return state;
	}
};

export default movie;
