import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';
import SearchFilters from './components/SearchFilters';

function App() {
  return (
    <div>
      <Provider>
        <SearchFilters />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
