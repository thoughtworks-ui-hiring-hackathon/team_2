import {combineReducers} from 'redux';
import latestMovies from './latestMovies';
import trendingMovies from './trendingMovies';
import mostWatched from './mostWatched';


export default combineReducers({
	latestMovies,
	trendingMovies,
	mostWatched
});