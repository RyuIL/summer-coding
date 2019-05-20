import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const SHOW_NOTIFICATION = 'todo/SHOW_NOTIFICATION';

export const showNotification = createAction(SHOW_NOTIFICATION, value => value);

const initialState = Map({
  data : Map({
      title : '',
      type : '',
  })
});

export default handleActions({
  [SHOW_NOTIFICATION]: (state, action) => state.set('data', action.payload),
}, initialState);