import {combineReducers} from 'redux';
import latestMovies from './latestMovies';
import trendingMovies from './trendingMovies';
import mostWatched from './mostWatched';
import genre from './genre';


export default combineReducers({
	latestMovies,
	trendingMovies,
	mostWatched,
	genre
});