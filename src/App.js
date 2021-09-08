import React from 'react';
import MyProvider from './Context/MyProvider';
import Table from './Components/componentsTable/Table';
import Header from './Components/componentsHeader/Header';

function App() {
  return (
    <MyProvider>
      <Header />
      <br />
      <br />
      <Table />
    </MyProvider>
  );
}

export default App;
