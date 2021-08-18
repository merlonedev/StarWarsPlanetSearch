import React, { useContext } from 'react';
import dataContext from '../context/dataContext';

function FilterByName() {
  const { state, setState } = useContext(dataContext);
  const filterName = (event) => {
    const { value } = event.target;
    const newState = {
      filters: {
        filterByName: {
          name: value,
        },
      },
    };

    setState({
      ...state,
      ...newState,
    });
  };

  return (
    <div className="filterByName">
      <label htmlFor="name-filter">
        <input
          data-testid="name-filter"
          id="name-filter"
          type="text"
          placeholder="Name"
          onChange={ (event) => filterName(event) }
        />
      </label>
    </div>
  );
}

export default FilterByName;
