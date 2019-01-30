import * as types from './ActionTypes';

export function loginRequest(user) {
    return {
        type: types.LOGIN_REQUEST,
        user
    };
}

export function userLoggedIn() {
    return {
        type: types.USER_LOGGED_IN
    }
}

export function userLoggedOut() {
    return {
        type: types.USER_LOGGED_OUT
    }
}

export function paymentSetupSuccess() {
    return {
        type: types.PAYMENT_SETUP_SUCCESS
    }
}

export function paymentSetupFailed() {
    return {
        type: types.PAYMENT_SETUP_FAILED
    }
}

export function stripeCodeMatch() {
    return {
        type: types.STRIPE_CODE_MATCH
    }
}

export function stripeCodeMismatch() {
    return {
        type: types.STRIPE_CODE_MISMATCH
    }
}

