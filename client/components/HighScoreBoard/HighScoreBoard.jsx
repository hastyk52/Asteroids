import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AppContext from '../contexts/AppContext';
import HighScoreEntry from '../HighScoreEntry/HighScoreEntry';

const HighScoreBoard = ({ }) => {
  const { highScores } = useContext(AppContext);
  return (
    <Container>
      <Typography variant="h5">HighScores</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              highScores.length ? (
                highScores.map(({ id, username, score, date }, i) => (
                  <HighScoreEntry
                    key={id}
                    username={username}
                    score={score}
                    date={date}
                    scoreRank={i + 1}
                  />
                ))
              ) : (
                <div>Loading...</div>
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default HighScoreBoard;
