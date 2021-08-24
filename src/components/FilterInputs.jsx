import React, { useContext } from 'react';
import appContext from '../context/appContext';

function FilterInputs() {
  const { filterPlanetsName } = useContext(appContext);
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
