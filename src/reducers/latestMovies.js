import { GET_LATEST_MOVIES_SUCCESS } from '../actions';

const intialState = {
    latestMovies: []
}
export default (state = intialState, action) => {
    switch (action.type) {
        case GET_LATEST_MOVIES_SUCCESS:
            return { latestMovies: action.payload };
        default:
            return state
    }
}