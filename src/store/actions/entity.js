import request from '../../helpers/request';
import { getCurrentState, dispatch } from '..';
import * as constants from '../constants/entity';

export const fetchEntity = async () => {
  const { pathname } = getCurrentState().router.location;
  dispatch({ type: constants.FETCH_ENTITY });
  try {
    const responseData = await request(`/admin${pathname}`, { method: 'GET' });
    dispatch({ type: constants.FETCH_ENTITY_SUCCESS, ...responseData });
  } catch (error) {
    dispatch({ type: constants.FETCH_ENTITY_ERROR, error });
  }
};

export const saveEntity = async (entityData) => {
  const { pathname } = getCurrentState().router.location;
  try {
    await request(`/admin${pathname}`, { method: 'PUT', body: entityData });
  } catch (error) {
    console.log(error);
  }
};

export const createEntity = async (entityData, entitiesName) => {
  try {
    await request(`/admin/${entitiesName}`, { method: 'POST', body: entityData });
  } catch (error) {
    console.log(error);
  }
};
