import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { toggleDrawer } from '../../../store/actions/app';

import Button from '../button';

const useStyles = makeStyles(theme => ({
  title: {
    marginRight: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
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
