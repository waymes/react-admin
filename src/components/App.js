import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import GeneralLayout from './layouts/general';
import { Login, EntitiesList } from './pages';

import { store, history } from '../store';

import '../styles/main.sass';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <GeneralLayout>
            <Route path="/login" component={Login} />
            <Route exact path="/:entities" component={EntitiesList} />
          </GeneralLayout>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
