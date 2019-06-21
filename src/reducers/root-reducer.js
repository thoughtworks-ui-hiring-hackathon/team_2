import {combineReducers} from 'redux';
import latestMovies from './latestMovies';
import trendingMovies from './trendingMovies';
import mostWatched from './mostWatched';
import genre from './genre';
import movies from './movies';
import movieDetails from './movieDetails';

import searchResult from './searchResults';
import queryUpdate from './queryUpdate';

export default combineReducers({
	latestMovies,
	trendingMovies,
	mostWatched,
	genre,
	movies,
	movieDetails,
	queryUpdate,
	searchResult
});
