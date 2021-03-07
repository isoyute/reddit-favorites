import { combineReducers } from 'redux';
import resultsReducer from './reducers/resultsReducer';
import favoritesReducer from './reducers/favoritesReducer';

const reducer = combineReducers({
	results: resultsReducer,
	favorites: favoritesReducer,
});

export default reducer;
