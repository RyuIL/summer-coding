import {combineReducers} from 'redux';
import {penderReducer} from 'redux-pender';
import todo from './todo';
import notification from './notification';

export default combineReducers({
    todo,
    notification,
    pender : penderReducer
});