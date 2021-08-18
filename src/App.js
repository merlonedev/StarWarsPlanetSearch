import React from 'react';
import Table from './components/Table';
import Provider from './context/ContextProvider';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
