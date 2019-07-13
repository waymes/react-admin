import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Header, Drawer } from '../../commons';

import { authTouch } from '../../../store/actions/app';

class GeneralLayout extends React.Component {
  componentDidMount() {
    authTouch();
  }

  render() {
    const { isLoggedIn, children, isAuthTouchComplete } = this.props;

    if (!isAuthTouchComplete) return 'Loading...';
    return (
      <div>
        <Header isLoggedIn={isLoggedIn} />
        <Drawer />
        <div>
          {children}
        </div>
      </div>
    );
  }
}

GeneralLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAuthTouchComplete: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: !!state.app.token,
  isAuthTouchComplete: state.app.isAuthTouchComplete,
});

export default connect(mapStateToProps)(GeneralLayout);
