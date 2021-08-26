import React from 'react';

const HighScoreEntry = ({ username, score, date }) => (
  <div>
    {`${username}---${score}---${date}`}
  </div>
);

export default HighScoreEntry;
