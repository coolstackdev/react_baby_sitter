import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import * as ActionTypes from './ActionTypes';

const initialState = Map({
    currentUser: '',
    userData: {
        'firstname': '',
        'stripe_id': '',
        'created_at': '',
        'eventCount': '',
        'earnMoneyCurrentWeek': '',
        'balance': '',
        'available': ''
    },
    events: List()
});

export const requestEvents = createAction(ActionTypes.REQUEST_EVENTS, uid => uid);
export const loadedEvents = createAction(ActionTypes.LOADED_EVENTS, response => response);


export default handleActions({
    [ActionTypes.REQUEST_EVENTS]: (state, { payload: uid }) => {
        return state.set('currentUser', uid);
    },

    [ActionTypes.LOADED_EVENTS]: (state, { payload: response }) => {
        var nextState = state.set('userData', response.userData);
        nextState = nextState.set('events', response.events);
        return nextState;
    }

}, initialState);
