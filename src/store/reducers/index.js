import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from './app';
import entityReducer from './entity';
import entityListReducer from './entityList';

export default history => combineReducers({
  app: appReducer,
  entity: entityReducer,
  entityList: entityListReducer,
  router: connectRouter(history),
});
