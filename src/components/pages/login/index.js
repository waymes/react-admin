import React from 'react';
import { Form } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { TextField, Button } from '../../commons';
import notAuthedGuard from '../../layouts/not-authed-guard';

import { login } from '../../../store/actions/app';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '100%',
    maxWidth: '400px',
    boxSizing: 'border-box',
    margin: `${theme.spacing(7)}px auto`,
  },
  submit: {
    display: 'block',
    marginLeft: 'auto',
    marginTop: theme.spacing(3),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Form
        onSubmit={login}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" component="h3">
              Login to Admin
            </Typography>
            <TextField name="email" label="Email" type="email" required />
            <TextField name="password" label="Password" type="password" required />
            <Button color="primary" className={classes.submit} type="submit">Login</Button>
          </form>
        )}
      />
    </Paper>
  );
};

export default notAuthedGuard(Login);
