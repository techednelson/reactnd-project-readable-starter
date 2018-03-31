import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

const reducer = (state = {} , action) => {
    switch(action.type) {
        case FETCH_POSTS:
        console.log(action.payload);
            return action.payload || null;
            // break;
        default:
        return state;
    }
};

export default reducer;