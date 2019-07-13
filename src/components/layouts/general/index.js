import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../commons/header';

const GeneralLayout = ({ children }) => (
  <div>
    <Header />
    <div>
      {children}
    </div>
  </div>
);

GeneralLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GeneralLayout;
