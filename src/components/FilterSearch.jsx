import React, { useContext } from 'react';
import Context from '../context/Context';

export default function FilterName() {
  const { name, setFilters, filters } = useContext(Context);

  const filterNamePlanets = ({ target }) => {
    const { value } = target;
    setFilters({ ...filters, filterByName: { name: value } });
  };

  return (
    <div>
      <label className="input-group-text" htmlFor="filter">
        Filter Search:
        {' '}
        <input
          type="text"
          data-testid="name-filter"
          value={ name }
          onChange={ (e) => filterNamePlanets(e) }
        />
      </label>
    </div>
  );
}
