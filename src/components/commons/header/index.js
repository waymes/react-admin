import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '../button';

const useStyles = makeStyles(() => ({
  title: {
    marginRight: 'auto',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to="/">TripAdventure</Link>
        </Typography>
        <Button
          color="inherit"
          variant="text"
          to="/login"
          component={Link}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
