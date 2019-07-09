import React from 'react';

import Header from '../../commons/header';

const GeneralLayout = ({ children }) => (
  <div>
    <Header />
    <div>
      {children}
    </div>
  </div>
);

export default GeneralLayout;
