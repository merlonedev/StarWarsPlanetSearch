import React, { useContext } from 'react';
import SWContext from '../Context/SWContext';

function FilterSection() {
  const { setFilters } = useContext(SWContext);

  const handleChange = ({ target }) => {
    setFilters({ filterByName: { name: target.value } });
  };

  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="Filtrar por Nome"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </form>
    </section>
  );
}

export default FilterSection;
