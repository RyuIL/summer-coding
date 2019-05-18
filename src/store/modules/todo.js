import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const CHANGE_CONTENT = 'todo/CHANGE_CONTENT';
const INSERT = 'todo/INSERT';
const EDIT = 'todo/EDIT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const changeContent = createAction(CHANGE_CONTENT, value => value);
export const insert = createAction(INSERT, text => text);
export const edit = createAction(EDIT);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);


let id = 0;

const initialState = Map({
  input: '',
  inputContent : '',
  date : '',
  order : '',
  todos: List()
});

export default handleActions({
  
  [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
  [CHANGE_CONTENT] : (state, action) => state.set('inputContent', action.payload),
  [INSERT]: (state, { payload: text }) => {
    const item = Map({ id: id++, checked: false, text }); 
    return state.update('todos', todos => todos.push(item));
  },
  [EDIT] : (state, action) => {
    const {id} = action.payload;
    
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.setIn(['todos', index, 'text', 'input'], state.get('input'))
                .setIn(['todos', index, 'text', 'inputContent'], state.get('inputContent'));
  },
  [TOGGLE]: (state, { payload: id }) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.updateIn(['todos', index, 'checked'], checked => !checked);
  },
  [REMOVE]: (state, { payload: id }) => {
    
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.deleteIn(['todos', index]);
  }
}, initialState);