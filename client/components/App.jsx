import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';

import AppContext from './contexts/AppContext';
import Header from './Header/Header';
import HighScoreBoard from './HighScoreBoard/HighScoreBoard';
import useStyles from '../hooks/useStyles';

const App = function () {
  const [user, setUser] = useState('');
  const [highScores, setHighScores] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get('/scoreboard')
      .then(({ data }) => {
        const { scores } = data;
        setHighScores(scores);
      });
  }, []);

  const context = {
    user,
    setUser,
    highScores,
    setHighScores,
  };

  return (
    <AppContext.Provider value={context}>
      <Header user={user} />
      <div className={classes.toolbar} />
      <Container className={classes.main}>
        <div id="phaser" />
        <HighScoreBoard scores={highScores} />
      </Container>
    </AppContext.Provider>
  );
}

export default App;
