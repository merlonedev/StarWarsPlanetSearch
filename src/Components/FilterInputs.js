import React, { useContext } from 'react';
import ContextApp from '../ContextAPI/ContextApp';

function FilterInputs() {
  const { filterPlanetsName } = useContext(ContextApp);
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        onChange={ filterPlanetsName }
      />
    </div>
  );
}

export default FilterInputs;
