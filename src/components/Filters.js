import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';

function FilterName() {
  const { planetFilters, setPlanetFilters, columns, setColumns } = useContext(SWContext);
  const { filterByName: { name: filtered }, filterByNumericValues } = planetFilters;
  const [numberFilter, setNumberFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const comparison = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const handleNamePlanet = ({ target: { value } }) => {
    setPlanetFilters({
      ...planetFilters,
      filterByName: {
        name: value,
      },
    });
  };

  const handleFilters = ({ target: { name, value } }) => {
    setNumberFilter({
      ...numberFilter,
      [name]: value,
    });
  };

  const handleClick = () => {
    setPlanetFilters({
      ...planetFilters,
      filterByNumericValues: [...filterByNumericValues, numberFilter],
    });

    setColumns(columns.filter((del) => del !== numberFilter.column));
  };

  // const handleRemove = () => {
  //   console.log('toaki');
  //   setNumberFilter();
  // };

  const { value } = numberFilter;
  const renderFiltersNumbers = () => (
    <div>
      <form name="fomrSelect">
        <select
          name="column"
          data-testid="column-filter"
          onChange={ handleFilters }
        >
          { columns.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          )) }
        </select>
        <button type="button" data-testid="filter">x</button>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleFilters }
        >
          { comparison.map((option) => (
            <option
              key={ option }
              value={ option }
            >
              { option }
            </option>
          )) }
        </select>
        <button type="button" data-testid="filter">x</button>
        <input
          name="value"
          type="number"
          min="0"
          data-testid="value-filter"
          value={ value }
          onChange={ handleFilters }
        />
        <button type="button" data-testid="filter">x</button>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Search
        </button>
      </form>
    </div>
  );

  const renderInputName = () => (
    <div>
      <label htmlFor="name-filter">
        Search planet:
        <input
          data-testid="name-filter"
          id="name-filter"
          name="name-filter"
          type="text"
          value={ filtered }
          onChange={ handleNamePlanet }
        />
      </label>
    </div>
  );

  const style = { display: 'flex' };
  return (
    <div style={ style }>
      { renderInputName() }
      { renderFiltersNumbers() }
    </div>
  );
}

export default FilterName;
