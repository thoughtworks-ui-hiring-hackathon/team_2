import { UPDATE_QUERY } from '../actions';

const intialState = {
    movies: []
}
export default (state = intialState, action) => {
    switch (action.type) {
        case UPDATE_QUERY:
            //console.log(action.payload);
            return { query: action.payload };
        default:
            return state
    }
}
