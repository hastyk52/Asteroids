import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const HighScoreEntry = ({ username, score, date, scoreRank }) => (
  <TableRow>
    <TableCell>{scoreRank}</TableCell>
    <TableCell>{username}</TableCell>
    <TableCell>{score}</TableCell>
    <TableCell>{date}</TableCell>
  </TableRow>
);

export default HighScoreEntry;
