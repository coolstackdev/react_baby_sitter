import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import * as ActionTypes from './ActionTypes';

const initialState = Map({
    currentUser: null,
    events: List()
});

export const requestEvents = createAction(ActionTypes.REQUEST_EVENTS, user => user);
export const loadedEvents = createAction(ActionTypes.LOADED_EVENTS, events => events);


export default handleActions({
    [ActionTypes.REQUEST_EVENTS]: (state, { payload: currentUser }) => {
        return state.set('currentUser', currentUser);
    },

    [ActionTypes.LOADED_EVENTS]: (state, { payload: events }) => state.set('events', events),

}, initialState);
