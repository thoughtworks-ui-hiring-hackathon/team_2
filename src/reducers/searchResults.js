import { GET_SEARCH_RESULT } from '../actions';

const intialState = {
    result: []
}
export default (state = intialState, action) => {
    switch (action.type) {
        case GET_SEARCH_RESULT:
            return { result: action.payload };
        default:
            return state
    }
}
