import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function FilterForm() {
  const params = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const { filters, setFilter } = useContext(AppContext);
  const handleNameChange = ({ target: { value } }) => {
    setFilter({
      ...filters,
      filters: { filterByName: { name: value.toLowerCase() } },
    });
    console.log(filters);
  };

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          onChange={ handleNameChange }
          data-testid="name-filter"
        />
      </label>
      <label htmlFor="numeric values">
        <select>
          {params.map((param) => <option key={ param }>{param}</option>)}
        </select>
      </label>
    </form>
  );
}
