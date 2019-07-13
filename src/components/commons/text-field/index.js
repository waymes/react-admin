import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  textField: {
    width: '100%',
  },
}));

const InputField = ({ name, label, ...rest }) => {
  const classes = useStyles();

  return (
    <Field
      name={name}
      render={({ input }) => (
        <TextField
          label={label}
          className={classes.textField}
          margin="normal"
          {...input}
          {...rest}
        />
      )}
    />
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

InputField.defaultProps = {
  label: '',
};

export default InputField;
