import * as constants from '../constants/app';

const initialState = {
  token: null,
  isDrawerOpen: false,
  isAuthTouchComplete: false,
  menuList: [],
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.TOGGLE_DRAWER:
      return { ...state, isDrawerOpen: !state.isDrawerOpen };
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        menuList: action.menuList,
      };
    case constants.LOGOUT:
      return { ...state, token: null };
    case constants.AUTH_TOUCH_SUCCESS:
      return {
        ...state,
        isAuthTouchComplete: true,
        user: action.user,
        token: action.token,
        menuList: action.menuList,
      };
    case constants.AUTH_TOUCH_ERROR:
      return { ...state, isAuthTouchComplete: true };
    default:
      return state;
  }
};
