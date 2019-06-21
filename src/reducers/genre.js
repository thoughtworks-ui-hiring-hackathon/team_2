import { GET_GENRE_SUCCESS } from '../actions';

const intialState = {
    genre: {}
}
export default (state = intialState, action) => {
    switch (action.type) {
        case GET_GENRE_SUCCESS:
            const data = {};
            action.payload.map((genre) => {
                data[genre.id] = genre.name;
            })
            return { genre: data };
        default:
            return state
    }
}
