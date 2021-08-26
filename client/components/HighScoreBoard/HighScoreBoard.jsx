import React from 'react';
import HighScoreEntry from '../HighScoreEntry/HighScoreEntry';

const HighScoreBoard = ({ scores }) => (
  <div>
    <div>HighScores</div>
    {scores.map(({ id, username, score, date }) => (
      <HighScoreEntry
        key={id}
        username={username}
        score={score}
        date={date}
      />
    ))}
  </div>
);

export default HighScoreBoard;
