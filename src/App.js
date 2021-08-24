import React from 'react';
import ApiProvider from './context/ApiProvider';
import Table from './components/Table';

function App() {
  return (
    <section>
      <ApiProvider>
        <Table />
      </ApiProvider>
    </section>
  );
}

export default App;
