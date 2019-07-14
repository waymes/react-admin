import * as constants from '../constants/entityList';

const initialState = {
  list: [],
  allowedFields: {},
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_ENTITY_LIST:
      return { ...state, isLoading: true };
    case constants.FETCH_ENTITY_LIST_SUCCESS:
      return {
        ...state,
        list: action.list,
        allowedFields: action.allowedFields,
        isLoading: false,
      };
    default:
      return state;
  }
};
