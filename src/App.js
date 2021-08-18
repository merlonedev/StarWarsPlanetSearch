import React from 'react';
import FilterSection from './Components/FilterSection';
import Table from './Components/Table';
import './App.css';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <main>
        <FilterSection />
        <Table />
      </main>
    </Provider>
  );
}

export default App;
