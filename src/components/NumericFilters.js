import React, { useContext } from 'react';
import StarWarsContext from '../context/Context';

const NumericFilters = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const deleteFilter = ({ target: { value } }) => {
    const newListFilter = filterByNumericValues
      .filter((filter) => filter.column !== value);

    setFilters({
      ...filters,
      filterByNumericValues: newListFilter,
    });
  };
  if (filterByNumericValues.length === 0) return null;
  if (filterByNumericValues.length > 0) {
    return (
      <section className="filters">
        <span className="filter-title">Filtros aplicados:</span>
        {
          filterByNumericValues.map((filter) => (
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
export default NumericFilters;
