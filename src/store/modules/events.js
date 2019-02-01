import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import * as ActionTypes from './ActionTypes';

const initialState = Map({
    userEmail: '',
    userData: null,
    events: List()
});

export const requestEvents = createAction(ActionTypes.REQUEST_EVENTS, email => email);
export const loadedEvents = createAction(ActionTypes.LOADED_EVENTS, response => response);


export default handleActions({
    [ActionTypes.REQUEST_EVENTS]: (state, { payload: email }) => {
        return state.set('userEmail', email);
    },

    [ActionTypes.LOADED_EVENTS]: (state, { payload: response }) => {
        var nextState = state.set('userData', response.userData);
        nextState = nextState.set('events', response.events);
        return nextState;
    }

}, initialState);
