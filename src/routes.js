import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Calendario from './pages/Calendar/Calendar';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/calendar" component={Calendario} />
    </Switch>
  );
}
