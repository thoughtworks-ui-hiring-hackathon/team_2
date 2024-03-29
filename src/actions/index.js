const api_value = 'fc91acebf00c2840af37e04cecc67eb9';
export const GET_LATEST_MOVIES_SUCCESS = 'GET_LATEST_MOVIES_SUCCESS';
export const GET_TRENDING_MOVIES_SUCCESS = 'GET_LATEST_MOVIES_SUCCESS';
export const GET_MOST_WATCHED_MOVIES_SUCCESS = 'GET_LATEST_MOVIES_SUCCESS';
export const GET_MOVIE_DETAIL_SUCCESS = 'GET_MOVIE_DETAIL_SUCCESS';
export const GET_GENRE_SUCCESS = 'GET_GENRE_SUCCESS';
export const GET_SIMILAR_MOVIES_SUCCESS = 'GET_SIMILAR_MOVIES_SUCCESS';
export const UPDATE_QUERY = 'UPDATE_QUERY';
export const GET_SEARCH_RESULT = 'GET_SEARCH_RESULT';

export function getLatestMoviesAsync() {
	const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_value}&language=en-US&page=1`
	return dispatch => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_LATEST_MOVIES_SUCCESS, payload: data.results }))
			.catch((e) => console.log("Error: " + e));
	};
}

export function getTrendingMoviesAsync() {
	const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_value}`
	return dispatch => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_TRENDING_MOVIES_SUCCESS, payload: data.results }))
			.catch((e) => console.log("Error: " + e));
	};
}

export function getMostWatchedMoviesAsync() {
	const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_value}&language=en-US&page=1`
	return dispatch => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_MOST_WATCHED_MOVIES_SUCCESS, payload: data.results }))
			.catch((e) => console.log("Error: " + e));
	};
}

export function getSimilarMoviesAsync(id) {
	const url = `  https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_value}&language=en-US&page=1`
	return dispatch => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_SIMILAR_MOVIES_SUCCESS, payload: data.results }))
			.catch((e) => console.log("Error: " + e));
	};
}

export function getMovieDetailsAsync(id) {
	const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_value}&language=en-US&append_to_response=credits`
	return dispatch => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_MOVIE_DETAIL_SUCCESS, payload: data }))
			.catch((e) => console.log("Error: " + e));
	};
}

export function getGenreAsync() {
	const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_value}&language=en-US
	`
	return dispatch => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_GENRE_SUCCESS, payload: data.genres }))
			.catch((e) => console.log("Error: " + e));
	};
}

export function queryUpdate(query){
	return {
		type: UPDATE_QUERY,
		payload: query
	}
}

export function getSearchAsync(search_query = 'marvel') {
	const url = `https://api.themoviedb.org/3/search/multi?api_key=${api_value}&language=en-US&query=${search_query}&page=1&include_adult=false`
	return dispatch => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {dispatch({ type: GET_SEARCH_RESULT, payload: data.results })})
			.catch((e) => console.log("Error: " + e));
	};
}
