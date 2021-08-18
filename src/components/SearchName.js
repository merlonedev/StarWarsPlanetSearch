import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

/**
* Consultei o repositório de José Henrique Margraf Melo para resolver essa parte.
* Link: https://github.com/tryber/sd-011-project-starwars-planets-search/pull/9/commits/3eca2162d48e989e4b737cf69f177f6f2699756c
*/

function SearchName() {
  const { setFilters, filters } = useContext(PlanetsContext);

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
  };

  return (
    <form>
      <input
        name="name-filter"
        data-testid="name-filter"
        placeholder="search a planet by name"
        type="text"
        onChange={ handleChange }
      />
    </form>
  );
}

export default SearchName;
