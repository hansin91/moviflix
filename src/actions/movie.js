import { API_KEY, API_URL } from '../config';
import axios from 'axios';
import C from '../constants';
import dateHelper from '../helpers/date';

export const fetchMovies = (page) => (dispatch) => {
	let dates = dateHelper.getDates();
	const endPoint = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.gte=${dates[1]}&primary_release_date.lte=${dates[0]}`;

	axios.get(endPoint).then((res) => {
		dispatch({
			type: C.FETCH_MOVIES,
			payload: res.data
		});
	});
};
