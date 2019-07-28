import * as constants from '../constants/entity';

const initialState = {
  entityData: null,
  entityFieldList: [],
  title: null,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_ENTITY:
      return { ...state, isLoading: true };
    case constants.FETCH_ENTITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        entityData: action.entityData,
        entityFieldList: action.entityFieldList,
        title: action.title,
      };
    case constants.FETCH_ENTITY_ERROR:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
