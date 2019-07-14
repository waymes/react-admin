import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { toggleDrawer } from '../../../store/actions/app';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const Sidebar = ({ menuList }) => {
  const classes = useStyles();
  const isDrawerOpen = useSelector(state => state.app.isDrawerOpen);

  return (
    <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>
          {menuList.map((menuItem, index) => (
            <ListItem button key={menuItem.href} component={Link} to={menuItem.href}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={menuItem.label} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Sidebar;
