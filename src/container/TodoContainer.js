import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "store/modules/todo";
import { Container } from "semantic-ui-react";

import TodoGroupContainer from './TodoGroupContainer';
import TodoViewerContainer from './TodoViewerContainer';


class TodosContainer extends Component {

  render() {

    const { addNotification } = this.props;
    return (
      <Container textAlign='center'>
          <TodoGroupContainer addNotification={addNotification}/>
          <TodoViewerContainer addNotification={addNotification}/>
      </Container>
    );
  }
}

export default connect(
  ({ todo, notification }) => ({
    todos: todo.get('todos'),
    data : notification.get('data')
  }),
  dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(TodosContainer);
