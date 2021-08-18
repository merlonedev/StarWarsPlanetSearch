import React, { useState, useContext } from 'react';
import OrderFilter from './OrderFilter';
import StarWarsContext from '../context/StarWarsContext';

const selectValues = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const INITIAL_STATE = {
  column: 'population',
  comparison: 'maior que',
  value: 0,
};

function Filters() {
  const { filters, setFilter } = useContext(StarWarsContext);
  const { filterByName: { name }, filterByNumericValues } = filters;
  const [numericFilter, setNumericFilter] = useState(INITIAL_STATE);

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

  const numericFiltersOnChangeHandle = ({ target: { id, value } }) => {
    setNumericFilter({
      ...numericFilter,
      [id]: value,
    });
  };

  const renderNumericFilters = () => {
    const selectValuesWithFilter = [...selectValues];
    if (filterByNumericValues.length > 0) {
      filterByNumericValues
        .map((filter) => filter.column)
        .forEach((column) => {
          const index = selectValuesWithFilter.indexOf(column);
          selectValuesWithFilter.splice(index, 1);
        });
    }
    return (
      <div>
        <select
          id="column"
          data-testid="column-filter"
          onChange={ numericFiltersOnChangeHandle }
          value={ numericFilter.column }
        >
          { selectValuesWithFilter.map((value) => (
            <option key={ value } value={ value }>{ value }</option>
          ))}
        </select>
        <select
          id="comparison"
          data-testid="comparison-filter"
          onChange={ numericFiltersOnChangeHandle }
          value={ numericFilter.comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          value={ numericFilter.value }
          id="value"
          data-testid="value-filter"
          onChange={ numericFiltersOnChangeHandle }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            setFilter({
              ...filters,
              filterByNumericValues: [...filters.filterByNumericValues, numericFilter],
            });
            setNumericFilter(INITIAL_STATE);
          } }
        >
          Adicionar Filtro
        </button>
      </div>
    );
  };

  return (
    <div>
      {renderPlanetInput()}
      <OrderFilter />
      {renderNumericFilters()}
    </div>
  );
}

export default Filters;
