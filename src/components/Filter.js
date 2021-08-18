import React, { useContext } from 'react';
import Context from '../context/Context';

function App() {
  const { filter, setFilters } = useContext(Context);

  const handleInput = ({ target: { value } }) => {
    setFilters({
      // ...filters,
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
          value={ filter }
          onChange={ handleInput }
          type="text"
          id="name-filter"
          data-testid="name-filter"
        />
      </label>
    </div>
  );
}

export default App;
