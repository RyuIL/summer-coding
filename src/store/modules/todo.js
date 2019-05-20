import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const CHANGE_CONTENT = 'todo/CHANGE_CONTENT';
const INSERT = 'todo/INSERT';
const EDIT = 'todo/EDIT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';
const CHANGE_DATE = 'todo/CANGE_DATE';
const TODO_MODAL_OPEN = 'todo/TODO_MODAL_OPEN';
const TODO_MODAL_ClOSE = 'todo/TODO_MODAL_CLOSE';
const TODO_EDIT_MODAL_OPEN = "todo/TODO_EDIT_MODAL_OPEN";
const TODO_EDIT_MODAL_CLOSE = "todo/TODO_EDIT_MODAL_CLOSE";
const TODO_ORDER_CHANGE = "todo/TODO_ORDER_CHANGE";
const CHECK_TIME = "todo/CHECK_TIME";

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const changeContent = createAction(CHANGE_CONTENT, value => value);
export const insert = createAction(INSERT, text => text);
export const edit = createAction(EDIT);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);
export const changeDate = createAction(CHANGE_DATE, date=> date);
export const todoModalOpen = createAction(TODO_MODAL_OPEN);
export const todoEditModalOpen = createAction(TODO_EDIT_MODAL_OPEN, id => id);
export const todoModalClose = createAction(TODO_MODAL_ClOSE);
export const todoEditModalClose = createAction(TODO_EDIT_MODAL_CLOSE);
export const todoOrderChange = createAction(TODO_ORDER_CHANGE, value => value);
export const checkTime = createAction(CHECK_TIME);

let id = 0;

const initialState = Map({
  input: '',
  inputContent : '',
  date : new Date(),
  now : Date(),
  order : '',
  todoOpen : false,
  modalOpen : false,
  editModalOpen : false,
  todos: List()
});

export default handleActions({
  [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
  [CHANGE_CONTENT] : (state, action) => state.set('inputContent', action.payload),
  [INSERT]: (state, { payload: text }) => {
    const item = Map({ id: id++, checked: false, text }); 
    return state.update('todos', todos => todos.push(item));
  },
  [EDIT] : (state, {payload : id}) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.setIn(['todos', index, 'text', 'input'], state.get('input'))
                .setIn(['todos', index, 'text', 'inputContent'], state.get('inputContent'))
                .setIn(['todos', index, 'text', 'date'], state.get('date'))
                .setIn(['todos', index, 'text', 'order'], state.get('order'))
  },
  [TOGGLE]: (state, { payload: id }) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.updateIn(['todos', index, 'checked'], checked => !checked);
  },
  [REMOVE]: (state, { payload: id }) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.deleteIn(['todos', index]);
  },
  [TODO_MODAL_OPEN] : (state) => state.set('modalOpen', true)
                                      .set('date', new Date()),
  [TODO_MODAL_ClOSE] : (state) => state.set('modalOpen', false)
                                       .set('editModalOpen', false),
  [TODO_EDIT_MODAL_OPEN] : (state, {payload : id}) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.set('input', state.getIn(['todos', index, 'text', 'input']))
                .set('inputContent', state.getIn(['todos', index, 'text', 'inputContent']))
                .set('date', state.getIn(['todos', index, 'text', 'date']))
                .set('editModalOpen', true)
                .set('order', state.getIn(['todos', index, 'text', 'order']))
  },
  [TODO_EDIT_MODAL_CLOSE] : (state) => {
    return state.set('input', '')
                .set('inputContent', '')
                .set('date', new Date())
                .set('editModalOpen', false)
                .set('modalOpen', false)
                .set('order', "");
  },
  [CHANGE_DATE] : (state, {payload : date}) => state.set('date', date),
  [TODO_ORDER_CHANGE] : (state, {payload : value}) => state.set('order', value),
  [CHECK_TIME] : (state) => state.set('now', new Date())
}, initialState);