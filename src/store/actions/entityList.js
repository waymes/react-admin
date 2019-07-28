import request from '../../helpers/request';
import { getCurrentState, dispatch } from '..';
import * as constants from '../constants/entityList';

// eslint-disable-next-line import/prefer-default-export
export const fetchEntityList = async () => {
  const { pathname } = getCurrentState().router.location;
  dispatch({ type: constants.FETCH_ENTITY_LIST });
  try {
    const response = await request(`/admin${pathname}`, { method: 'GET' });
    dispatch({ type: constants.FETCH_ENTITY_LIST_SUCCESS, ...response });
  } catch (error) {
    dispatch({ type: constants.FETCH_ENTITY_LIST_ERROR, error });
  }
};
