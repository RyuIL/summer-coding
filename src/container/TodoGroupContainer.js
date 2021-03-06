import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "store/modules/todo";

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

    componentDidMount(){
      setInterval(()=>{
        this.props.TodoActions.checkTime();
      },10000)
    }

  render() {
    const { 
        handleToggle, handleRemove, handleEdit, handleTodoClose, handleTodoOpen,
        handleEditOpen, handleEditClose
    } = this;
    const { todos, addNotification, now } = this.props;

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
            addNotification={addNotification}
            now = {now}
        />
    );
  }
}

export default connect(
  ({ todo}) => ({
    todos: todo.get("todos"),
    editModalOpen : todo.get("editModalOpen"),
    data : todo.get('data'),
    now : todo.get('now')
  }),
  dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch),
  })
)(TodoGroupContainer);
