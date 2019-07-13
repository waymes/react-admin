import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import createRootReducer from './reducers';

export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

const composeEnhancers = composeWithDevTools({
  name: 'PMS'
});

const middleware = [routerMiddleware(history)];
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancer);

export const getCurrentState = () => store.getState();
export const dispatch = (...args) => store.dispatch(...args);
