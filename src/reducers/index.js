import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import movie from './movie';

export default combineReducers({
	movie,
	form: formReducer,
	routing: routerReducer
});
