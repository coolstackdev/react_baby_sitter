import * as types from '../actions/ActionTypes';

const initialState = {
    login_request: false,
    user_logged_in: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return { ...state, login_request: true }
        case types.USER_LOGGED_IN:
            return { ...state, user_logged_in: true }
        case types.USER_LOGGED_OUT:
            return { ...state, user_logged_in: false };
        default:
            return state;
    }
}
