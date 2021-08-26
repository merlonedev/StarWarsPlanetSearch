import React from 'react';
import MyContext from '../Context';

function FilterButton() {
  return (
    <div>
      <MyContext.Consumer>
        {
          ({ handle }) => (
            <button
              type="button"
              name="filter-name"
              id="filter-name"
              onChange={ handle }
              data-testid="button-filter"
            >
              Filtrar
            </button>
          )
        }
      </MyContext.Consumer>
    </div>

  );
}

export default FilterButton;
