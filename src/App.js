import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Provider from './Context/Provider';
import Home from './Pages/Home';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
