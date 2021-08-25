import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filters = () => {
  const { setFilters } = useContext(StarWarsContext);

  const handleChange = ({ target: { value } }) => {
    setFilters({
      filterByName: {
        name: value,
      },
    });
  };
  return (
    <div>
      <label htmlFor="name">
        Filter
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
};
export default Filters;
