import React from 'react';
import MyContext from '../Context';

function SelectColumn() {
  return (
    <div>
      <label htmlFor="filter-column">
        Filter by column
        <MyContext.Consumer>
          {
            ({ handleColumn }) => (
              <select
                onChange={ handleColumn }
                name="filter-column"
                id="filter-column"
                data-testid="column-filter"
              >
                <option>population</option>
                <option>orbital_period</option>
                <option>diameter</option>
                <option>rotation_period</option>
                <option>surface_water</option>
              </select>
            )
          }
        </MyContext.Consumer>
      </label>
    </div>

  );
}

export default SelectColumn;
