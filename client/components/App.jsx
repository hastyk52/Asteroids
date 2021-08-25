import React from 'react';

import Header from './Header/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(user) {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <>
        <Header user={user} handleLogin={this.handleLogin} />
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'inline-block' }}>
            <h3>SCOREBOARD</h3>
            <div> cooluser1      42</div>
          </div>
          <div id="phaser" />
        </div>
      </>
    );
  }
}

export default App;
