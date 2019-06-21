import { GET_MOVIE_DETAIL_SUCCESS } from '../actions';

const intialState = {
    movies: []
}
export default (state = intialState, action) => {
    switch (action.type) {
        case GET_MOVIE_DETAIL_SUCCESS:
            return { movies: action.payload };
        default:
            return state
    }
}