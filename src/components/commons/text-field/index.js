import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%',
  },
}));

const InputField = ({ label, ...rest }) => {
  const classes = useStyles();

  return (
    <TextField
      label={label}
      className={classes.textField}
      margin="normal"
      {...rest}
    />
  );
}

export default InputField;
