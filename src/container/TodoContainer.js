import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "store/modules/todo";
import * as notificationActions from 'store/modules/notification';
import { Container, Header } from "semantic-ui-react";

import NotificationComponent from 'components/NotificationComponent/NotificationComponent';
import TodoGroupContainer from './TodoGroupContainer';
import TodoViewerContainer from './TodoViewerContainer';


class TodosContainer extends Component {

  render() {

    const { todos, addNotification } = this.props;
    return (
      <Container textAlign='center'>
          <TodoGroupContainer addNotification={addNotification}/>
          {todos.size ? "":<Header>버튼을 눌러 작업을 추가해 보세요!</Header>}
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
