import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header, Drawer, Loading } from '../../commons';

import { authTouch } from '../../../store/actions/app';

class GeneralLayout extends React.Component {
  componentDidMount() {
    authTouch();
  }

  render() {
    const {
      isLoggedIn, children, isAuthTouchComplete, menuList,
    } = this.props;

    if (!isAuthTouchComplete) return <Loading fixed />;
    return (
      <div>
        <Header isLoggedIn={isLoggedIn} />
        <Drawer menuList={menuList} />
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
  menuList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: !!state.app.token,
  isAuthTouchComplete: state.app.isAuthTouchComplete,
  menuList: state.app.menuList,
});

export default connect(mapStateToProps)(GeneralLayout);
