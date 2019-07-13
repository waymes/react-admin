import React from 'react';
import PropTypes from 'prop-types';

import { Header, Drawer } from '../../commons';

const GeneralLayout = ({ children }) => (
  <div>
    <Header />
    <Drawer />
    <div>
      {children}
    </div>
  </div>
);

GeneralLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GeneralLayout;
