import React from 'react';
import './App.css';
import Provider from './Context/Provider';
import Table from './component/Table';
import FilterForName from './component/FilterForName';
import Select from './component/Select';

function App() {
  return (
    <div>
      <Provider>
        <FilterForName />
        <Select />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
