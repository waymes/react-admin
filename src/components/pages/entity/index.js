import React from 'react';
import { Form } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { TextField, Button } from '../../commons';
import authGuard from '../../layouts/auth-guard';

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
      <Form
        onSubmit={() => {}}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" component="h3">
              Edit User 1
            </Typography>
            <TextField name="firstName" label="First Name" />
            <TextField name="lastName" label="Last Name" />
            <TextField name="email" label="Email" type="email" />
            <TextField name="phone" label="Phone" />
            <Button color="primary" className={classes.submit} type="submit">Save</Button>
          </form>
        )}
      />
    </Paper>
  );
};

export default authGuard(Entity);
