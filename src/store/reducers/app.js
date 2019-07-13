import * as constants from '../constants/app';

const initialState = {
  token: null,
  isLoginLoading: false,
  isDrawerOpen: false,
  isAuthTouchComplete: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.TOGGLE_DRAWER:
      return { ...state, isDrawerOpen: !state.isDrawerOpen };
    case constants.LOGIN:
      return { ...state, isLoginLoading: true };
    case constants.LOGIN_SUCCESS:
      return { ...state, isLoginLoading: false, token: action.token };
    case constants.LOGIN_ERROR:
      return { ...state, isLoginLoading: false };
    case constants.LOGOUT:
      return { ...state, token: null };
    case constants.AUTH_TOUCH_SUCCESS:
      return { ...state, isAuthTouchComplete: true, user: action.user, token: action.token };
    case constants.AUTH_TOUCH_ERROR:
      return { ...state, isAuthTouchComplete: true };
    default:
      return state;
  }
};
