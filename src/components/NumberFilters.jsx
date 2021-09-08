import React, { useContext } from 'react';
import StarWarsContext from '../context/AppContext';

const NumberFilters = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  const { filterByNumberValues } = filters;

  const deleteFilter = ({ target: { value } }) => {
    const newListFilter = filterByNumberValues
      .filter((filter) => filter.column !== value);

    setFilters({
      ...filters,
      filterByNumberValues: newListFilter,
    });
  };
  if (filterByNumberValues.length === 0) return null;
  if (filterByNumberValues.length > 0) {
    return (
      <section className="filters">
        <span className="filter-title">Filtros aplicados:</span>
        {
          filterByNumberValues.map((filter) => (
            <span
              data-testid="filter"
              key={ filter.column }
            >
              { `${filter.column} | ${filter.comparison} | ${filter.value}` }
              <button
                type="button"
                value={ filter.column }
                onClick={ deleteFilter }
              >
                X
              </button>
            </span>
          ))
        }
      </section>
    );
  }
};
export default NumberFilters;
