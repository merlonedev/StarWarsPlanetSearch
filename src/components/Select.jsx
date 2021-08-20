import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Select() {
  const {
    handleChangeSelect,
    handleCompareNumber,
    handleComparation,
    column,
    filterByNumericValues,
    comparison,
    valuer,
    filterOptions,
  } = useContext(MyContext);

  const options = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ].filter((option) => !filterByNumericValues.some((obj) => obj.column === option));

  const comparations = [
    'maior que',
    'menor que',
    'igual a',
  ];

  return (
    <>
      <select data-testid="column-filter" name="selected" onChange={ handleChangeSelect }>
        { options.map((option, index) => (
          <option key={ index } label={ option } value={ option }>
            { option }
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="compareString"
        onChange={ handleComparation }
      >
        { comparations.map((compare, index) => (
          <option value={ compare } label={ compare } key={ index }>
            { compare }
          </option>
        ))}
      </select>
      <input
        name="value"
        onChange={ handleCompareNumber }
        data-testid="value-filter"
        type="number"
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => filterOptions(column, valuer, comparison) }
      >
        Filtrar
      </button>
    </>
  );
}

export default Select;
