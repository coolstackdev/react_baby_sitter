import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as ActionTypes from './ActionTypes';

const initialState = Map({
    authenticated: false,
    currentUserEmail: ''
});

export const userLoggedIn = createAction(ActionTypes.USER_LOGGED_IN, email => email);
export const userLoggedOut = createAction(ActionTypes.USER_LOGGED_OUT);
export const requestLogout = createAction(ActionTypes.REQUEST_LOGOUT);

export default handleActions({
    [ActionTypes.USER_LOGGED_IN]: (state, { payload: email }) => {
        var nextState = state.set('authenticated', true);
        nextState = nextState.set('currentUserEmail', email);
        return nextState;
    },

    [ActionTypes.USER_LOGGED_OUT]: (state) => state.set('authenticated', false),

}, initialState);
