import { GET_MOST_WATCHED_MOVIES_SUCCESS } from '../actions';

const intialState = {
    movies: []
}
export default (state = intialState, action) => {
    switch (action.type) {
        case GET_MOST_WATCHED_MOVIES_SUCCESS:
            return { movies: action.payload };
        default:
            return state
    }
}