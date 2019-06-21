const api_value = 'fc91acebf00c2840af37e04cecc67eb9';
export const GET_LATEST_MOVIES_SUCCESS = 'GET_LATEST_MOVIES_SUCCESS';
export const GET_TRENDING_MOVIES_SUCCESS = 'GET_LATEST_MOVIES_SUCCESS';
export const GET_MOST_WATCHED_MOVIES_SUCCESS = 'GET_LATEST_MOVIES_SUCCESS';
export const GET_MOVIE_DETAIL_SUCCESS = 'GET_MOVIE_DETAIL_SUCCESS';
export const GET_GENRE_SUCCESS = 'GET_GENRE_SUCCESS';

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

export function getMovieDetailsAsync(id) {
	const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_value}&language=en-US&append_to_response=credits`
	return dispatch => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_MOVIE_DETAIL_SUCCESS, payload: data.results }))
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
