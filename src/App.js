import React from 'react';
import Table from './components/Table/Table';
import StarWarsProvider from './context/StarWarsProvider';
import './styles/App.css';

function App() {
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
