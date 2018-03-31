import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

const reducer = (state = {} , action) => {
    switch(action.type) {
        case FETCH_POSTS:
            console.log(action.payload);
            return _.mapKeys(action.payload.data, 'id');
        default:
        return state;
    }
};

export default reducer;