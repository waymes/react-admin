import React from 'react';
import PropTypes from 'prop-types';
import MaterialButton from '@material-ui/core/Button';

const Button = ({ children, ...rest }) => (
  <MaterialButton variant="contained" {...rest}>
    {children}
  </MaterialButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
