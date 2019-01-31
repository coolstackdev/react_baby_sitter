import * as types from './ActionTypes';

export function loginRequest(user) {
    return {
        type: types.LOGIN_REQUEST,
        user
    };
}

export function userLoggedIn(user) {
    return {
        type: types.USER_LOGGED_IN,
        user
    }
}

export function userLoggedOut() {
    return {
        type: types.USER_LOGGED_OUT
    }
}
