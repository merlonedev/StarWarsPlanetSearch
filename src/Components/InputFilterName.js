import React from 'react';
import MyContext from '../Context';

function InputFilterName() {
  return (
    <div>
      <label htmlFor="filter-name">
        Filter by name
        <MyContext.Consumer>
          {
            ({ handle }) => (
              <input
                type="text"
                name="filter-name"
                id="filter-name"
                onChange={ handle }
                data-testid="name-filter"
              />
            )
          }
        </MyContext.Consumer>
      </label>
    </div>

  );
}

export default InputFilterName;
