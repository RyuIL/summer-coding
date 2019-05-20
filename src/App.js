import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "store/modules/todo";
import * as notificationActions from 'store/modules/notification';
import ReactNotification from "react-notifications-component";

import TodoContainer from './container/TodoContainer';
import Layout from './components/Layout/Layout';
class App extends Component {

    constructor(props) {
      super(props);
      this.addNotification = this.addNotification.bind(this);
      this.notificationDOMRef = React.createRef();
    }
  
    addNotification(value) {
      this.notificationDOMRef.current.addNotification({
        title: value.title,
        message: value.message,
        type: value.type,
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "jackInTheBox"],
        animationOut: ["animated", "fadeOut"],
        dismiss: { duration: 3000 },
        dismissable: { click: true }
      });
    }
    handleShowNotification = (value) =>{
      const {NotificationActions} = this.props;
      NotificationActions.showNotification(value);
      this.addNotification(value);
    }

    // componentDidMount() {
    //     fetch('/api/getUsername')
    //         .then(res => res.json())
    //         .then(user => this.setState({ username: user.username }));
    // }

  render() {
    const {addNotification, handleShowNotification} = this;
    return (
      <Layout>
          <ReactNotification ref={this.notificationDOMRef}/>
          <TodoContainer 
            addNotification={handleShowNotification}
          />
      </Layout>
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


