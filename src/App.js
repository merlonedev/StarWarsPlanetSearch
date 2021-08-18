import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchText from './components/SearchText';
import Provider from './context/Provider';

function App() {
  return (
    <div>
      <Provider>
        <SearchText />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
