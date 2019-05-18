import React, { Component } from 'react';

import TodoContainer from './container/TodoContainer';
import Layout from './components/Layout/Layout';

class App extends Component {

    state = { username: null };

    componentDidMount() {
        fetch('/api/getUsername')
            .then(res => res.json())
            .then(user => this.setState({ username: user.username }));
    }

  render() {
    const { username } = this.state;
    return (
      <Layout>
        <TodoContainer/>
      </Layout>
    );
  }
}

export default App;


