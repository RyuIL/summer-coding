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
        {/* {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>} */}
      </Layout>
    );
  }
}

export default App;


