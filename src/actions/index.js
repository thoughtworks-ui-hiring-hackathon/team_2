const api_value = 'fc91acebf00c2840af37e04cecc67eb9';
export const GET_LATEST_MOVIES_SUCCESS = 'GET_LATEST_MOVIES_SUCCESS';
export const GET_TRENDING_MOVIES_SUCCESS = 'GET_LATEST_MOVIES_SUCCESS';
export const GET_MOST_WATCHED_MOVIES_SUCCESS = 'GET_LATEST_MOVIES_SUCCESS';

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
	const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_value}&language=en-US&page=1`
	return dispatch => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_TRENDING_MOVIES_SUCCESS, payload: data.results }))
			.catch((e) => console.log("Error: " + e));
	};
}

export function getMostWatchedMoviesAsync() {
	const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_value}&language=en-US&page=1`
	return dispatch => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_MOST_WATCHED_MOVIES_SUCCESS, payload: data.results }))
			.catch((e) => console.log("Error: " + e));
	};
}
