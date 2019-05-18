import React, { Component } from "react";
import Todos from "components/Todo/Todos";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "store/modules/todo";

import TodosViewer from "components/TodoModal/TodosViewer";
import { Container } from "semantic-ui-react";

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
    // 아이템 제거
    const { TodoActions } = this.props;
    TodoActions.remove(id);
  };

  handleChangeDate = (id) => {
    const {TodoActions} = this.props;
    
  }
  
  render() {
    const { handleChange, handleChangeContent, handleInsert, handleToggle, handleRemove, handleEdit } = this;
    const { input, inputContent ,todos } = this.props;

    return (
      <Container textAlign='center'>
        <Todos
          input={input}
          inputContent={inputContent}
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}

          onInsert={handleInsert}
          onEdit={handleEdit}

          onChange={handleChange}
          onChangeContent={handleChangeContent}
        />
        
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
    todos: todo.get("todos")
  }),
  dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(TodosContainer);
