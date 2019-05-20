import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "store/modules/todo";

import { Container, Modal, Button, Divider } from "semantic-ui-react";

import TodosViewer from 'components/TodoModal/TodosViewer';

class TodoViewerContainer extends Component {

    handleChange = e => {
        const { TodoActions } = this.props;
        TodoActions.changeInput(e.target.value);
    };
    handleChangeContent = e => {
        const {TodoActions} = this.props;
        TodoActions.changeContent(e.target.value);
    }
    handleInsert = () => {
        const {input, inputContent, date, order, TodoActions } = this.props;
        const value = { input, inputContent, date, order};
        TodoActions.insert(value);
        TodoActions.changeInput("");
        TodoActions.changeContent("");
        TodoActions.changeDate("");
        TodoActions.todoOrderChange("");
    };
    handleEdit = (id)=>{
        const {TodoActions} = this.props;
        TodoActions.edit(id);
    }
  
    handleModalOpen = ()=> {
      const {TodoActions} = this.props;
      TodoActions.todoModalOpen();
    }

    handleModalClose = () =>{
      const {TodoActions} = this.props;
      TodoActions.todoEditModalClose();
    }

    handleChangeDate = (date) =>{
      const {TodoActions} = this.props;
      TodoActions.changeDate(date);
    }
    handleOrderChange = (color) => {
      const {TodoActions} = this.props;
      TodoActions.todoOrderChange(color);
    }

    
  render() {
    const {
      handleChange, handleChangeContent, handleInsert,  handleEdit,
      handleModalClose, handleModalOpen, handleChangeDate, handleOrderChange
     } = this;
    const {todos, modalOpen, editModalOpen, date, input, inputContent, order } = this.props;

    return (
        <TodosViewer
            onChange = {handleChange}
            onChangeContent = {handleChangeContent}
            onInsert = {handleInsert}
            onEdit = {handleEdit}
            modalOpen = {modalOpen}
            editModalOpen = {editModalOpen}
            onModalOpen = {handleModalOpen}
            onModalClose = {handleModalClose}
            onChangeDate = {handleChangeDate}
            date = {date}
            input = {input}
            inputContent = {inputContent}
            onOrderChange = {handleOrderChange}
            order={order}
        />
    );
  }
}

export default connect(
  ({ todo }) => ({
    input: todo.get("input"),
    inputContent : todo.get('inputContent'),
    date : todo.get('date'),
    order : todo.get('order'),
    todos: todo.get("todos"),
    modalOpen : todo.get("modalOpen"),
    editModalOpen : todo.get('editModalOpen')
  }),
  dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(TodoViewerContainer);
