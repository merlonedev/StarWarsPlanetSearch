import React from 'react';
import MyContext from '../Context';

function SelectComparison() {
  return (
    <div>
      <label htmlFor="filter-comparison">
        Filter by comparison
        <MyContext.Consumer>
          {
            ({ handle }) => (
              <select
                data-testid="comparison-filter"
                onChange={ handle }
                name="filter-comparison"
                id="filter-comparison"
              >
                <option>maior que</option>
                <option>menor que</option>
                <option>igual a</option>
              </select>
            )
          }
        </MyContext.Consumer>
      </label>
    </div>

  );
}

export default SelectComparison;
