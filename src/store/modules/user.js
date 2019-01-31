import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as ActionTypes from './ActionTypes';

const initialState = Map({
    authenticated: false,
    currentUser: {
        'uid': '',
        'email': '',
        'stripe_id': '',
    }
});

export const userLoggedIn = createAction(ActionTypes.USER_LOGGED_IN, user => user);
export const userLoggedOut = createAction(ActionTypes.USER_LOGGED_OUT);
export const requestLogout = createAction(ActionTypes.REQUEST_LOGOUT);

export default handleActions({
    [ActionTypes.USER_LOGGED_IN]: (state, { payload: currentUser }) => {
        state.set('authenticated', true);
        return state.set('currentUser', currentUser);
    },

    [ActionTypes.USER_LOGGED_OUT]: (state) => state.set('authenticated', false),

}, initialState);
