import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MainPage from './Page/MainPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MainPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
