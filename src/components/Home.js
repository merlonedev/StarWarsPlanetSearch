import React from 'react';
import Form from './Form';
import InputFilterPlanets from './InputFilterPlanets';
import Table from './Table';

function Home() {
  return (
    <>
      <InputFilterPlanets />
      <Form />
      <Table />
    </>
  );
}

export default Home;
