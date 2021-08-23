import React from 'react';
import './App.css';

import Provider from './Context/Provider';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <h1>StarWars Planet Search</h1>
      <div>
        <h2>Planets search</h2>
      </div>
      <Table />
    </Provider>
    // commit inicial
  );
}

export default App;
