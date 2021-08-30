import React from 'react';
import MyContext from '../Context';

function FilterButton() {
  return (
    <div>
      <MyContext.Consumer>
        {
          ({ buttonClick }) => (
            <button
              type="button"
              name="filter-name"
              id="filter-name"
              onClick={ buttonClick }
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
