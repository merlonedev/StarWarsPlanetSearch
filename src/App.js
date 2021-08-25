import React from 'react';
import Filters from './componentes/Filters';
import Provider from './context/Provider';
import Table from './componentes/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <Filters>
        <span>Hello, App!</span>
        <Table />
      </Filters>
    </Provider>
  );
}

export default App;
