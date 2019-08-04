import * as constants from '../constants/entityList';

const initialState = {
  entityList: [],
  fieldList: [],
  goToEntityPageLabel: '',
  createNew: false,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_ENTITY_LIST:
      return { ...state, isLoading: true };
    case constants.FETCH_ENTITY_LIST_SUCCESS:
      return {
        ...state,
        entityList: action.entityList,
        fieldList: action.fieldList,
        goToEntityPageLabel: action.goToEntityPageLabel || '',
        createNew: action.createNew || false,
        isLoading: false,
      };
    default:
      return state;
  }
};
