import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { toggleDrawer, logout } from '../../../store/actions/app';

import Button from '../button';

const useStyles = makeStyles(theme => ({
  title: {
    marginRight: 'auto',
  },
  welcomeTitle: {
    marginRight: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header = ({ isLoggedIn, user }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        {isLoggedIn && (
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" className={classes.title}>
          <Link to="/">TripAdventure</Link>
        </Typography>
        {isLoggedIn && user && (
          <Typography variant="subtitle2" className={classes.welcomeTitle}>
            {`Welcome, ${user.firstName} ${user.lastName}`}
          </Typography>
        )}
        {isLoggedIn
          ? (
            <Button color="inherit" variant="text" onClick={logout}>
              Logout
            </Button>
          )
          : (
            <Button color="inherit" variant="text" to="/login" component={Link}>
              Login
            </Button>
          )
        }
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};

export default Header;
