import { GET_GENRE_SUCCESS } from '../actions';

const intialState = {
    genre: []
}
export default (state = intialState, action) => {
    switch (action.type) {
        case GET_GENRE_SUCCESS:
            console.log(action.payload);
            return { genre: action.payload };
        default:
            return state
    }
}