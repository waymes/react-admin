import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import InputField from '../../commons/text-field';
import Button from '../../commons/button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2),
    boxSizing: 'border-box',
  },
  submit: {
    display: 'block',
    marginLeft: 'auto',
    marginTop: theme.spacing(3),
  },
}));

const Entity = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <form>
        <Typography variant="h5" component="h3">
          Edit User 1
        </Typography>
        <InputField label="First Name" />
        <InputField label="Last Name" />
        <InputField label="Email" type="email" />
        <InputField label="Phone" />
        <Button color="primary" className={classes.submit} type="submit">Save</Button>
      </form>
    </Paper>
  );
};

export default Entity;
