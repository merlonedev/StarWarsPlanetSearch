import React from 'react';
import NameFilter from './NameFilter';
import SelectFilters from './SelectFilters';

function Filters() {
  return (
    <section className="filters-content">
      <NameFilter />
      <SelectFilters />
    </section>
  );
}

export default Filters;
