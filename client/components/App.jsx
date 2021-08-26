import React from 'react';
import axios from 'axios';

import Header from './Header/Header';
import HighScoreBoard from './HighScoreBoard/HighScoreBoard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      scores: [],
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    axios.get('/scoreboard')
      .then(({ data }) => {
        const { scores } = data;
        this.setState({ scores });
      });
  }

  handleLogin(user) {
    this.setState({ user });
  }

  render() {
    const { user, scores } = this.state;
    return (
      <>
        <Header user={user} handleLogin={this.handleLogin} />
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'inline-block' }}>
            <HighScoreBoard scores={scores} />
          </div>
          <div id="phaser" />
        </div>
      </>
    );
  }
}

export default App;
