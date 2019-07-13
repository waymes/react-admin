import { TOGGLE_DRAWER } from '../constants/app';

const initialState = {
  isDrawerOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return { ...state, isDrawerOpen: !state.isDrawerOpen };
    default:
      return state;
  }
};
