import React from 'react';
import './App.css';
import Provider from './Provider';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <div>
        <Table />
      </div>
    </Provider>
  );
}

export default App;
