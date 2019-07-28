import React from 'react';
import { TextField } from '../../commons';

// eslint-disable-next-line import/prefer-default-export
export const fieldOptions = {
  text: TextField,
  textarea: props => <TextField multiline {...props} rowsMax={10} />,
};
