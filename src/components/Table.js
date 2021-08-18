import React from 'react';
import usePlanetsData from '../hooks/usePlanetsData';

function Table() {
  usePlanetsData();

  return (
    <section>
      Tabela!
    </section>
  );
}

export default Table;
