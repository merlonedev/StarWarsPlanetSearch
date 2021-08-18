import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const selectValues = {
  population: 'Population',
  orbital_period: 'Orbital period',
  diameter: 'Diameter',
  rotation_period: 'Rotation period',
  surface_water: 'Surface water',
};

function Filters() {
  const { filters, setFilter } = useContext(StarWarsContext);
  const { filterByName: { name } } = filters;

  const renderPlanetInput = () => (
    <label htmlFor="name-filter">
      Planeta:
      <input
        type="text"
        value={ name }
        id="name-filter"
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => setFilter({
          ...filters, filterByName: { ...filters.filterByName, name: value },
        }) }
      />
    </label>
  );

  const renderNumericFilters = () => (
    <div>
      <select id="column" data-testid="column-filter">
        { Object.keys(selectValues).map((value) => (
          <option key={ value } value={ value }>{ selectValues[value]}</option>
        ))}
      </select>
      <select id="comparison" data-testid="comparison-filter">
        <option value="maior que">Maior que</option>
        <option value="menor que">Menor que</option>
        <option value="igual a">Igual a</option>
      </select>
      <input
        type="number"
        value=""
        id="value"
        data-testid="comparison-filter"
        onChange={ () => {} }
      />
      <button
        type="button"
        data-testid="button-filter"
      >
        Adicionar Filtro
      </button>
    </div>
  );
    

  return (
    <div>
      {renderPlanetInput()}
      {renderNumericFilters()}
    </div>
  );
}

export default Filters;
