import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
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
};

InputField.propTypes = {
  label: PropTypes.string,
};

InputField.defaultProps = {
  label: '',
};

export default InputField;
