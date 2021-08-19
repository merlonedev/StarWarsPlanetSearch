import React, { useContext } from 'react';
import Context from '../context/Context';
import Input from './Input';

function Filters() {
  const { filtersState, setFiltersState } = useContext(Context);

  const { filters: { filterByName: { name } } } = filtersState;

  const handleChange = (event) => {
    const newState = {
      ...filtersState,
      filters: {
        filterByName: {
          name: event.target.value,
        },
      },
    };
    setFiltersState(newState);
  };

  return (
    <section>
      <Input
        testid="name-filter"
        value={ name }
        onChange={ handleChange }
      />
    </section>
  );
}

export default Filters;
