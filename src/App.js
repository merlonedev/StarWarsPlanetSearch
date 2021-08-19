import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Provider from './Context/Provider';
// import Table from './Components/Table';
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
