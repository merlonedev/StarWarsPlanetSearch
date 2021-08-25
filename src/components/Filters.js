import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filters = () => {
  const { filters, setFilters, filterPlanets, setFilterPlanets,
  } = useContext(StarWarsContext);

  const handleChangeName = ({ target: { value } }) => {
    setFilters({
      filterByName: {
        name: value,
      },
    });
  };

  const handleChange = ({ target: { value, name } }) => {
    setFilters({ ...filters,
      filterByNumericValues: { ...filters.filterByNumericValues, [name]: value } });
  };

  const handleClick = () => {
    const { filterByNumericValues: { column, comparison, value } } = filters;
    let planets = filterPlanets;

    switch (comparison) {
    case 'maior que':
      planets = planets.filter((planet) => (planet[column]) > (value));
      break;
    case 'menor que':
      planets = planets.filter((planet) => (planet[column]) < (value));
      break;
    case 'igual a':
      planets = planets.filter((planet) => (planet[column]) === (value));
      break;
    default:
      planets = filterPlanets;
    }

    setFilterPlanets(planets);
  };

  return (
    <div>
      <label htmlFor="name">
        Filter
        <input
          placeholder="Planet name"
          type="text"
          data-testid="name-filter"
          onChange={ handleChangeName }
        />
      </label>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleChange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="value"
        placeholder="type a valor"
        type="number"
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        filtrar
      </button>
    </div>
  );
};
export default Filters;
