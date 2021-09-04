import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../Page/MainPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ MainPage } />
    </Switch>
  );
}

export default Routes;
