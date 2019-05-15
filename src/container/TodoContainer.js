import React, { Component } from "react";
import Todos from "components/Todo/Todos";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "store/modules/todo";

import AddModal from "components/AddModal/AddModal";
import { Container } from "semantic-ui-react";

class TodosContainer extends Component {
  handleChange = e => {
    const { TodoActions } = this.props;
    TodoActions.changeInput(e.target.value);
  };

  handleInsert = () => {
    const { input, TodoActions } = this.props;
    TodoActions.insert(input);
    TodoActions.changeInput("");
  };

  handleToggle = id => {
    const { TodoActions } = this.props;
    TodoActions.toggle(id);
  };

  handleRemove = id => {
    // 아이템 제거
    const { TodoActions } = this.props;
    TodoActions.remove(id);
  };

  render() {
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;
    const { input, todos } = this.props;

    return (
      <Container textAlign='center'>
        <Todos
          input={input}
          todos={todos}
          onChange={handleChange}
          onInsert={handleInsert}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
        <AddModal />
      </Container>
    );
  }
}

export default connect(
  ({ todo }) => ({
    input: todo.get("input"),
    todos: todo.get("todos")
  }),
  dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(TodosContainer);
