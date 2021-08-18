import React from 'react';
import Table from './components/Table';
import NewProvider from './context/MyContext';

function App() {
  return (
    <div>
      <NewProvider>
        <Table />
      </NewProvider>
    </div>
  );
}

export default App;
