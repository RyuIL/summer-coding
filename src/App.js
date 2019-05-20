import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "store/modules/todo";
import * as notificationActions from 'store/modules/notification';
import ReactNotification from "react-notifications-component";

import TodoContainer from './container/TodoContainer';
import Layout from './components/Layout/Layout';
import HomeLayout from './components/Layout/HomeLayout';
class App extends Component {

  render() {
    const {addNotification, handleShowNotification} = this;
    return (
      <HomeLayout/>
    );
  }
}

export default connect(
  ({ todo, notification }) => ({
    todos: todo.get('todos'),
    data : notification.get('data')
  }),
  dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch),
    NotificationActions : bindActionCreators(notificationActions, dispatch)
  })
)(App);


