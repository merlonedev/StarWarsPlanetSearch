import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import './style.css';

const FilterForm = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  const { filterByName: { name } } = filters;

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const renderFilterByName = () => (
    <div className="filter-by-name">
      <input
        data-testid="name-filter"
        placeholder="Planet name"
        value={ name }
        onChange={ handleChange }
      />
    </div>
  );

  return (
    <section className="filter-form">
      { renderFilterByName() }
    </section>
  );
};

export default FilterForm;
