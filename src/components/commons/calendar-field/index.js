import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import momentUtils from '@date-io/moment';

const useStyles = makeStyles(() => ({
  datePicker: {
    width: '100%',
  },
}));

const CalendarField = ({ name, label, ...rest }) => {
  const classes = useStyles();

  return (
    <Field
      name={name}
      render={({ input }) => (
        <MuiPickersUtilsProvider utils={momentUtils}>
          <KeyboardDatePicker
            className={classes.datePicker}
            margin="normal"
            label={label}
            KeyboardButtonProps={{ 'aria-label': 'change date' }}
            views={['year', 'month', 'date']}
            format="DD MMMM YYYY"
            {...input}
            {...rest}
          />
        </MuiPickersUtilsProvider>
      )}
    />
  );
};

CalendarField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

CalendarField.defaultProps = {
  label: '',
};

export default CalendarField;
