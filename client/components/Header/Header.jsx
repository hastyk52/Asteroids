import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from '../../hooks/useStyles';

import Login from '../Login/Login';

const Header = ({ user }) => {
  const classes = useStyles();
  return (
    <AppBar>
      <ToolBar>
        <Container className={classes.header}>
          <Typography variant="h3">
            Asteroids
          </Typography>
          {
            user ? (
              <Typography
                variant="h6"
                id="username"
              >
                {user}
              </Typography>
            ) : <Login  />
          }
        </Container>
      </ToolBar>
    </AppBar>
  );
};

export default Header;
