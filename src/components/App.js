import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GeneralLayout from './layouts/general';
import { Login } from './pages';

import '../styles/main.sass';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <GeneralLayout>
          <Route path="/login" component={Login} />
        </GeneralLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
