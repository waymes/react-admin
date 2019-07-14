import { getCurrentState, dispatch } from '..';
import * as constants from '../constants/entityList';

// eslint-disable-next-line import/prefer-default-export
export const fetchEntityList = async () => {
  const { pathname } = getCurrentState().router.location;
  dispatch({ type: constants.FETCH_ENTITY_LIST });
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    const list = [
      { id: 1, firstName: 'Mike', lastName: 'Jordan' },
      { id: 2, firstName: 'Mike', lastName: 'Jordan' },
      { id: 3, firstName: 'Mike', lastName: 'Jordan' },
      { id: 4, firstName: 'Mike', lastName: 'Jordan' },
    ];
    const allowedFields = {
      firstName: 'First Name',
      lastName: 'Last Name',
    };
    dispatch({ type: constants.FETCH_ENTITY_LIST_SUCCESS, list, allowedFields });
  } catch (error) {
    dispatch({ type: constants.FETCH_ENTITY_LIST_ERROR, error });
  }
};
