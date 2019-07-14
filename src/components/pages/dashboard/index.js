import React from 'react';

import authGuard from '../../layouts/auth-guard';

const Dashboard = () => (
  <div>Dashboard</div>
);

export default authGuard(Dashboard);
