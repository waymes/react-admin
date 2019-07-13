import { TOGGLE_DRAWER } from '../constants/app';
import { dispatch } from '..';

export const toggleDrawer = () => {
  dispatch({ type: TOGGLE_DRAWER });
};
