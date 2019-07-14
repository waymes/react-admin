import * as constants from '../constants/entityList';

const initialState = {
  entity: [],
  fieldsToRender: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case constants.TOGGLE_DRAWER:
    //   return { ...state, isDrawerOpen: !state.isDrawerOpen };
    default:
      return state;
  }
};
