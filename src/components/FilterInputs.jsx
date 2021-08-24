import React, { useContext, useState } from 'react';
import appContext from '../context/appContext';

function FilterInputs() {
  const {
    filterPlanetsName,
    filteredColumns,
    handleClickFilter,
    filterNumberValue } = useContext(appContext);
  const [selectedColumn, setSelectedColumn] = useState('population');
  const [selectedComparison, setSelectedComparison] = useState('maior que');
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'column-filter') {
      return setSelectedColumn(value);
    }
    if (name === 'comparison-filter') {
      return setSelectedComparison(value);
    }
    return setSelectedValue(value);
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        onChange={ filterPlanetsName }
      />
      <select
        data-testid="column-filter"
        name="column-filter"
        value={ selectedColumn }
        onChange={ handleChange }
      >
        { filteredColumns.map((column) => (
          <option key={ column } value={ column }>{ column }</option>)) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison-filter"
        value={ selectedComparison }
        onChange={ handleChange }
      >
        <option>
          maior que
        </option>
        <option>
          menor que
        </option>
        <option>
          igual a
        </option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value-filter"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          handleClickFilter({ selectedColumn, selectedComparison, selectedValue });
          filterNumberValue(selectedColumn, selectedComparison, selectedValue);
        } }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterInputs;
