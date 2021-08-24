import React from 'react';
import SearchBar from './components/SearchBar';
import Provider from './contexts/PlanetListProvider';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <SearchBar />
      <Table />
    </Provider>
  );
}

export default App;
