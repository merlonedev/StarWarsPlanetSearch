import React from 'react';
import MyContext from '../Context';

const columns = 0;

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
      <MyContext.Consumer>
        {
          ({ renderButton, deleteButton }) => (renderButton.length > columns
            ? renderButton.map((col, i) => (
              <button
                type="button"
                name={ col.coluna }
                key={ i }
                data-testid="filter"
                onClick={ deleteButton }
              >
                {`${col.coluna} ${col.comparar} ${col.valor}`}
              </button>)) : false)
        }
      </MyContext.Consumer>
    </div>

  );
}

export default FilterButton;
