import React from 'react';
import Order from './Order';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';
import Table from './Table';

function Loaded() {
  return (
    <>
      <NameFilter />
      <Order />
      <NumericFilter />
      <Table />
    </>
  );
}

export default Loaded;
