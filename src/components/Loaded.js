import React from 'react';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';
import Table from './Table';

function Loaded() {
  return (
    <>
      <NameFilter />
      <NumericFilter />
      <Table />
    </>
  );
}

export default Loaded;
