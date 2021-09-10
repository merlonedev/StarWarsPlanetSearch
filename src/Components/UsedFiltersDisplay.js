import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './UsedFiltersDisplay.css';

function UsedFiltersDisplay() {
  const { filters:
    { filterByNumericValues }, setNumValue } = useContext(StarWarsContext);

  const handleClick = (column) => {
    setNumValue(filterByNumericValues.filter((item) => item.column !== column));
  };

  if (filterByNumericValues.length === 0) {
    return (
      <div className="used-filters-div">
        NENHUM FILTRO SELECIONADO
      </div>
    );
  }
  return (
    <div className="used-filters-div">
      { filterByNumericValues.map(({ comparison, value, column }) => (
        <div key={ column } data-testid="filter" className="filter-display">
          { column }
          { ' ' }
          { comparison }
          { ' ' }
          { value }
          { ' ' }
          <button
            type="button"
            onClick={ () => handleClick(column) }
          >
            X
          </button>
        </div>
      )) }
    </div>
  );
}

export default UsedFiltersDisplay;
