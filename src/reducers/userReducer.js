import { USER_LOGGED_IN, USER_FETCHED, USER_LOGGED_OUT } from '../actions/types';

export default function (state = { loaded: false }, action = {}) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return { ...action.user, loaded: true }
        case USER_FETCHED:
            return { ...state, ...action.user, loaded: true };
        case USER_LOGGED_OUT:
            return { loaded: true };
        default:
            return state;
    }
}