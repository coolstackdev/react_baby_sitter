import * as types from '../actions/ActionTypes';


const initialState = {
    login_request: false,
    user_logged_in: false,
    is_payment_success: false,
    is_code_match: false,
    redirectUrl: '/'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return { ...state, login_request: true }
        case types.USER_LOGGED_IN:
            return { ...state, user_logged_in: true, redirectUrl: '/dashboard' }
        case types.USER_LOGGED_OUT:
            return { ...state, user_logged_in: false, redirectUrl: '/' };
        case types.PAYMENT_SETUP_SUCCESS:
            return { ...state, is_payment_success: true, redirectUrl: '/done' };
        case types.PAYMENT_SETUP_FAILED:
            return { ...state, is_payment_success: false, redirectUrl: '/' };
        case types.STRIPE_CODE_MATCH:
            return { ...state, is_code_match: true, redirectUrl: '/done' };
        case types.STRIPE_CODE_MISMATCH:
            return { ...state, is_code_match: false, redirectUrl: '/done' };
        default:
            return state;
    }
}