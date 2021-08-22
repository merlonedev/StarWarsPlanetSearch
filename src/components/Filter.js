import React, { useContext } from 'react';
import context from '../context/context';

function Filter() {
  const { filters, setFilters } = useContext(context);
  const { name } = filters.filterByName;

  function filterName(tatoo) {
    setFilters({
      filterByName: {
        name: tatoo,
      },
    });
  }

  return (
    <section>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ (tatoo) => filterName(tatoo.target.value) }
          value={ name }
        />
      </form>
    </section>
  );
}

export default Filter;
