import {
    EMPLOYEE_FETCH_SUCEESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCEESS:
        return action.payload;
        default:
        return state;
    }
};
