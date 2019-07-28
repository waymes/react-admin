import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  textField: {
    width: '100%',
  },
}));

const TextField = ({ name, label, ...rest }) => {
  const classes = useStyles();

  return (
    <Field
      name={name}
      render={({ input }) => (
        <MaterialTextField
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

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

TextField.defaultProps = {
  label: '',
};

export default TextField;
