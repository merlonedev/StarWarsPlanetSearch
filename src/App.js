import React from 'react';
import './App.css';
import Provider from './Context/Provider';
import Table from './component/Table';
import FilterForName from './component/FilterForName';

function App() {
  return (
    <div>
      <Provider>
        <FilterForName />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
