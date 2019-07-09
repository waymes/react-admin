import React from 'react';
import MaterialButton from '@material-ui/core/Button';

const Button = ({ children, ...rest }) => (
  <MaterialButton variant="contained" {...rest}>
    {children}
  </MaterialButton>
);

export default Button;
