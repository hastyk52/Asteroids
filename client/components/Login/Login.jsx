import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from '../../hooks/useStyles';
import AppContext from '../contexts/AppContext';

const Login = function () {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const { setUser } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>

      <TextField
        onChange={(e) => (setUsername(e.target.value))}
        label="Username"
        variant="outlined"
        color="secondary"
        required
      />
      <Button
        variant="contained"
        type="submit"
        className={classes.btn}
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
