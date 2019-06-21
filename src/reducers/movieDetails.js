import { GET_MOVIE_DETAIL_SUCCESS } from '../actions';

const intialState = {
    details: null
}
export default (state = intialState, action) => {
    switch (action.type) {
        case GET_MOVIE_DETAIL_SUCCESS:
            return { details: action.payload };
        default:
            return state
    }
}