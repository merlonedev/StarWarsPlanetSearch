import React, { useContext, useState } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Search() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('maior que');
  const [valueState, setValueState] = useState(0);
  const {
    state: {
      filters,
    }, handleSetState,
  } = useContext(PlanetsContext);

  const handleNameInputChange = ({ target: { id, name, value } }) => {
    const newFilterValue = { [id]: { [name]: value } };
    handleSetState('filters', newFilterValue);
  };

  const handleColumnChange = ({ target: { value } }) => {
    setColumn(value);
  };

  const handleComparisonChange = ({ target: { value } }) => {
    setComparison(value);
  };

  const handleValueInputChange = ({ target: { value } }) => {
    setValueState(value);
  };

  const handleActivateFilter = () => {
    if (column.length > 0 && !filters.filterByNumericValues.some(
      (filter) => filter.column === column,
    )) {
      const newFilter = {
        ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues, {
            column,
            comparison,
            value: valueState,
          },
        ],
      };
      handleSetState('filters', newFilter);
    }
    const columns = [
      'population', 'rotation_period', 'orbital_period', 'diameter', 'surface_water',
    ].filter((col) => !filters.filterByNumericValues.some(
      (filter) => filter.column === col,
    ));
    setColumn(columns[0]);
  };

  const renderColumnSelect = () => (
    <label htmlFor="column-filter">
      Coluna:
      <select
        value={ column }
        data-testid="column-filter"
        id="column-filter"
        onChange={ handleColumnChange }
      >
        {(!filters.filterByNumericValues || filters.filterByNumericValues.length === 0)
          && <option disabled value="">selecione uma opção</option>}

        {(!filters.filterByNumericValues || !filters.filterByNumericValues.some(
          (filter) => filter.column === 'population',
        ))
          && <option value="population">population</option>}

        {(!filters.filterByNumericValues || !filters.filterByNumericValues.some(
          (filter) => filter.column === 'rotation_period',
        ))
          && <option value="rotation_period">rotation_period</option>}

        {(!filters.filterByNumericValues || !filters.filterByNumericValues.some(
          (filter) => filter.column === 'orbital_period',
        ))
          && <option value="orbital_period">orbital_period</option>}

        {(!filters.filterByNumericValues || !filters.filterByNumericValues.some(
          (filter) => filter.column === 'diameter',
        ))
          && <option value="diameter">diameter</option>}

        {(!filters.filterByNumericValues || !filters.filterByNumericValues.some(
          (filter) => filter.column === 'surface_water',
        ))
          && <option value="surface_water">surface_water</option>}
      </select>
    </label>
  );

  const renderComparisonSelect = () => (
    <label htmlFor="comparison-filter">
      Comparação:
      <select
        value={ comparison }
        data-testid="comparison-filter"
        id="comparison-filter"
        onChange={ handleComparisonChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    </label>
  );

  const renderValueInput = () => (
    <label htmlFor="value-filter">
      Valor:
      <input
        type="number"
        data-testid="value-filter"
        id="value-filter"
        value={ valueState }
        onChange={ handleValueInputChange }
      />
    </label>
  );

  const renderFilterButton = () => (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ handleActivateFilter }
    >
      Ativar Filtro
    </button>
  );

  return (
    <div>
      <label className="name-filter-label" htmlFor="name-filter">
        Search By Name:
        <input
          type="text"
          name="name"
          data-testid="name-filter"
          className="name-filter"
          id="filterByName"
          placeholder="Planet name"
          value={ filters.filterByName.name }
          onChange={ (event) => handleNameInputChange(event) }
        />
      </label>
      <form>
        { renderColumnSelect() }
        { renderComparisonSelect() }
        { renderValueInput() }
        { renderFilterButton() }
      </form>
    </div>
  );
}

export default Search;
