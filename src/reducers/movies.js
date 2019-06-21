import { GET_SIMILAR_MOVIES_SUCCESS } from '../actions';

const intialState = {
    similarMovies: []
}
export default (state = intialState, action) => {
    switch (action.type) {
        case GET_SIMILAR_MOVIES_SUCCESS:
            return { similarMovies: action.payload };
        default:
            return state;
    }
}