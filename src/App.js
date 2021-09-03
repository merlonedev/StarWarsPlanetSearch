import React from 'react';
import './App.css';
import Provider from './Context/Provider';
import Table from './component/Table';
import FilterForName from './component/FilterForName';
import Select from './component/Select';
import ShowFilter from './component/ShowFilter';

function App() {
  return (
    <div>
      <Provider>
        <FilterForName />
        <Select />
        <ShowFilter />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
