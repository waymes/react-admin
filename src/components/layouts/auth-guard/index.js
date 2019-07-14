import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthGuard = Component => connect(state => ({
  isLoggedIn: !!state.app.token,
}))(({ isLoggedIn, ...props }) => {
  if (!isLoggedIn) return <Redirect to="/login" />;

  return <Component {...props} />;
});

export default AuthGuard;
