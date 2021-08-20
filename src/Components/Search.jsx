import React, { useContext, useState } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Search() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('higher');
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
        <option value="population">population</option>
        <option value="rotation_period">rotation_period</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="surface_water">surface_water</option>
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
