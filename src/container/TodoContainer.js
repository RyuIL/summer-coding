import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "store/modules/todo";

import { Container, Header } from "semantic-ui-react";

import TodoGroupContainer from './TodoGroupContainer';
import TodoViewerContainer from './TodoViewerContainer';


class TodosContainer extends Component {
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
  };
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
    const { TodoActions } = this.props;
    TodoActions.remove(id);
  };

  handleChangeDate = (id) => {
    const {TodoActions} = this.props;
  }
  
  render() {
    const {  } = this;
    const { input, inputContent ,todos } = this.props;

    return (
      <Container textAlign='center'>
          <TodoGroupContainer/>
          {todos.size ? <TodoViewerContainer/> : <div><Header>작업을 추가 하세요.</Header> <TodoViewerContainer/></div>}
          
      </Container>
    );
  }
}

export default connect(
  ({ todo }) => ({
    input: todo.get("input"),
    inputContent : todo.get('inputContent'),
    date : todo.get('date'),
    order : todo.get('oreder'),
    todos: todo.get("todos"),
    editModalOpen : todo.get('editModalOpen')
  }),
  dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(TodosContainer);
