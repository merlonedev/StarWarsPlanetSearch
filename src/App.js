import React from 'react';
import './App.css';
import Provider from './Context/Provider';
import Table from './component/Table';

function App() {
  return (
    <div>
      <Provider>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
