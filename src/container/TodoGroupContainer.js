import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "store/modules/todo";

import { Container } from "semantic-ui-react";

import TodoGroup from 'components/Todo/TodoGroup';

class TodoGroupContainer extends Component {
    handleEdit = (id)=>{
        const {TodoActions} = this.props;
        TodoActions.edit(id);
    }

    handleToggle = id => {
        const { TodoActions } = this.props;
        TodoActions.toggle(id);
        TodoActions.changeInput("");
        TodoActions.changeContent("");
      };
    
    handleRemove = id => {
        // 아이템 제거
        const { TodoActions } = this.props;
        TodoActions.remove(id);
    };

    handleEditOpen = () => {
        const {TodoActions} = this.props;
        TodoActions.todoEditModalOpen();
    }

    handleEditClose = (id) => {
        const {TodoActions} = this.props;
        TodoActions.todoEditModalClose(id);
    }

  
  render() {
    const { 
        handleToggle, handleRemove, handleEdit, handleTodoClose, handleTodoOpen,
        handleEditOpen, handleEditClose
    } = this;
    const { todos } = this.props;

    return (
        <TodoGroup  
            todos={todos} 
            onToggle={handleToggle}
            onRemove={handleRemove} 
            onEdit={handleEdit} 
            onTodoOpen={handleTodoOpen}
            onTodoClose={handleTodoClose}
            onEditOpen={handleEditOpen}
            onEditClose={handleEditClose}
        />
    );
  }
}

export default connect(
  ({ todo }) => ({
    todos: todo.get("todos"),
    editModalOpen : todo.get("editModalOpen")
  }),
  dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(TodoGroupContainer);
