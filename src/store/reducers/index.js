import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from './app';

export default history => combineReducers({
  app: appReducer,
  router: connectRouter(history),
});
