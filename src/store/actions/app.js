import * as constants from '../constants/app';
import { dispatch } from '..';

export const toggleDrawer = () => {
  dispatch({ type: constants.TOGGLE_DRAWER });
};

export const login = async ({ email, password }) => {
  dispatch({ type: constants.LOGIN });
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    const token = 'ToKeN';
    localStorage.setItem('token', token);
    dispatch({ type: constants.LOGIN_SUCCESS, token });
  } catch (error) {
    dispatch({ type: constants.LOGIN_ERROR, error });
  }
};

export const authTouch = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch({ type: constants.AUTH_TOUCH_ERROR });
    return;
  }
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    dispatch({ type: constants.AUTH_TOUCH_SUCCESS, user: {}, token });
  } catch (error) {
    localStorage.removeItem('token');
    dispatch({ type: constants.AUTH_TOUCH_ERROR });
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  dispatch({ type: constants.LOGOUT });
};
