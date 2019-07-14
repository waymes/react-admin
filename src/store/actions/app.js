import { FORM_ERROR } from 'final-form';

import * as constants from '../constants/app';
import { dispatch } from '..';
import request from '../../helpers/request';

export const toggleDrawer = () => {
  dispatch({ type: constants.TOGGLE_DRAWER });
};

const menuList = [
  { label: 'Dashboard', href: '/' },
  { label: 'Users', href: '/users' },
  { label: 'Trips', href: '/trips' },
];

export const login = async ({ email, password }) => {
  try {
    const { token } = await request('/admin/auth/login', {
      method: 'POST',
      body: { email, password },
    });
    localStorage.setItem('token', token);
    dispatch({ type: constants.LOGIN_SUCCESS, token, menuList });
  } catch (error) {
    const jsonMessage = JSON.parse(error.message);
    if (jsonMessage && jsonMessage.message) {
      return { [FORM_ERROR]: jsonMessage.message };
    }
  }
};

export const authTouch = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch({ type: constants.AUTH_TOUCH_ERROR });
    return;
  }
  try {
    await request('/admin/auth/touch', { method: 'GET' });
    dispatch({
      type: constants.AUTH_TOUCH_SUCCESS, user: {}, token, menuList,
    });
  } catch (error) {
    localStorage.removeItem('token');
    dispatch({ type: constants.AUTH_TOUCH_ERROR });
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  dispatch({ type: constants.LOGOUT });
};
