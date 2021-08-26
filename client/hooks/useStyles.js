import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0',
    alignSelf: 'center',
  },
  btn: {
    background: 'white',
    marginLeft: '10px',
  },
  toolbar: theme.mixins.toolbar,
  main: {
    display: 'flex',
    marginTop: '40px',
  },
}));

export default useStyles;
