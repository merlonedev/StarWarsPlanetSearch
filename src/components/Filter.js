import React, { useContext } from 'react';
import Context from '../context/Context';
import NumericFilter from './NumericFilter';

function App() {
  const { filters, setFilters } = useContext(Context);

  const handleInput = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <div>
      <label htmlFor="name-filter">
        Name:
        <input
          value={ filters.filterByName.name }
          onChange={ handleInput }
          type="text"
          id="name-filter"
          data-testid="name-filter"
        />
      </label>
      <NumericFilter />

    </div>
  );
}

export default App;
