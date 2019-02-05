import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as ActionTypes from './ActionTypes';

const initialState = Map({
    authenticated: false,
    currentUser: ''
});

export const userLoggedIn = createAction(ActionTypes.USER_LOGGED_IN, uid => uid);
export const userLoggedOut = createAction(ActionTypes.USER_LOGGED_OUT);
export const requestLogout = createAction(ActionTypes.REQUEST_LOGOUT);

export default handleActions({
    [ActionTypes.USER_LOGGED_IN]: (state, { payload: uid }) => {
        var nextState = state.set('authenticated', true);
        nextState = nextState.set('currentUser', uid);
        return nextState;
    },

    [ActionTypes.USER_LOGGED_OUT]: (state) => state.set('authenticated', false),

}, initialState);
